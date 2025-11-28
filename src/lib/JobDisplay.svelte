<script lang="ts">
    import { type JobApplication } from "../data/types"
    import BadgeStatus from "@lib/common/BadgeStatus.svelte"
    import JobDetail from "@lib/JobDetail.svelte";

    let showDetail: boolean = $state(false)
    let { application, isCardDisplay } : {application:JobApplication, isCardDisplay:boolean}  = $props();
    let {status,position,company,mode,salary,link,appliedDate} = $derived(application)

</script>

{#if isCardDisplay}
    <button onclick={()=>showDetail = true}
        class="relative w-full aspect-2/4 md:aspect-2/3 px-3 py-8 bg-accent-inner border-accent-outer border bg-radial from-white/0 to-white/0 overflow-hidden">        
        <div class="relative mx-auto h-1/2 flex flex-col md:justify-end">
            <img src={status.icon} alt={`${status} icon status`} class="mx-auto mix-blend-color-dodge w-13 md:w-28 lg:w-43"/>
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
   
    </button>
{:else}
    <tr>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-md text-center min-w-40"><BadgeStatus state={status} /></td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-md text-center min-w-40">{position}</td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-md text-center min-w-40">{company}</td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-md text-center min-w-40">{mode}</td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-md text-center min-w-40">{salary}</td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-md text-center min-w-40"><a href={link}> Offer site </a></td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-md text-center min-w-40">{String(appliedDate.getDate()).padStart(2,'0')} {appliedDate.toLocaleString('default', { month: 'long' })} {appliedDate.getFullYear()}</td>
    </tr>
{/if}
{#if showDetail}
    <JobDetail jobApplication={application} isOpen={showDetail}></JobDetail>
{/if}


