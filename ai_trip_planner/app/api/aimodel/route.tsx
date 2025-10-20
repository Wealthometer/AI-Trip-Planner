import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { aj } from "@/lib/arcjet";

const PROMPT = `You are an AI Trip Planner Agent. 
  Your goal is to help the user plan a trip by asking one relevant trip-related question at a time. 
  Only ask questions about the following details in order, and wait for the user's answer before asking the next: 
  1. Starting location (source) 
  2. Destination city or country 
  3. Group size (Solo, Couple, Family, Friends) 
  4. Budget (Low, Medium, High) 
  5. Trip duration (number of days) 
  6. Travel interests (e.g., adventure, sightseeing, cultural, food, nightlife, relaxation) 
  7. Special requirements or preferences (if any) 
  
  Do not ask multiple questions at once, and never ask irrelevant questions. 
  If any answer is missing or unclear, politely ask the user to clarify before proceeding. 
  Always maintain a conversational, interactive style while asking questions. 
  Along with response also send which UI component to display for generative UI, 
  for example budget/groupSize/tripDuration/final, where Final means AI generating complete output. 
  ⚠️ Important: - Always return ONLY valid JSON. - Never return explanations, text, 
  or markdown outside of JSON. 
  
  - If the user’s answer is missing, vague, or unclear, politely ask them to clarify before moving forward.
  - Keep the tone warm, engaging, and conversational (avoid robotic or boring language).
  - Always make the user feel excited about their trip while staying clear and professional.
  - Do NOT ask multiple questions at once.
  - Do NOT ask irrelevant or off-topic questions.

  ⚡ Response Style:
  - Always sound like a friendly travel expert who is enthusiastic about the journey.
  - Use natural, encouraging language in [resp] (e.g., "Great choice! Now, can you tell me..." instead of "Next question:").
  - Ensure [resp] is concise but engaging — no long paragraphs.
  - You can also send emojis once in a while like smiling face emoji, angel face ... and other happy emoji
    especially when the person send you an emoji, you can also send emojis relating to travelling

  ⚡ JSON Rules:
  - Always return ONLY valid JSON. 
  - Never include explanations, markdown, or extra text outside JSON.
  - Always match the schema exactly.

  ⚡ JSON Schema:
  {
    resp: "Your conversational response here",
    ui: "none" | "source" | "destination" | "groupSize" | "budget" | "tripDuration" | "travelInterests" | "specialRequirements" | "final"
  }

  ⚡ Final Step: - Once all required info (steps 1–7) is collected, 
  generate and return ONLY the final JSON with: 
  - A short, exciting trip summary based on the inputs 
  - Personalized suggestions for activities, attractions, or experiences 
  - Optional travel tips or must-know details 
  - The "ui" must be set to "final" at this stage.

  Your mission: Make the trip-planning experience fun, clear, 
  and inspiring every step of the way!`;

const FINAL_PROMPT = `Generate Travel Plan fwith give details, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Geo Coordinates, Place address, ticket Pricing, Time travel each of the location, with each day plan with best time to visit in JSON.  

Output Schema:  
{
  "trip_plan": {
    "destination": "string",
    "duration": "string",
    "origin": "string",
    "budget": "string",
    "group_size": "string",
    "hotels": [
      {
        "hotel_name": "string",
        "hotel_address": "string",
        "price_per_night": "string",
        "hotel_image_url": "string",
        "geo_coordinates": {
          "latitude": "number",
          "longitude": "number"
        }
      }
    ],
    "rating": "number",
    "description": "string",
   "itinerary": [
      {
        "day": "number",
        "day_plan": "string",
        "best_time_to_visit_day": "string",
        "activities": [
          {
            "place_name": "string",
        "place_details": "string",
            "place_image_url": "string",
            "geo_coordinates": {
              "latitude": "number",
              "longitude": "number"
            },
            "place_address": "string",
            "ticket_pricing": "string",
            "time_travel_each_location": "string",
            "best_time_to_visit": "string"
          }
        ]
      }
    ]
  }
}`;

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: NextRequest) {
  const decision = await aj.protect(req, { requested: 1, userId: "user123" });

  if (decision.isDenied()) {
    return NextResponse.json(
      { error: "Forbidden or Rate Limited", reason: decision.reason },
      { status: decision.reason.isRateLimit() ? 429 : 403 }
    );
  }
 
  const { messages, isFinal } = await req.json();

  const sanitizedMessages = messages.map((m: any) => ({
    role: m.role,
    content:
      typeof m.content === "string" ? m.content : JSON.stringify(m.content),
  }));

  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4.1-mini",
      messages: [
        { role: "system", content: isFinal ? FINAL_PROMPT : PROMPT },
        ...sanitizedMessages,
      ],
      max_tokens: 150,
      response_format: { type: "json_object" },
    });

    const message = completion.choices[0].message;

    console.log("🟢 Raw AI output:", message?.content);

    try {
      const parsed = JSON.parse(message?.content ?? "{}");
      return NextResponse.json(parsed);
    } catch (err) {
      console.error("⚠️ JSON parse error:", message?.content);
      return NextResponse.json({
        resp: message?.content ?? "Sorry, I had trouble formatting that.",
        ui: "final",
      });
    }
  } catch (e) { 
    return NextResponse.json(e);
  }   
}
