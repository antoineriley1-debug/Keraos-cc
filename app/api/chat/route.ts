import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message required' }, { status: 400 });
    }

    // Call local OpenClaw instance
    const response = await fetch('http://localhost:5000/api/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
      timeout: 30000,
    });

    if (!response.ok) {
      throw new Error(`OpenClaw responded with ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({
      response: data.response || data.message || 'No response from OpenClaw',
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to connect to OpenClaw. Make sure it\'s running at localhost:5000' },
      { status: 500 }
    );
  }
}
