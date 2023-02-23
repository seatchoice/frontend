import { getRoomId } from '@/domain/chat/apis/getRoomId';
import SocketClient from '@/domain/chat/hooks/useWebsocket';
import { Client, StompSubscription } from '@stomp/stompjs';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

import { STORAGE } from '@/constants';

import ChatHeader from './components/ChatHeader';
import ChatPanel from './components/ChatPanel';
import ChatForm from './components/ChatForm';

let stompClient: Client;
let subscription: StompSubscription;
let roomId: number;
let token: string;

export default function Chat() {
  const panelRef = useRef<HTMLElement>(null);
  const [chats, setChats] = useState<string[]>([]);

  const router = useRouter();

  const { id } = router.query;

  const handleMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { message } = event.target as HTMLFormElement;
    const chat = message.value;

    if (chat.trim() === '') return;
    message.value = '';

    stompClient.publish({
      destination: `/api/send/${roomId}`,
      body: JSON.stringify({ message: chat }),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
  };

  const setroomId = async (token: string) => {
    roomId = await getRoomId(`${id}`, token).then(response => response.data.roomId);
  };

  useEffect(() => {
    token = localStorage.getItem(STORAGE.ACCESS_TOKEN) ?? '';
    setroomId(token);

    stompClient = SocketClient(token);
    stompClient.onConnect = () => {
      subscription = stompClient.subscribe(
        `/api/chat/${roomId}`,
        ({ body }) => {
          const { message } = JSON.parse(body);
          setChats([...chats, message]);
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
