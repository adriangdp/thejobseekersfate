import type { User } from "@supabase/supabase-js"

interface sessionState{
    user:User|null
    loading:boolean
}

export const session:sessionState = $state({
    user:null,
    loading:true
})