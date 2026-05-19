<script lang="ts">
    import { type Job, enumJobStatus } from "@data/types";
    import { JobStyling } from "@data/jobStates";
 
    import BadgeStatus from "@lib/common/BadgeStatus.svelte";
    let{state, id} : { state: enumJobStatus, id:number} = $props();


    const handleStateChange =async(jobstate:string)=>{
        /*await db.jobData.where("id").equals(id).modify({statusKey:jobstate})*/
    }
</script>



<div class="z-20 absolute top-[110%] left-0 w-fit h-fit p-3 bg-background border border-accent-outer flex flex-wrap gap-2 animate-revealcard duration-300">
   
    {#each Object.values(enumJobStatus) as enumStatus}
        {#if enumStatus !== state}
            <button class={`button-invisible cursor-pointer p-0`}  onclick={()=>handleStateChange(enumStatus)}>
                <BadgeStatus state={enumStatus}></BadgeStatus>
            </button>   
        {/if}
        
    {/each}

</div>