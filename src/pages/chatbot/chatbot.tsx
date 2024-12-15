import React, { useState, useRef, useEffect } from 'react';
import { FaReact, FaTrash, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Nhập biểu tượng mũi tên trái và phải

const ChatbotPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(true); // Thêm state để quản lý việc thu gọn lịch sử
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
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
      setHistory([...history, message]);
      setMessage("");
      setTimeout(() => {
        setMessages(prev => [...prev, "Bot: Đây là phản hồi mẫu!"]);
      }, 500);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setHistory([]);
  };

  const handleClearHistory = () => {
    setHistory([]); // Xoá tất cả lịch sử tìm kiếm
  };

  const toggleHistoryVisibility = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#1e1e2f', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      {/* Thanh lịch sử tìm kiếm bên trái */}
      <div style={{
        width: isHistoryVisible ? '15%' : '1%', // Thay đổi chiều rộng khi ẩn
        backgroundColor: '#292b3a',
        padding: '10px',
        borderRadius: '10px',
        marginRight: '10px',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        transition: 'width 0.3s',
      }}>
        <button
          onClick={toggleHistoryVisibility}
          style={{
            backgroundColor: '#292b3a',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          {isHistoryVisible ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
        {isHistoryVisible && (
          <>
            <h3 style={{ color: '#fff' }}>Search History</h3>
            {history.map((item, index) => (
              <div key={index} style={{
                backgroundColor: '#444',
                color: '#ddd',
                margin: '5px 0',
                padding: '5px 10px',
                borderRadius: '10px',
                maxWidth: '100%',
              }}>
                {item}
              </div>
            ))}
            <button
              onClick={handleClearHistory}
              style={{
                marginTop: '10px',
                padding: '5px 10px',
                backgroundColor: '#ff4d4d',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Clear All History
            </button>
          </>
        )}
      </div>

      {/* Chat content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          margin: '2% 22% 3%',
          borderRadius: '10px',
          backgroundColor: '#292b3a',
          display: 'flex',
          flexDirection: 'column',
        }} ref={chatRef}>
          {messages.map((msg, index) => (
            <div key={index} style={{
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
            }}>
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
          <FaTrash
            onClick={handleClearChat}
            style={{
              fontSize: '25px',
              marginLeft: '10px',
              color: '#ff4d4d',
              cursor: 'pointer',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#ff0000'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#ff4d4d'}
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
      </div>

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
