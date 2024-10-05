import { WebSocketServer } from 'ws';
import { NextApiRequest, NextApiResponse } from 'next';
import http from 'http';

let wss: WebSocketServer | null = null;

// Essa função vai iniciar o servidor WebSocket
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!wss) {
    const server = http.createServer((req, res) => res.end('WebSocket Server'));
    wss = new WebSocketServer({ server });

    wss.on('connection', (ws) => {
      ws.on('message', async (message: string) => {
        // Quando receber uma mensagem, envia para a API do ChatGPT
        const content = JSON.parse(message).message;

        try {
          const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'gpt-3.5-turbo',
              messages: [{ role: 'user', content }],
            }),
          });

          const data = await response.json();
          const assistantMessage = data.choices[0].message.content;

          // Envia a resposta do ChatGPT de volta ao cliente via WebSocket
          ws.send(JSON.stringify({ role: 'assistant', content: assistantMessage }));
        } catch (error) {
          console.error('Erro ao processar a mensagem:', error);
          ws.send(JSON.stringify({ error: 'Erro ao processar a mensagem' }));
        }
      });
    });

    server.listen(4000, () => {
      console.log('WebSocket Server running on port 4000');
    });
  }
  
  res.status(200).json({ message: 'WebSocket server running' });
}
