import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1];
  console.log('token from backend -->', token);

  if (!token) {
    return NextResponse.json({ error: 'Token not provided' }, { status: 401 });
  }

  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
