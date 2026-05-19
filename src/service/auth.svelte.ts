import { supabaseClient } from "./supabase-client.svelte";
import { session } from '../store/session-store.svelte';

/**
 * Sets the user session as a global state
 */
supabaseClient.auth.onAuthStateChange((authEvent, currentSession)=>{
    session.user = currentSession?.user ?? null;
    session.loading = false;
})


/**
 * Logs in using Google OAuth
 */
export async function googleOAuth(){
    const {data, error} = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
            //redirectTo: Can be changed. It is handled by google auth.
            queryParams:{
                access_type:'offline',
                prompt:'consent'
            }
        }   
    })
}

/**
 * Ends the supabase session and cleans up store.
 */
export async function LogOut(){    
    const { error } = await supabaseClient.auth.signOut();
    session.user = null;
    session.loading = false;
    if(error) throw new Error(`ERROR ${error.code}:${error.message} || ${error.cause}`)   
}