# CYBER//CHAT v1.0 - Hacker AI Assistant

A hacker-themed AI cybersecurity chatbox application with a dark terminal aesthetic and advanced features for ethical hacking and cybersecurity learning.

## 🚀 Features

### Theme & Design
- **Dark Terminal Aesthetic**: Black background (#0a0a0a) with neon green (#00ff41) primary colors
- **Electric Cyan Accents**: Vibrant cyan (#00d4ff) highlights and red (#ff0040) warnings
- **Monospace Fonts**: JetBrains Mono and Fira Code for authentic terminal feel
- **Matrix Scanline Effect**: Animated scanlines on background
- **Glowing Effects**: CSS box-shadow for text and border glow
- **Hacker HUD UI**: ASCII art header with "[ CYBER//CHAT v1.0 ]"
- **Typewriter Effect**: Realistic typing animation for AI responses
- **Boot Sequence**: Fake terminal boot animation on page load

### Core Features
1. **Chat Interface**: Scrollable message history with timestamps
2. **Color-Coded Messages**: User messages in cyan, AI responses in green
3. **Cybersecurity Sidebar**: Quick access to 8 specialized topics:
   - Nmap Scanning
   - Metasploit Basics
   - SQLi Techniques
   - Wireshark Guide
   - Burp Suite Tutorial
   - CTF Challenges
   - OSINT Tools
   - Linux Privilege Escalation
4. **Smart Input**: Terminal-style input box with "[ EXECUTE ]" send button
5. **Copy Functionality**: Copy button on each AI message
6. **Loading Animation**: "Hacking..." blinking dots animation

### AI Integration
- **Groq API**: Powered by Llama3-70b-8192 model
- **System Prompt**: Specialized HackerGPT persona for ethical hacking guidance
- **Educational Focus**: Emphasizes legal usage and responsible disclosure
- **Comprehensive Knowledge**: Covers all major cybersecurity tools and techniques

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hackersbox
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Add your Groq API key to `.env.local`:
   ```
   NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
hackersbox/
├── app/
│   ├── api/chat/
│   │   └── route.ts          # Groq API integration
│   ├── globals.css           # Terminal theme styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main chat UI
├── components/
│   ├── ChatMessage.tsx       # Individual message component
│   └── Sidebar.tsx           # Cybersecurity topics sidebar
├── hooks/
│   └── useTypewriter.ts      # Typewriter effect hook
├── .env.local.example        # Environment variables template
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🎨 Customization

### Colors
- **Primary Green**: `#00ff41` (neon-green)
- **Accent Cyan**: `#00d4ff` (electric-cyan)
- **Warning Red**: `#ff0040` (warning-red)
- **Terminal Black**: `#0a0a0a` (terminal-black)

### Fonts
The application uses Google Fonts:
- **Primary**: JetBrains Mono
- **Fallback**: Fira Code

### Animations
- **Scanline**: Continuous vertical sweep effect
- **Typewriter**: Character-by-character text reveal
- **Glow**: Pulsing neon glow effects
- **Blink**: Terminal cursor animation

## 🔧 Configuration

### Groq API
1. Visit [Groq Console](https://console.groq.com/)
2. Create an account and generate an API key
3. Add the key to your `.env.local` file

### Tailwind CSS
Custom theme extensions are defined in `tailwind.config.js`:
- Custom colors
- Font families
- Animations and keyframes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your Groq API key as an environment variable
4. Deploy

### Other Platforms
Ensure the platform supports:
- Next.js 14+ with App Router
- Environment variables
- Node.js runtime

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is for educational purposes only. The AI assistant promotes ethical hacking and responsible cybersecurity practices.

## ⚠️ Disclaimer

CYBER//CHAT is designed for educational and ethical purposes only. Users are responsible for:
- Using the knowledge legally and ethically
- Obtaining proper authorization before testing
- Following responsible disclosure practices
- Complying with local laws and regulations

## 🆘 Support

For issues and questions:
1. Check the documentation
2. Review the code comments
3. Create an issue with detailed information

---

**Built with ❤️ for the cybersecurity community**
