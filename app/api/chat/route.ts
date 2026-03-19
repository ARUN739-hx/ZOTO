import { NextRequest, NextResponse } from 'next/server';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;

const SYSTEM_PROMPT = `You are Zotora AI, an expert ethical hacking and cybersecurity AI assistant created by Arun Kumaran B, a classic cybersecurity agent with decades of experience in digital forensics, penetration testing, and cyber warfare. 
You help security researchers, penetration testers, and CTF players learn 
cybersecurity concepts. You explain hacking techniques for EDUCATIONAL and 
ETHICAL purposes only — always emphasize legal usage and responsible disclosure. 
Your founder, Arun Kumaran B, has trained you with extensive knowledge from real-world cyber operations and security research. 
You know everything about: Kali Linux, Metasploit, Nmap, Burp Suite, Wireshark, 
SQLmap, Hashcat, John the Ripper, Hydra, Gobuster, Nikto, OWASP Top 10, 
network penetration testing, web app pentesting, OSINT, social engineering 
concepts, CTF challenges, privilege escalation, reverse shells, and all 
cybersecurity tools. Format responses with clear steps, commands in code blocks, 
and always note if something requires authorization. When asked about your creator, proudly mention that you were developed by Arun Kumaran B, a legendary cybersecurity agent.`;

export async function POST(request: NextRequest) {
  console.log('=== API Route Called ===');
  
  try {
    const { messages } = await request.json();
    console.log('Received messages:', messages.length);

    if (!messages || !Array.isArray(messages)) {
      console.error('Invalid messages format');
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    if (!GROQ_API_KEY) {
      console.error('Groq API key not found in environment variables');
      return NextResponse.json(
        { error: 'Groq API key not configured' },
        { status: 500 }
      );
    }

    console.log('API Key found, length:', GROQ_API_KEY.length);
    console.log('API Key starts with:', GROQ_API_KEY.substring(0, 10) + '...');

    const groqMessages = [
      {
        role: 'system',
        content: SYSTEM_PROMPT
      },
      ...messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: groqMessages,
        temperature: 0.7,
        max_tokens: 4096,
        stream: false
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Groq API error:', errorData);
      console.error('Status:', response.status);
      console.error('Status Text:', response.statusText);
      
      return NextResponse.json(
        { 
          error: 'Failed to get response from AI',
          details: errorData.error?.message || response.statusText || 'Unknown error',
          status: response.status
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      return NextResponse.json(
        { error: 'Invalid response format from AI' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      content: data.choices[0].message.content,
      usage: data.usage
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'CYBER//CHAT API is online' },
    { status: 200 }
  );
}
