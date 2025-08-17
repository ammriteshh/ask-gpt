"use client"
import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleChat = async () => {
    if (!message.trim()) return;
    
    const userMessage = { role: "user", content: message, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      const aiMessage = { 
        role: "assistant", 
        content: data.response, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, aiMessage]);
      
    } catch (error) {
      const errorMessage = { 
        role: "error", 
        content: "Sorry, I encountered an error. Please try again.", 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleChat();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>🤖</div>
            <h1>AI Assistant</h1>
          </div>
          <button onClick={clearChat} className={styles.clearButton}>
            Clear Chat
          </button>
        </div>
      </div>

      <div className={styles.chatContainer}>
        <div className={styles.messagesContainer}>
          {messages.length === 0 && (
            <div className={styles.welcomeMessage}>
              <div className={styles.welcomeIcon}>👋</div>
              <h2>Welcome to AI Assistant</h2>
              <p>Ask me anything! I'm here to help you with questions, coding, writing, analysis, and more.</p>
            </div>
          )}
          
          {messages.map((msg, index) => (
            <div key={index} className={`${styles.message} ${styles[msg.role]}`}>
              <div className={styles.messageContent}>
                <div className={styles.messageHeader}>
                  <span className={styles.messageRole}>
                    {msg.role === "user" ? "You" : "AI Assistant"}
                  </span>
                  <span className={styles.messageTime}>
                    {msg.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <div className={styles.messageText}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          
          {loading && (
            <div className={`${styles.message} ${styles.assistant}`}>
              <div className={styles.messageContent}>
                <div className={styles.messageHeader}>
                  <span className={styles.messageRole}>AI Assistant</span>
                </div>
                <div className={styles.loadingDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here... (Press Enter to send, Shift+Enter for new line)"
              rows={1}
              className={styles.textarea}
              disabled={loading}
            />
            <button 
              onClick={handleChat}
              disabled={loading || !message.trim()}
              className={styles.sendButton}
            >
              {loading ? (
                <div className={styles.spinner}></div>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9"></polygon>
                </svg>
              )}
            </button>
          </div>
          <div className={styles.inputHint}>
            Press Enter to send • Shift+Enter for new line
          </div>
        </div>
      </div>
    </div>
  );
}
