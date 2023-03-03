import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';

import { getRoomId } from '@/domain/chat/apis/getRoomId';
import { getHistory } from '@/domain/chat/apis/getHistory';
import SocketClient from '@/domain/chat/hooks/useWebsocket';
import { Client, StompSubscription } from '@stomp/stompjs';
import { useAuth } from '@/domain/auth/hooks/useAuth';

import ChatHeader from './components/ChatHeader';
import ChatPanel from './components/ChatPanel';
import ChatForm from './components/ChatForm';

type info = {
  nickname: string;
  message: string;
};

let stompClient: Client;
let subscription: StompSubscription;
let roomId: number;
let token: string;

export default function Chat() {
  const panelRef = useRef<HTMLElement>(null);

  const router = useRouter();

  const { id, name } = router.query;
  const { user } = useAuth();

  const [msg, setMsg] = useState<info>({ message: '입장', nickname: user?.nickname });
  const [chats, setChats] = useState<info[]>([]);

  const conn = () => {
    token = localStorage.getItem('ACCESS_TOKEN') ?? '';
    stompClient = SocketClient(token);
    stompClient.onConnect = () => {
      subscription = stompClient.subscribe(
        `/exchange/chat.exchange/room.${roomId}`,
        ({ body }) => {
          const { message, nickname } = JSON.parse(body);
          setMsg({ message, nickname });
        },
        {
          Authorization: token,
          'Content-Type': 'application/json',
        }
      );
    };

    stompClient.activate();

    const chatHistory = async () => {
      const chattingMessages = await getHistory(String(roomId), token).then(
        res => res.data.chattingMessages
      );
      console.log(chattingMessages);
      setChats(chattingMessages);
    };
    chatHistory();
    // setChats();
  };

  const disconn = () => {
    setChats([]);
    if (stompClient && subscription) {
      stompClient.deactivate();
      subscription.unsubscribe();
    }
  };

  const send = (message: string, nickname: string) => {
    stompClient.publish({
      destination: `/pub/chat.message.${roomId}`,
      body: JSON.stringify({ message, nickname }),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
  };

  const handleMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { message } = event.target as HTMLFormElement;
    const chat = message.value;

    if (chat.trim() === '') return;
    message.value = '';

    send(chat, user?.nickname);
  };

  useEffect(() => {
    token = localStorage.getItem('ACCESS_TOKEN') ?? '';
    const setroomId = async (token: string) => {
      roomId = await getRoomId(`${id}`, token).then(response => response.data.roomId);
      if (roomId < 0) router.push('/');
    };
    setroomId(token);

    return disconn;
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: panelRef.current?.scrollHeight,
      behavior: 'smooth',
    });
  }, [chats]);

  useEffect(() => {
    setChats([...chats, msg]);
  }, [msg]);

  return (
    <article className="flex flex-col h-screen" ref={panelRef}>
      <ChatHeader
        theater={String(name)}
        conn={conn}
        disconn={() => {
          disconn();
          router.push('/');
        }}
      />
      <ChatPanel chats={chats} />
      <ChatForm handleMessage={handleMessage} />
    </article>
  );
}
