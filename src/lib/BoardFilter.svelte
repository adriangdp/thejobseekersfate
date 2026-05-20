<script lang="ts">
    import { JobStyling } from "@data/jobStates";
    import { enumSortModes } from "@data/enum";
    import { filterStates } from "../store/filter-store.svelte";
</script>

<div class="my-5">
    <ul class="flex flex-wrap justify-center gap-4">
        <li>
            <button onclick={()=>filterStates.showOffer = !filterStates.showOffer}
                class={`${filterStates.showOffer? '':'bg-background'} ${filterStates.showOffer? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.offer.icon} 
                    alt={`Filter by ${JobStyling.offer.state} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStyling.offer.state}</span>
            </button>
        </li>
        <li>
            <button onclick={()=>filterStates.showApplied = !filterStates.showApplied}
                class={`${filterStates.showApplied? '':'bg-background'} ${filterStates.showApplied? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.applied.icon} 
                    alt={`Filter by ${JobStyling.applied.state} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStyling.applied.state}</span>
            </button>
        </li>
        <li>
            <button onclick={()=>filterStates.showInterview = !filterStates.showInterview}
                class={`${filterStates.showInterview? '':'bg-background'} ${filterStates.showInterview? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.interview.icon} 
                    alt={`Filter by ${JobStyling.interview.state} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStyling.interview.state}</span>
            </button>
        </li>
        <li>
            <button onclick={()=>filterStates.showRejected = !filterStates.showRejected}
                class={`${filterStates.showRejected? '':'bg-background'} ${filterStates.showRejected? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.rejected.icon} 
                    alt={`Filter by ${JobStyling.rejected.state} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStyling.rejected.state}</span>
            </button>
        </li>
        <li>
            <button onclick={()=>filterStates.showGhosted = !filterStates.showGhosted}
                class={`${filterStates.showGhosted? '':'bg-background'} ${filterStates.showGhosted? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.ghosted.icon} 
                    alt={`Filter by ${JobStyling.ghosted.state} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStyling.ghosted.state}</span>
            </button>
        </li>       
        <li>
            <button onclick={()=>filterStates.showAccepted = !filterStates.showAccepted}
                class={`${filterStates.showAccepted? '':'bg-background'} ${filterStates.showAccepted? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.accepted.icon} 
                    alt={`Filter by ${JobStyling.accepted.state} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStyling.accepted.state}</span>
            </button>
        </li>
        <li>
            <select bind:value={filterStates.sortBy}
                class="bg-accent-inner h-full"            
            >
                <option value={enumSortModes.default}>Default</option>
                <option value={enumSortModes.date}>Date</option>
                <option value={enumSortModes.salary}>Salary</option>
                <option value={enumSortModes.status}>Status</option>
            </select>
        </li>
        <li>
            <select bind:value={filterStates.isAscendent} 
                class="bg-accent-inner h-full"
            >
                <option value={false}>
                    Desc./Newest
                </option>
                <option value={true}>
                    Asc./Oldest
                </option>
            </select>
        </li>
    </ul>
</div>