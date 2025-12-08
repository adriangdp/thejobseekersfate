<script lang="ts">
    import { type JobState } from "@data/types";
    import { JobStates } from "@data/jobStates";
    import { db } from "@data/db";
    import BadgeStatus from "@lib/common/BadgeStatus.svelte";
    let{state, id} : { state: JobState, id:number} = $props();


    const handleStateChange =async(jobstate:string)=>{
        await db.jobData.where("id").equals(id).modify({statusKey:jobstate})
    }
</script>



<div class="z-20 absolute top-[110%] left-0 w-fit h-fit p-3 bg-background border border-accent-outer flex flex-wrap gap-2">
   
    {#each Object.entries(JobStates) as [key,option]}
        {#if option.situation !== state.situation}
            <button class={`button-invisible cursor-pointer ${option.situation === state.situation? 'hidden':''} p-0`}  onclick={()=>handleStateChange(key)}>
                <BadgeStatus state={option}></BadgeStatus>
            </button>   
        {/if}
        
    {/each}

</div>