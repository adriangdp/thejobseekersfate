<script lang="ts">
    import { enumJobStatus } from "@data/enum";
 
    import BadgeStatus from "@lib/common/BadgeStatus.svelte";
    let{state, callback} : { 
        state: enumJobStatus, 
        callback:(newStatus:enumJobStatus)=>void} 
    = $props();

</script>



<div class="z-20 absolute top-[110%] left-0 w-fit h-fit p-3 bg-background border border-accent-outer flex flex-wrap gap-2 animate-revealcard duration-300">
   
    {#each Object.values(enumJobStatus) as enumStatus}
        {#if enumStatus !== state}
            <button class={`button-invisible cursor-pointer p-0`}  onclick={()=>callback(enumStatus)}>
                <BadgeStatus status={enumStatus}></BadgeStatus>
            </button>   
        {/if}
        
    {/each}

</div>