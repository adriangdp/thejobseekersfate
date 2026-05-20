import { supabaseClient } from "./supabase-client.svelte";
import { session } from "../store/session-store.svelte";
import type { Job, JobEntry, JobPost } from "@data/types";
import type { enumJobStatus } from "@data/enum";

export async function dbCreateJob(job:JobPost):Promise<JobEntry|null>{

    if(!session.user){
        return null;
    }

    const jobPost = {
        user_id: session.user!.id,
        ...job
    }

    const {
        data, 
        error
    } = await supabaseClient.from('jobtrack').insert(jobPost).select();
    
    if(error){
        return null;
    }
    
    return data[0] as JobEntry;
    
}


export async function dbGetAllJobs():Promise<JobEntry[]>{
    if(!session.user){
        return [];
    }

    const { data, error} = await supabaseClient.from('jobtrack').select();

    if(error){
        throw new Error(`ERROR: ${error.code} ${error.cause} -- ${error.message}`);
    }

    return data;
}
    
export async function dbDeleteJob(id:number){
    if(!session.user){
    }

    const { data, error} = await supabaseClient.from('jobtrack').delete().eq("id",id).select();

    if(error){
        throw new Error(`ERROR: ${error.code} ${error.cause} -- ${error.message}`);
    }

}


export async function dbUpdateJob(job:JobEntry){
    if(!session.user){
        return;
    }

    const { data, error} = await supabaseClient.from('jobtrack').update(job).eq("id",job.id).select();

    if(error){
        throw new Error(`ERROR: ${error.code} ${error.cause} -- ${error.message}`);
    }

}

export async function dbClearUserRows(){
    if(!session.user){
        return;
    }
    const { data, error} = await supabaseClient.from('jobtrack').delete().neq("id", -1)
    if(error){
        throw new Error(`ERROR: ${error.code} ${error.cause} -- ${error.message}`);
    }
}