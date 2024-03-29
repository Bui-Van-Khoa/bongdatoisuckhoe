import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import { getUserDetail } from './lib/api/users'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()
  
  if (!user ) {
		return NextResponse.redirect(new URL('/login', req.url))
  }else {
		res.cookies.set('user', JSON.stringify(user))
	}

  return res
}

export const config = {
  matcher: [ '/','/members','/list-of-penalties'],
}

