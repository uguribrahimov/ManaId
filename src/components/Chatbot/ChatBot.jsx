import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const welcomeMessage = { text: 'Salam, Sizə necə kömək edə bilərəm?', sender: 'bot' };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    const botResponse = getBotResponse(input);
    setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);

    setInput('');


    if (input.toLowerCase().includes('kreslo')) {
      navigate('/CartDetails/2');
    } else if (input.toLowerCase().includes('yataq')) {
      navigate('/CartDetails/3');
    } else if (input.toLowerCase().includes('stul')) {
      navigate('/CartDetails/6');
    }
  };

  const getBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes('salam')) {
      return 'Salam! Sizə necə kömək edə bilərəm?';
    } else if (lowerCaseInput.includes('necəsən')) {
      return 'Mən bir botam, amma təşəkkür edirəm! Siz necəsiniz?';
    } else if (lowerCaseInput.includes('təşəkkür')) {
      return 'Buyurun! Başqa sualınız var?';
    } else if (lowerCaseInput.includes('sağ ol')) {
      return 'Buyurun! Başqa sualınız var?';
    } else if (lowerCaseInput.includes('görüşənədək')) {
      return 'Görüşənədək! Xoş günlər arzulayıram.';
    } else if (lowerCaseInput.includes('kreslo')) {
      return 'Kreslo ilə bağlı məlumat üçün sizi uyğun səhifəyə yönləndirirəm...';
    } else if (lowerCaseInput.includes('yataq')) {
      return 'Yataq ilə bağlı məlumat üçün sizi uyğun səhifəyə yönləndirirəm...';
    } else if (lowerCaseInput.includes('stul')) {
      return 'Stul ilə bağlı məlumat üçün sizi uyğun səhifəyə yönləndirirəm...';
    } else {
      return 'Bağışlayın, başa düşmədim. Zəhmət olmasa başqa bir sual verin.';
    }
  };

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="chatbot-toggle-button" onClick={toggleChatBot}>
        {isOpen ? '✖' : '💬'}
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Bir mesaj yazın..."
            />
            <button onClick={handleSend}>Göndər</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;