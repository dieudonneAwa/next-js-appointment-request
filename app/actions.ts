"use server";
import {headers} from 'next/headers';
import {revalidatePath} from 'next/cache';
import config from '../src/core/config.js';
import {service} from '../src/core/service.js';
import {sameOrigin, requireAdmin, safeError} from '../src/core/security.js';
export type SubmissionState={ok:boolean;message:string};
export async function submit(_previous:SubmissionState,form:FormData):Promise<SubmissionState>{
  try{const h=await headers();sameOrigin(h);if(config.adminOnly)requireAdmin(h);const result=await service().submit(Object.fromEntries(form));revalidatePath('/');return result}catch(error){return {ok:false,message:safeError(error)}}
}
