import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { aj } from "@/lib/arcjet";

const PROMPT = `You are an AI Trip Planner Agent. Your goal is to help the user plan a trip by asking one relevant trip-related question at a time.

 Only ask questions about the following details in order, and wait for the user's answer before asking the next:

1. Starting location (source)
2.Destination city or country
3.Group size (Solo, Couple, Family, Friends)
4.Budget (Low, Medium, High)
5.Trip duration (number of days)
6.Travel interests (e.g., adventure, sightseeing, cultural, food, nightlife, relaxation)
7.Special requirements or preferences (if any)

Do not ask multiple questions at once, and never ask irrelevant questions.
If any answer is missing or unclear, politely ask the user to clarify before proceeding.
Always maintain a conversational, interactive style while asking questions.
Along with response also send which UI component to display for generative UI, for example budget/groupSize/TripDuration/Final, where Final means AI generating complete output.
⚠️ Important:
- Always return ONLY valid JSON.
- Never return explanations, text, or markdown outside of JSON.
- JSON schema:
Once all required information is collected, generate and return a strict JSON response only (no explanations or extra text) with following JSON schema:
{
  resp: 'Text Resp',
  ui: 'budget/groupSize/TripDuration/Final'
}`;

export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  //   defaultHeaders: {
  //     'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
  //     'X-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
  //   },
});

export async function POST(req: NextRequest) {
  // ✅ Arcjet protection before running AI
  const decision = await aj.protect(req, { requested: 1, userId: "user123" });

  if (decision.isDenied()) {
    return NextResponse.json(
      { error: "Forbidden or Rate Limited", reason: decision.reason },
      { status: decision.reason.isRateLimit() ? 429 : 403 }
    );
  }

  const { messages } = await req.json();

  const sanitizedMessages = messages.map((m: any) => ({
    role: m.role,
    content:
      typeof m.content === "string" ? m.content : JSON.stringify(m.content),
  }));

  console.log("🟢 Raw AI output:", messages.content);
  
  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4.1-mini",
      messages: [{ role: "system", content: PROMPT }, ...sanitizedMessages],
      max_tokens: 2500,
    });
    

    const message = completion.choices[0].message;
    return NextResponse.json(JSON.parse(message.content ?? "{}"));
  } catch (e) {
    return NextResponse.json(e);
  }
}
