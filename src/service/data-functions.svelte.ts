import { supabaseClient } from "./supabase-client.svelte";
import { session } from "../store/session-store.svelte";
import type { Job, JobEntry, JobPost } from "@data/types";
import type { enumJobStatus } from "@data/enum";

export async function dbCreateJob(job:JobPost):Promise<JobEntry|null>{

    if(!session.user){
        console.log("Early exit, no user authenticated")
        return null;
    }

    const jobPost = {
        user_id: session.user!.id,
        ...job
    }

    console.log("Writing...")
    const {
        data, 
        error
    } = await supabaseClient.from('jobtrack').insert(jobPost).select()
    
    if(error){
        console.log("ERROR: " + (error?.code + error?.cause + error?.name))
        return null;
    }
    
    console.log("WRITE: " + data )
    return data[0] as JobEntry;
    
}


export async function dbGetAllJobs():Promise<JobEntry[]>{
    if(!session.user){
        console.log("Early exit, no user authenticated")
    }

    console.log("Reading all");
    const { data, error} = await supabaseClient.from('jobtrack').select()

    if(error){
        throw new Error(`ERROR: ${error.code} ${error.cause} -- ${error.message}`)
    }
    console.log(data);

    return data;
}
    
export async function dbDeleteJob(id:number){
    if(!session.user){
        console.log("Early exit, no user authenticated")
    }

    console.log("Deleting...");
    const { data, error} = await supabaseClient.from('jobtrack').delete().eq("id",id).select()

    if(error){
        throw new Error(`ERROR: ${error.code} ${error.cause} -- ${error.message}`)
    }

    console.log("Deleted: " + data)
}


export async function dbUpdateJob(job:JobEntry){
    if(!session.user){
        console.log("Early exit, no user authenticated")
    }

    console.log("Updating...");
    const { data, error} = await supabaseClient.from('jobtrack').update(job).eq("id",job.id).select()

    if(error){
        throw new Error(`ERROR: ${error.code} ${error.cause} -- ${error.message}`)
    }

    console.log("Updated: " + data)

}