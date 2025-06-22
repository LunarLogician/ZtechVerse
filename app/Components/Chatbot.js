"use client"


import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, Trash2 } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      
      text: "Hi! I&apos;m Zubair&apos;s AI assistant. I can help you learn about his services, skills, and how he can help your business. What would you like to know?",

      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const suggestionQuestions = [
    "What services does Zubair offer?",
    "How can Zubair help improve my website speed?",
    "Tell me about Zubair's experience with security"
  ];

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          context: "You are Zubair's portfolio assistant. Zubair is a full-stack developer specializing in React, Node.js, database optimization, website performance, security, and modern web technologies. Be helpful, professional, and focus on how Zubair can help potential clients with their business needs."
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const botMessage = {
        id: Date.now() + 1,
        text: data.message,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting right now. Please try again later or contact Zubair directly through the contact section.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendSuggestion = (question) => {
    setInputMessage(question);
    setTimeout(() => {
      const event = { preventDefault: () => {} };
      handleSubmit(event);
    }, 100);
  };

  const clearChat = () => {
    if (window.confirm('Are you sure you want to clear the chat history?')) {
      setMessages([
        {
          id: 1,
          text: "Hi! I'm Zubair's AI assistant. I can help you learn about his services, skills, and how he can help your business. What would you like to know?",
          isUser: false,
          timestamp: new Date()
        }
      ]);
      setShowSuggestions(true);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          color: 'black',
          border: 'none',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '350px',
            height: '500px',
            backgroundColor: 'var(--secondary)',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
            border: '1px solid var(--primary)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              padding: '15px',
              backgroundColor: 'var(--primary)',
              color: 'black',
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Bot size={20} />
              <span style={{ fontWeight: '600' }}>Zubair's Assistant</span>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={clearChat}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'black',
                  cursor: 'pointer',
                  padding: '5px'
                }}
                title="Clear chat"
              >
                <Trash2 size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'black',
                  cursor: 'pointer',
                  fontSize: '20px',
                  padding: '0'
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  alignSelf: message.isUser ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  padding: '12px 15px',
                  borderRadius: '15px',
                  backgroundColor: message.isUser ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                  color: message.isUser ? 'black' : 'var(--primary)',
                  wordWrap: 'break-word'
                }}
              >
                {message.text}
                <div
                  style={{
                    fontSize: '0.7em',
                    marginTop: '5px',
                    opacity: 0.7
                  }}
                >
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}

            {/* Suggestion Questions */}
            {showSuggestions && messages.length === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '0.8em', color: 'var(--primary)', opacity: 0.7 }}>
                  Quick questions:
                </div>
                {suggestionQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => sendSuggestion(question)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '10px',
                      border: '1px solid var(--primary)',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      color: 'var(--primary)',
                      cursor: 'pointer',
                      fontSize: '0.8em',
                      textAlign: 'left',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '12px 15px',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <div style={{ display: 'flex', gap: '4px' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    animation: 'bounce 1.4s infinite ease-in-out both'
                  }}></div>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    animation: 'bounce 1.4s infinite ease-in-out both',
                    animationDelay: '0.16s'
                  }}></div>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    animation: 'bounce 1.4s infinite ease-in-out both',
                    animationDelay: '0.32s'
                  }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '15px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              gap: '10px'
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about Zubair's services..."
              style={{
                flex: 1,
                padding: '12px 15px',
                borderRadius: '25px',
                border: '1px solid var(--primary)',
                outline: 'none',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'var(--primary)',
                fontSize: '14px'
              }}
            />
            <button
              type="submit"
              disabled={isLoading}
              style={{
                padding: '12px 15px',
                borderRadius: '25px',
                backgroundColor: 'var(--primary)',
                color: 'black',
                border: 'none',
                cursor: 'pointer',
                opacity: isLoading ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          } 40% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default Chatbot;