import { supabaseClient } from "./supabase-client.svelte";
import { session } from "../store/session-store.svelte";
import type { Job } from "@data/types";

export async function createJob(job:Job){

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

    
