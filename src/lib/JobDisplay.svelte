<script lang="ts">
    import { type JobApplication } from "../data/types"
    import BadgeStatus from "@lib/common/BadgeStatus.svelte"


   let { application, isCardDisplay } : {application:JobApplication, isCardDisplay:boolean}  = $props();
   let {status,position,company,mode,salary,link,appliedDate} = $derived(application)

</script>

{#if isCardDisplay}
    <div class="relative w-full aspect-2/3 bg-accent-inner p-3 border-accent-outer border-1 bg-radial from-white/0 to-white/0 overflow-hidden">        
        <div class="relative mx-auto  h-1/2 flex flex-col justify-end">
            <img src={status.icon} alt={`${status} icon status`} class="mx-auto fill-amber-300"/>
            <p class="text-lg text-center">{status.situation}</p>
        </div>
        <div class="relative z-20 ">
            <p>{position}</p>
            <p>{company}</p>
            <p>{mode}</p>
            <p>{salary}</p>
            <p>{String(appliedDate.getDate()).padStart(2,'0')} {appliedDate.toLocaleString('default', { month: 'long' })} {appliedDate.getFullYear()}</p>        
        </div>
        <div class={`w-full h-full absolute top-0 left-0 ${status.styles.bgGradient}`}>
            <div class="w-full h-full bg-radial from-black/0 from-55% to-black/45"></div>
        </div>       
    </div>
{:else}
    <tr>
        <td><BadgeStatus state={status} /></td>
        <td>{position}</td>
        <td>{company}</td>
        <td>{mode}</td>
        <td>{salary}</td>
        <td>{link}</td>
        <td>{String(appliedDate.getDate()).padStart(2,'0')} {appliedDate.toLocaleString('default', { month: 'long' })} {appliedDate.getFullYear()}</td>
    </tr>
{/if}



