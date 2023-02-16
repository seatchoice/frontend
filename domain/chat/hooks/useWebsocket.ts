import SockJS from 'sockjs-client';
import * as StompJS from '@stomp/stompjs';

export default function SocketClient(token) {
  const stompClient = new StompJS.Client({
    brokerURL: 'wss://seatchoice.site/api/websocket',
    connectHeaders: { Authorization: token, 'Content-Type': 'application/json' },
    debug(str) {
      console.log(str);
    },
    onStompError(frame) {
      // console.log(`Broker reported error: ${frame.headers.message}`);
      // console.log(`Additional details: ${frame.body}`);
    },
    reconnectDelay: 50000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });

  stompClient.webSocketFactory = () =>
    new SockJS('https://seatchoice.site/api/websocket');

  return stompClient;
}
