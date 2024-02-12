import React from 'react'
import { authenticate } from 'auth-provider'
import { NextResponse } from 'next/server';

const middleware =async (req) => {
    const isAuthenticated = authenticate(req);
    if(isAuthenticated){
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', req.url));
}
export const config = {
    matcher: '/dashboard/:path',
}

export default middleware