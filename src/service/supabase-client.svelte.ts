import { createClient, type Session } from '@supabase/supabase-js';
import { session } from '../store/session-store.svelte';


export const supabaseClient = createClient(import.meta.env.VITE_S_URL,import.meta.env.VITE_S_KEY);

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
 * Returns the current session.
 */
export async function GetToken():Promise<Session|null>{
    
    const {data, error} = await supabaseClient.auth.getSession();
    if(data !== null){       
        const session:Session|null = data.session;
        return session
    }
    
    throw new Error(`ERROR ${error?.code}:${error?.message} || ${error?.cause}`)
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
