// app/api/server/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config })
    
    // For App Router, you need to handle the request differently
    // Payload typically handles this internally via the admin route
    // This route is mainly for catch-all purposes
    
    // If you need to handle API requests, you might need to use a different approach
    return NextResponse.json({ 
      message: 'Payload server is running',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Payload server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  return POST(req) // Reuse the same logic for GET requests
}

export const dynamic = 'force-dynamic'