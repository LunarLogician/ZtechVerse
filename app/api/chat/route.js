import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message, context } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if API key is available
    const apiKey = process.env.GEMINI_API_KEY;
    console.log('API Key present:', !!apiKey);
    console.log('API Key length:', apiKey ? apiKey.length : 0);
    if (!apiKey) {
      return NextResponse.json(
        { 
          error: 'API key not configured',
          message: "I'm currently in demo mode. Please contact Zubair directly for detailed information about his services."
        },
        { status: 500 }
      );
    }

    // Prepare the system prompt with context about Zubair
    const systemPrompt = `You are an AI assistant for Zubair's portfolio website. Here's what you should know about Zubair:

- He's a skilled full-stack developer
- He specializes in modern web technologies like React, Next.js, Node.js
- He has experience with databases, API development, and deployment
- He's passionate about creating user-friendly applications
- He's available for freelance projects and collaborations

Please provide helpful, professional responses about Zubair's skills, experience, and services. Keep responses concise and relevant to web development and his portfolio.

Context from previous conversation: ${context || 'None'}

User message: ${message}`;

    // Call Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: systemPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 500,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH", 
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Gemini API error: ${response.status} - ${errorText}`);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const aiMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      "I'm sorry, I couldn't generate a response right now. Please try again or contact Zubair directly.";

    return NextResponse.json({ message: aiMessage });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        message: "I'm having trouble processing your request right now. Please try again later or contact Zubair directly through the contact section."
      },
      { status: 500 }
    );
  }
}
