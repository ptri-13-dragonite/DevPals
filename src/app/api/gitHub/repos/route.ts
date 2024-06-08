import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  console.log('inside BE repos fetch')
  const token = req.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Token not provided' }, { status: 401 });
  }

  try {
    const response = await fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const repos = await response.json();
    console.log('succ w repo fetch');
    return NextResponse.json(repos);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
