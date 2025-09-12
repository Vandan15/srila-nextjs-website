import { NextResponse } from "next/server";

export function GET() {
  const allowCrawling = process.env.ALLOW_CRAWLING === "true";

  const content = allowCrawling
    ? `User-agent: *
Allow: /`
    : `User-agent: *
Disallow: /`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
