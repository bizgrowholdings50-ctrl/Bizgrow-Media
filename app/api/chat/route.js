import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const systemPrompt = {
      role: "system",
      content: `You are the BizGrow Media Expert AI, representing the UK's leading high-performance media agency.
      LOCATION: CEME Campus, RM13 8EU.
      SERVICES: Studio Production, Content Engine, Authority Builder, Growth Engine.
      TONE: Bold, ROI-focused, Team-first (We/Our).
      STRICT: End with "BOOK A STRATEGY CALL!" or WhatsApp link.`
    };

    // Streaming enable karne ke liye stream: true karein
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [systemPrompt, ...messages],
      temperature: 0.2,
      stream: false, // Agar simple JSON chahiye toh false, warna streaming best hai
    });

    const content = response.choices[0].message.content;

    // Empty response check
    if (!content) {
      throw new Error("No content received from OpenAI");
    }

    return new Response(JSON.stringify({ content }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("OpenAI Error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch response" }), { status: 500 });
  }
}