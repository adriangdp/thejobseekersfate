import { supabaseClient } from "./supabase-client.svelte";
import { session } from "../store/session-store.svelte";
import type { Job } from "@data/types";

export async function dbCreateJob(job:Job){

    if(!session.user){
        console.log("Early exit, no user authenticated")
    }

    const userData = await supabaseClient.auth.getUser();
    const user = userData.data.user;

    console.log("Writing...")
    const { data, error} = await supabaseClient.from('jobtrack').insert(
    {
        user_id: session.user!.id,
        ...job
    }
    ).select()
    
    if(error){
    console.log("ERROR: " + (error?.code + error?.cause + error?.name))
    }
    else{
    console.log("WRITE: " + data )
    }
}


export async function dbGetAllJobs():Promise<Job[]>{
    if(!session.user){
        console.log("Early exit, no user authenticated")
    }

    const userData = await supabaseClient.auth.getUser();
    const user = userData.data.user;
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

    const userData = await supabaseClient.auth.getUser();
    const user = userData.data.user;
    console.log("Deleting...");
    const { data, error} = await supabaseClient.from('jobtrack').delete().eq("id",id).select()

    if(error){
        throw new Error(`ERROR: ${error.code} ${error.cause} -- ${error.message}`)
    }

    console.log("Deleted: " + data)
}


export async function dbUpdateJob(id:number, job:Job){
    if(!session.user){
        console.log("Early exit, no user authenticated")
    }

    const userData = await supabaseClient.auth.getUser();
    const user = userData.data.user;
    console.log("Updating...");
    const { data, error} = await supabaseClient.from('jobtrack').update(job).eq("id",id).select()

    if(error){
        throw new Error(`ERROR: ${error.code} ${error.cause} -- ${error.message}`)
    }

    console.log("Updated: " + data)

}
