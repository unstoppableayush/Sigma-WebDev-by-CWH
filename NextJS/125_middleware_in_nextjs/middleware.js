import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

  if (request.nextUrl.pathname.startsWith('/home')) {
    return NextResponse.rewrite(new URL('/rewrite', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }

  // rewrite -> same url but return the content of other page
  // redirect -> send to other url ans show content
  
  // Config object for these middleware
  // return NextResponse.json({message : 'Hello from the about page'})
  // return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }