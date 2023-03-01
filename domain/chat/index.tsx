import { getRoomId } from '@/domain/chat/apis/getRoomId';
import SocketClient from '@/domain/chat/hooks/useWebsocket';
import { Client, StompSubscription } from '@stomp/stompjs';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@/domain/auth/hooks/useAuth';

import { STORAGE } from '@/constants';

import ChatHeader from './components/ChatHeader';
import ChatPanel from './components/ChatPanel';
import ChatForm from './components/ChatForm';

let stompClient: Client;
let subscription: StompSubscription;
let roomId: number;
let token: string;

type info = {
  nickname: string;
  message: string;
};

export default function Chat() {
  const panelRef = useRef<HTMLElement>(null);
  const [chats, setChats] = useState<info[]>([]);

  const router = useRouter();

  const { id } = router.query;

  const { user } = useAuth();

  const handleMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { message } = event.target as HTMLFormElement;
    const chat = message.value;

    if (chat.trim() === '') return;
    message.value = '';

    stompClient.publish({
      destination: `/pub/chat.message.${roomId}`,
      body: JSON.stringify({ message: chat, nickname: user }),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
  };

  const setroomId = async (token: string) => {
    roomId = await getRoomId(`${id}`, token).then(response => response.data.roomId);
    if (roomId < 0) router.push('/');
  };

  useEffect(() => {
    token = localStorage.getItem(STORAGE.ACCESS_TOKEN) ?? '';
    setroomId(token);

    stompClient = SocketClient(token);
    stompClient.onConnect = () => {
      subscription = stompClient.subscribe(
        `/exchange/chat.exchange/room.${roomId}`,
        ({ body }) => {
          const { message, nickname } = JSON.parse(body);
          setChats([...chats, { message, nickname }]);
        },
        {
          Authorization: token,
          'Content-Type': 'application/json',
        }
      );
    };

    stompClient.activate();

    return () => {
      if (stompClient && subscription) {
        stompClient.deactivate();
        subscription.unsubscribe();
      }
    };
  }, [chats]);

  useEffect(() => {
    window.scrollTo({
      top: panelRef.current?.scrollHeight,
      behavior: 'smooth',
    });
  }, [chats]);

  return (
    <article className="flex flex-col h-screen" ref={panelRef}>
      <ChatHeader />
      <ChatPanel chats={chats} />
      <ChatForm handleMessage={handleMessage} />
    </article>
  );
}
