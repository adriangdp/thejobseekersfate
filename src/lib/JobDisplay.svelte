<script lang="ts">
    import { type Job, type JobEntry } from "../data/types"
    import BadgeStatus from "@lib/common/BadgeStatus.svelte"
    import JobDetail from "@lib/JobDetail.svelte";
    import { JobStyling } from "@data/jobStates";

    let showDetail: boolean = $state(false)
    let { application, isCardDisplay } : {application:JobEntry, isCardDisplay:boolean} = $props();
    let { 
        id,
        status, 
        position, 
        company, 
        mode, 
        salary, 
        link, 
        applied_date 
    } = $derived(application);
    let dateObject = $derived(applied_date ? new Date(applied_date) : null)
    let JobStyle = $derived(JobStyling[status])

</script>

{#if isCardDisplay}
    <button onclick={()=>showDetail = true}
        class="relative w-full aspect-2/4 md:aspect-2/3 px-5 py-4 bg-accent-inner border-accent-outer border bg-radial from-white/0 to-white/0 overflow-hidden">        
        <div class="relative mx-auto h-1/3 md:h-1/3 flex flex-col md:justify-end">
            <img src={JobStyle.icon} alt={`${status} icon status`} class="mx-auto mix-blend-color-dodge w-18 md:w-26 lg:w-22"/>
            <strong class="flex items-center justify-center text-sm sm:text-base md:text-xl grow text-center">&#149; {JobStyling[status].figureName} &#149;</strong>
        </div>
        <div class="z-20 relative mt-8 md:mt-4 lg:mt-4">
            <div class="flex flex-col gap-1 md:gap-2 items-center">
                <span class="text-xs md:text-base line-clamp-2">{company}</span>
                <span class="text-xs md:text-base line-clamp-2 text-text-darker ">{position}</span>
            </div>
            <div class="flex flex-col items-start mt-5 md:mt-8 lg:mt-5 gap-1 md:gap-4 lg:gap-3">
                <div>
                    <img src="/img/icon-building.png" alt="work mode icon"  class="w-6 md:w-9 inline" />
                    <span class="ml-2 md:ml-3 text-text-darker text-xs md:text-base">{mode}</span>
                </div>
                <div>
                    <img src="/img/icon-coin.png" alt="salary icon"  class="w-6 md:w-9 inline" />
                    <span class="ml-2 md:ml-3 text-text-darker text-xs md:text-base">
                        { 
                            salary ? Number(salary).toLocaleString('es-ES')+" €" : "unknown"
                        }
                    </span>
                </div>
                <div>
                    <img src="/img/icon-calendar.png" alt="added date icon"  class="w-5 md:w-9 inline" />
                    <span class="ml-2 md:ml-3 text-text-darker text-xs md:text-base">
                        {
                            dateObject ?
                                `${dateObject.getDay().toString().padStart(2,"0")}/${dateObject.getMonth().toString().padStart(2,"0")}/${dateObject.getFullYear()}`
                            :
                                `No date`           
                        }
                    </span>
                </div>                
            </div>
    
        </div>
        <div class={`w-full h-full absolute top-0 left-0 ${JobStyle.styles.bgGradient} mix-blend-overlay`}>
            <div class="w-full h-full bg-radial from-black/0 from-55% to-black/45"></div>
        </div>    
   
    </button>
{:else}
    <tr onclick={()=>showDetail = true} class="cursor-pointer">
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40">
            <BadgeStatus status={status} />
        </td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40">{position}</td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40">{company}</td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40">{mode}</td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40">{salary}</td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40"><a href={link}> Offer site </a></td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40">
            {
                dateObject ?
                    `${dateObject.getDay().toString().padStart(2,"0")}/${dateObject.getMonth().toString().padStart(2,"0")}/${dateObject.getFullYear()}`
                :
                    `No date`   
            }
        </td>
    </tr>
{/if}
{#if showDetail}
    <JobDetail application={application} bind:isOpen={showDetail}></JobDetail>
{/if}


