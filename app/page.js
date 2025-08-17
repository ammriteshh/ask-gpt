"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { Bitcount_Grid_Double } from "next/font/google";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [streaming, setStreaming] = useState("");
  const [loading, setLoading] = useState("");
  const [streamResponse, setStreamResponse] = useState("");

  const handleChat = async () => {
    setLoading(true)
    setResponse("")

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({message})
      })

      const data = await res.json()
      setResponse(data.response)
      
    } catch (error) {
      setResponse("Error: " + error.message)
    }

    setLoading(false)
  }

  return (
    <div className={styles.page}>
      <h1>Get Started AIGPT</h1>
      <div>
        <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your Message"
        rows={4}
        style={{width: "100%", marginButtom: "10px"}}
        />
      </div>
      <div>
        <buttom 
        onClick={handleChat}
        styles={{ padding: "10px 20px",
          backgroundColor: "orange"}}>
            {loading ? "Loading...": "Chat"}
        </buttom>
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          whiteSpace: "pre-wrap",
          fontSize: "28px",
        }}  
      >
        {response}
      </div>
    </div>
  );
}
