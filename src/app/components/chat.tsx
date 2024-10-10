"use client";

import { useEffect, useState } from 'react';
import TextBar from './textBar';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [currentAssistantMessage, setCurrentAssistantMessage] = useState<string>(''); // Armazena a mensagem enquanto está sendo "digitada"

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:4000');

    // Recebe os fragmentos de mensagens da API
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.role === 'assistant') {
        // Atualiza a mensagem em construção
        setCurrentAssistantMessage((prev) => prev + data.content);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
    };

    setWs(socket);

    return () => socket.close();
  }, []);

  const handleSendMessage = (message: string) => {
    if (!ws || message.trim() === '') return;

    const newMessage: Message = { role: 'user', content: message };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    ws.send(JSON.stringify({ message })); // Envia a mensagem ao WebSocket server
  };

  // Finaliza a mensagem do assistente quando o stream terminar
  useEffect(() => {
    if (currentAssistantMessage) {
      const timer = setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'assistant', content: currentAssistantMessage },
        ]);
        setCurrentAssistantMessage(''); // Reseta a mensagem atual para futuras interações
      }, 1000); // Simula um pequeno delay antes de finalizar a mensagem

      return () => clearTimeout(timer);
    }
  }, [currentAssistantMessage]);

  return (
    <div className="flex flex-col h-full w-full p-4">
      <div className="flex-grow overflow-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 my-2 w-fit max-w-prose break-words whitespace-pre-wrap ${
              message.role === 'user'
                ? 'bg-[#3ea59f] text-white self-end ml-auto'
                : 'bg-gray-300 text-black self-start mr-auto'
            } rounded-lg`}>
            {message.content}
          </div>
        ))}

        {/* Exibe a mensagem sendo digitada em tempo real */}
        {currentAssistantMessage && (
          <div className="p-2 my-2 w-fit max-w-prose break-words whitespace-pre-wrap bg-gray-300 text-black self-start mr-auto rounded-lg">
            {currentAssistantMessage}
          </div>
        )}
      </div>
      <TextBar onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
