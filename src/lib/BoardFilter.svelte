<script lang="ts">
    import { JobStyling } from "@data/jobStates";
    import { enumSortModes } from "@data/enum";
    import { filterStates } from "../store/filter-store.svelte";
</script>

<div class="my-5">
    <ul class="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-10 gap-2 md:gap-x-3">
        <li class="max-h-12 md:col-span-3 lg:col-span-1 xl:col-span-1 md:row-start-3 lg:row-start-2 xl:row-start-1 lg:col-start-4 xl:col-start-8">
            <select bind:value={filterStates.sortBy}
                class="w-full h-full bg-accent-inner"            
            >
                <option value={enumSortModes.default}>Default</option>
                <option value={enumSortModes.date}>Date</option>
                <option value={enumSortModes.salary}>Salary</option>
                <option value={enumSortModes.status}>Status</option>
            </select>
        </li>
        <li class="max-h-12 md:col-span-3 lg:col-span-3 xl:col-span-2 lg:col-start-5 xl:col-start-9 md:row-start-3 lg:row-start-2 xl:row-start-1">
            <select bind:value={filterStates.isAscendent} 
                class="w-full h-full bg-accent-inner"
            >
                <option value={false}>
                    Desc./Newest
                </option>
                <option value={true}>
                    Asc./Oldest
                </option>
            </select>
        </li>
        <li class="max-h-12 col-span-2 lg:col-span-1 xl:col-span-1 xl:col-start-1 xl:row-start-1">
            <button onclick={()=>filterStates.showOffer = !filterStates.showOffer}
                class={`w-full h-full ${filterStates.showOffer? 'opacity-100':'opacity-60 bg-accent-outer/60'} ${filterStates.showOffer? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.offer.icon} 
                    alt={`Filter by ${JobStyling.offer.state} icon`}
                    class="inline w-5"
                />
                <span class="md:text-sm">{JobStyling.offer.state}</span>
            </button>
        </li>
        <li class="max-h-12 col-span-2 lg:col-span-1 xl:col-span-1">
            <button onclick={()=>filterStates.showApplied = !filterStates.showApplied}
                class={`w-full h-full ${filterStates.showApplied? 'opacity-100':'opacity-60 bg-accent-outer/60'} ${filterStates.showApplied? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.applied.icon} 
                    alt={`Filter by ${JobStyling.applied.state} icon`}
                    class="inline w-5"
                />
                <span class="md:text-sm">{JobStyling.applied.state}</span>
            </button>
        </li>
        <li class="max-h-12 col-span-2 lg:col-span-1 xl:col-span-1">
            <button onclick={()=>filterStates.showInterview = !filterStates.showInterview}
                class={`w-full h-full ${filterStates.showInterview? 'opacity-100':'opacity-60 bg-accent-outer/60'} ${filterStates.showInterview? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.interview.icon} 
                    alt={`Filter by ${JobStyling.interview.state} icon`}
                    class="inline w-5"
                />
                <span class="md:text-sm">{JobStyling.interview.state}</span>
            </button>
        </li>
        <li class="max-h-12 col-span-2 lg:col-span-1 xl:col-span-1 md:row-start-2 lg:row-start-1">
            <button onclick={()=>filterStates.showRejected = !filterStates.showRejected}
                class={`w-full h-full ${filterStates.showRejected? 'opacity-100':'opacity-60 bg-accent-outer/60'} ${filterStates.showRejected? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.rejected.icon} 
                    alt={`Filter by ${JobStyling.rejected.state} icon`}
                    class="inline w-5"
                />
                <span class="md:text-sm">{JobStyling.rejected.state}</span>
            </button>
        </li>
        <li class="max-h-12 col-span-2 lg:col-span-1 xl:col-span-1 md:row-start-2 lg:row-start-1">
            <button onclick={()=>filterStates.showGhosted = !filterStates.showGhosted}
                class={`w-full h-full ${filterStates.showGhosted? 'opacity-100':'opacity-60 bg-accent-outer/60'} ${filterStates.showGhosted? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.ghosted.icon} 
                    alt={`Filter by ${JobStyling.ghosted.state} icon`}
                    class="inline w-5"
                />
                <span class="md:text-sm">{JobStyling.ghosted.state}</span>
            </button>
        </li>       
        <li class="max-h-12 col-span-2 lg:col-span-1 xl:col-span-1 md:row-start-2 lg:row-start-1">
            <button onclick={()=>filterStates.showAccepted = !filterStates.showAccepted}
                class={`w-full h-full ${filterStates.showAccepted? 'opacity-100':'opacity-60 bg-accent-outer/60'} ${filterStates.showAccepted? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.accepted.icon} 
                    alt={`Filter by ${JobStyling.accepted.state} icon`}
                    class="inline w-5"
                />
                <span class="md:text-sm">{JobStyling.accepted.state}</span>
            </button>
        </li>
        
    </ul>
</div>