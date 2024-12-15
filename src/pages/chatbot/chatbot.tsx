import React, { useState, useRef, useEffect } from 'react';
import { FaReact } from 'react-icons/fa'; // Nhập biểu tượng React từ react-icons

const ChatbotPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Tắt thanh cuộn cho toàn bộ trang khi vào trang này
    document.body.style.overflow = 'hidden';

    return () => {
      // Khôi phục lại thanh cuộn khi rời khỏi trang
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, `You: ${message}`]);
      setMessage(""); // Xóa input sau khi gửi tin nhắn
      // Thêm phản hồi mẫu từ bot
      setTimeout(() => {
        setMessages(prev => [...prev, "Bot: Đây là phản hồi mẫu!"]);
      }, 500);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#1e1e2f', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      {/* Chat content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', margin: '2% 22% 3%', borderRadius: '10px', backgroundColor: '#292b3a', display: 'flex', flexDirection: 'column' }} ref={chatRef}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              margin: '10px 0',
              padding: '10px 15px',
              borderRadius: '10px',
              backgroundColor: msg.startsWith("You:") ? '#0078ff' : '#444',
              color: msg.startsWith("You:") ? '#fff' : '#ddd',
              maxWidth: '70%',
              alignSelf: msg.startsWith("You:") ? 'flex-end' : 'flex-start',
              textAlign: 'left',
              display: 'inline-block',
              whiteSpace: 'pre-wrap',
            }}
          >
            {msg.replace("You:", "").replace("Bot:", "")}
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        position: 'sticky',
        bottom: 0,
      }}>
        {/* Biểu tượng React xoay vòng */}
        <FaReact style={{
          fontSize: '30px',
          marginRight: '10px',
          animation: 'spin 5s infinite linear',
        }} />
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            maxWidth: '50%',
            padding: '10px 15px',
            borderRadius: '20px',
            border: 'none',
            outline: 'none',
            backgroundColor: '#292b3a',
            color: '#fff',
            fontSize: '16px',
            boxShadow: '0 -2px 5px rgba(0,0,0,0.3)',
          }}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          style={{
            marginLeft: '10px',
            padding: '10px 20px',
            backgroundColor: '#0078ff',
            color: '#fff',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          Send
        </button>
      </div>

      {/* CSS Animation cho hiệu ứng xoay */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ChatbotPage;
