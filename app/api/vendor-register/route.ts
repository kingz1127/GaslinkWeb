import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  // Forward to Spring Boot API
  return NextResponse.json({ message: 'Received' })
}
