import {handle} from '../../../src/core/http.js';
export const runtime='nodejs';
export const dynamic='force-dynamic';
export async function POST(request:Request){return handle(request)}
