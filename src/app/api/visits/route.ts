import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://irco-api.vercel.app/api/visits');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse(
      error instanceof Error ? error.message : 'Failed to fetch visits',
      { status: 500 }
    );
  }
}