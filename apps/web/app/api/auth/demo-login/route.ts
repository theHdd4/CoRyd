import { NextRequest, NextResponse } from 'next/server';

const DEMO_CUSTOMER_USERNAME = 'customer';
const DEMO_CUSTOMER_PASSWORD = 'customer';
const DEMO_SESSION_COOKIE = 'coryd_demo_customer_session';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  if (username === DEMO_CUSTOMER_USERNAME && password === DEMO_CUSTOMER_PASSWORD) {
    const response = NextResponse.redirect(new URL('/dashboard', request.url), 303);
    response.cookies.set(DEMO_SESSION_COOKIE, 'customer', {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8,
    });
    return response;
  }

  return NextResponse.redirect(new URL('/login?error=invalid-demo-credentials', request.url), 303);
}
