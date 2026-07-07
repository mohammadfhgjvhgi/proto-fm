import { NextResponse } from "next/server";

/**
 * GET /api/health — Health check endpoint.
 * Used by Docker HEALTHCHECK and Kubernetes liveness/readiness probes.
 * Returns 200 with timestamp if the server is running.
 */
export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "development",
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}
