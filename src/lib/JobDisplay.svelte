<script lang="ts">
    import { type JobApplication } from "../data/types"
    import BadgeStatus from "@lib/common/BadgeStatus.svelte"


   let { application, isCardDisplay } : {application:JobApplication, isCardDisplay:boolean}  = $props();
   let {status,position,company,mode,salary,link,appliedDate} = $derived(application)

</script>

{#if isCardDisplay}
    <div class="relative w-full aspect-2/4 md:aspect-2/3 px-3 py-8 bg-accent-inner border-accent-outer border bg-radial from-white/0 to-white/0 overflow-hidden">        
        <div class="relative mx-auto h-2/5 flex flex-col md:justify-end">
            <img src={status.icon} alt={`${status} icon status`} class="mx-auto mix-blend-color-dodge w-13 md:w-28 lg:w-23"/>
            <strong class="flex items-center justify-center md:text-xl grow text-center">{status.figureName}</strong>
        </div>
        <div class="z-20 relative mt-3 md:mt-8 lg:mt-3">
            <div class="flex flex-col gap-1 md:gap-2 items-center">
                <span>{company}</span>
                <span class="text-text-darker">{position}</span>
            </div>
            <div class="flex flex-col mt-5 md:mt-10 lg:mt-5 gap-1 md:gap-4 lg:gap-3">
                <div>
                    <img src="/img/icon-building.png" alt="work mode icon"  class="w-5 md:w-7 inline" />
                    <span class="text-text-darker text-sm md:text-md">{mode}</span>
                </div>
                <div>
                    <img src="/img/icon-coin.png" alt="salary icon"  class="w-5 md:w-7 inline" />
                    <span class="text-text-darker text-sm md:text-md">{salary}</span>
                </div>
                <div>
                    <img src="/img/icon-calendar.png" alt="added date icon"  class="w-5 md:w-7 inline" />
                    <span class="text-text-darker text-sm md:text-md">{String(appliedDate.getDate()).padStart(2,'0')}/{appliedDate.getMonth()}/{appliedDate.getFullYear()}</span>
                </div>                
            </div>
    
        </div>
        <div class={`w-full h-full absolute top-0 left-0 ${status.styles.bgGradient} mix-blend-overlay`}>
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



