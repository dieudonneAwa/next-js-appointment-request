import {NextResponse,type NextRequest} from 'next/server';
import app from './src/core/config.js';
import {requireAdmin,responseHeaders} from './src/core/security.js';
export function proxy(request:NextRequest){if(app.adminOnly && request.nextUrl.pathname==='/'){try{requireAdmin(request.headers)}catch(error:any){return new Response(error.message,{status:error.status||500,headers:responseHeaders(error.status===401?{'WWW-Authenticate':'Basic realm="Operator"'}:{})})}}const response=NextResponse.next();for(const [key,value] of Object.entries(responseHeaders()))response.headers.set(key,value);return response;}
export const config={matcher:['/']};
