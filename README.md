# AI Assistant - Modern Chat Application

A beautiful, full-featured AI chat application built with Next.js and OpenAI. Experience smooth conversations with an intelligent AI assistant that can help with coding, writing, analysis, and more.

![AI Assistant Preview](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-green?style=for-the-badge&logo=openai)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)

## Features

- **Intelligent AI Conversations** - Powered by OpenAI's GPT-4o-mini
- **Real-time Chat Interface** - Smooth, responsive messaging experience
- **Modern Design** - Beautiful gradient UI with glassmorphism effects
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **Fast & Lightweight** - Built with Next.js 15 and optimized for performance
- **Message History** - View your conversation history during the session
- **Keyboard Shortcuts** - Press Enter to send, Shift+Enter for new line
- **Smart Loading States** - Beautiful animations and loading indicators
- **Error Handling** - Graceful error handling with user-friendly messages
- **Clear Chat** - One-click conversation reset

## Quick Start

### Prerequisites

- Node.js 18+
- OpenAI API key

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd aiapp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

   Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, CSS Modules
- **Backend**: Next.js API Routes
- **AI**: OpenAI GPT-4o-mini
- **Styling**: Modern CSS with gradients and animations
- **Deployment**: Vercel-ready

## Project Structure

```
aiapp/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # OpenAI API integration
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Main chat interface
│   └── page.module.css           # Component styles
├── public/                       # Static assets
├── .env.local                    # Environment variables
└── package.json                  # Dependencies
```

## Design Features

- **Gradient Background** - Beautiful purple-blue gradient
- **Glassmorphism Effects** - Frosted glass UI elements
- **Smooth Animations** - CSS animations for enhanced UX
- **Responsive Layout** - Mobile-first design approach
- **Custom Scrollbars** - Styled scrollbars for better aesthetics
- **Loading States** - Animated dots and spinners
- **Message Bubbles** - Chat-style message display

## Configuration

### Environment Variables

| Variable         | Description         | Required |
| ---------------- | ------------------- | -------- |
| `OPENAI_API_KEY` | Your OpenAI API key | Yes      |

### API Configuration

The app uses OpenAI's GPT-4o-mini model with the following settings:

- **Max Tokens**: 1000
- **Temperature**: 0.7
- **System Prompt**: Helpful AI assistant with clear, accurate responses

## Usage

1. **Start a Conversation**: Type your message in the input field
2. **Send Messages**: Press Enter or click the send button
3. **Multi-line Messages**: Use Shift+Enter for line breaks
4. **Clear Chat**: Click the "Clear Chat" button to start fresh
5. **View History**: Scroll through your conversation history

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `OPENAI_API_KEY` to Vercel environment variables
4. Deploy!

### Deploy to Other Platforms

The app is compatible with any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Security

- API keys are stored securely in environment variables
- Input validation on both client and server
- Rate limiting through OpenAI's API
- No sensitive data stored locally

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenAI](https://openai.com/) for providing the AI capabilities
- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for deployment platform

## Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include your environment details and error messages

---

**Made with ❤️ using Next.js and OpenAI**
