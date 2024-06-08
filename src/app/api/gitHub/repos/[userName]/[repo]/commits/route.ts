import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  
  const url = new URL(req.url);
  const pathSegments = url.pathname.split('/');
  const username = pathSegments[pathSegments.length - 3];
  const repo = pathSegments[pathSegments.length - 2];
  const token = req.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Token not provided' }, { status: 401 });
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch commits');
    }
    const commits = await response.json();
    return NextResponse.json({ commitCount: commits.length });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
