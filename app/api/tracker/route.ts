import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Extract IP, handling reverse proxy scenarios
    let ip = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || req.headers.get("true-client-ip") || "Unknown IP";

  // Get User-Agent & Referrer
    const userAgent = req.headers.get("user-agent") || "Unknown User-Agent";
    const referrer = req.headers.get("referer") || "No Referrer";

    console.log(`📌 Visitor IP: ${ip}, User-Agent: ${userAgent}, Referrer: ${referrer}`);

  // Transparent 1x1 GIF
    const pixelBuffer = Buffer.from(
        "R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        "base64"
    );

    return new NextResponse(pixelBuffer, {
        headers: {
        "Content-Type": "image/gif",
        "Content-Length": pixelBuffer.length.toString(),
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
    });
}
