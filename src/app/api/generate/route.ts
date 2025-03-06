import { generateCodePrompt } from "@/app/utils/prompt";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

//👇🏻 OpenAI client for Nebius AI
const client = new OpenAI({
  baseURL: "https://api.studio.nebius.ai/v1/",
  apiKey: process.env.NEBIUS_API_KEY,
});

export async function POST(req: NextRequest) {
    const { context, language } = await req.json();
  
    const content = generateCodePrompt(context, language);
  
    //👇🏻 generate code using the prompt
    const response = await client.chat.completions.create({
      temperature: 0.3,
      max_tokens: 2098,
      top_p: 0.95,
      model: "deepseek-ai/DeepSeek-Coder-V2-Lite-Instruct",
      messages: [
        {
          role: "user",
          content: content,
        },
      ],
    });
  
    const completion = response.choices[0];
    if (completion.message.content) {
      //👇🏻 gets the response
      const response = completion.message.content;
      //👇🏻 returns the JSON object
      //const jsonMatch = response.match(/\{(.|\n)*\}/);
      //const jsonObject = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
      const jsonObject = JSON.parse(response);
      return NextResponse.json(
        { message: "Code generated successfully", data: jsonObject },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "No response", data: null },
        { status: 500 }
      );
    }
  }
  
  