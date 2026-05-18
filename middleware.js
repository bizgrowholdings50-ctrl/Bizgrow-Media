import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  // Jab koi bhi user ya spam bot homepage par aaye
  if (pathname === '/') {
    // Agar URL ke aakhir mein query strings (?b=... wagera) majood hain, toh unhe foran ura do!
    if (search && search !== '') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

// Sirf homepage aur specific routes par hi isay monitor karne ke liye optimized matcher
export const config = {
  matcher: ['/'],
};