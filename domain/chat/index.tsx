import { getRoomId } from '@/domain/chat/apis/getRoomId';
import SocketClient from '@/domain/chat/hooks/useWebsocket';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

import { STORAGE } from '@/constants';

import ChatHeader from './components/ChatHeader';
import ChatPanel from './components/ChatPanel';
import ChatForm from './components/ChatForm';

let stompClient = null;
let subscription;
let roomId: number;
let token: string;

export default function Chat() {
  const panelRef = useRef(null);
  const [chats, setChats] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  const handleMessage = e => {
    e.preventDefault();
    const chat = e.target.message.value;
    if (chat.trim() === '') return;
    e.target.message.value = '';

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
    roomId = await getRoomId(1018, token).then(response => response.data.data.roomId);
  };

  useEffect(() => {
    token = localStorage.getItem(STORAGE.ACCESS_TOKEN);
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
