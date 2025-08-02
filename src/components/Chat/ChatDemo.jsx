import React, { useState } from 'react';

const ChatDemo = () => {
  const [messages, setMessages] = useState([
    { sender: 'system', text: 'Welcome to the real-time chat demo!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { sender: 'system', text: 'This is a demo response.' }
      ]);
    }, 800);
    setInput('');
  };

  return (
    <div className="chat-demo" style={{maxWidth: 400, margin: '2rem auto', border: '1px solid #ccc', borderRadius: 8, padding: 16}}>
      <h2>Real-Time Chat (Demo)</h2>
      <div style={{height: 200, overflowY: 'auto', background: '#f9f9f9', marginBottom: 12, padding: 8}}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '4px 0'}}>
            <span style={{color: msg.sender === 'user' ? '#007bff' : '#555'}}>{msg.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} style={{display: 'flex', gap: 8}}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{flex: 1}}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatDemo;
