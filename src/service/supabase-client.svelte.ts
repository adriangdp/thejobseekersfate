import { createClient } from '@supabase/supabase-js';



export const supabaseClient = createClient(import.meta.env.VITE_S_URL,import.meta.env.VITE_S_KEY);


