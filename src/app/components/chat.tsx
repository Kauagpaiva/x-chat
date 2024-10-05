// src/app/components/Chat.tsx
"use client";

import { useEffect, useState } from 'react';
import TextBar from './textBar'; // Importando o TextBar

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  // Configura o WebSocket quando o componente é montado
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:4000'); // Conecta ao servidor WebSocket

    // Recebe as mensagens do servidor WebSocket
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: data.content }]);
    };

    setWs(socket);

    return () => socket.close(); // Fecha a conexão ao desmontar o componente
  }, []);

  const handleSendMessage = (message: string) => {
    if (!ws || message.trim() === '') return;

    const newMessage: Message = { role: 'user', content: message };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    ws.send(JSON.stringify({ message })); // Envia a mensagem ao WebSocket server
  };

  return (
    <div className="flex flex-col h-full w-full p-4">
      <div className="flex-grow overflow-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 my-2 w-fit max-w-prose ${
              message.role === 'user' 
                ? 'bg-[#3ea59f] text-white self-end ml-auto' // Mensagens do usuário à direita
                : 'bg-gray-300 text-black self-start mr-auto' // Respostas do assistente à esquerda
            } rounded-lg`}>
            {message.content}
          </div>
        ))}
      </div>
      <TextBar onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
