import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ask GPT",
  description: "A modern AI chat application powered by OpenAI. Ask questions, get help with coding, writing, analysis, and more.",
  keywords: "AI, chatbot, OpenAI, assistant, chat, GPT",
  authors: [{ name: "AI Assistant Team" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/ai-avatar.svg', type: 'image/svg+xml' }
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Ask GPT - AI Assistant",
    description: "A modern AI chat application powered by OpenAI",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
