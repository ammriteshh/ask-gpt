import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
    try {
        // Parse request body
        const body = await request.json();
        const { message } = body;

        // Validate input
        if (!message || typeof message !== "string" || message.trim().length === 0) {
            return Response.json(
                { error: "Message is required and must be a non-empty string" },
                { status: 400 }
            );
        }

        // Check if API key is configured
        if (!process.env.OPENAI_API_KEY) {
            return Response.json(
                { error: "OpenAI API key is not configured" },
                { status: 500 }
            );
        }

        // Create chat completion
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content:
                        "You are a helpful AI assistant. Provide clear, accurate, and helpful responses. If you're not sure about something, say so. Keep responses concise but informative."
                },
                {
                    role: "user",
                    content: message.trim()
                }
            ],
            max_tokens: 1000,
            temperature: 0.7
        });

        const response = completion.choices[0]?.message?.content;

        if (!response) {
            return Response.json(
                { error: "No response generated from AI" },
                { status: 500 }
            );
        }

        return Response.json({
            response,
            model: completion.model,
            usage: completion.usage
        });
    } catch (error: any) {
        console.error("Chat API Error:", error);

        if (error?.status === 401) {
            return Response.json(
                { error: "Invalid API key. Please check your OpenAI API key configuration." },
                { status: 401 }
            );
        }

        if (error?.status === 429) {
            return Response.json(
                { error: "Rate limit exceeded. Please try again in a moment." },
                { status: 429 }
            );
        }

        if (error?.status === 500) {
            return Response.json(
                { error: "OpenAI service is currently unavailable. Please try again later." },
                { status: 503 }
            );
        }

        return Response.json(
            { error: "An unexpected error occurred. Please try again." },
            { status: 500 }
        );
    }
}
