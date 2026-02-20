<script lang="ts">
    import { JobStates } from "@data/jobStates";


    let { 
     showRejected  = $bindable(),
     showApplied  = $bindable(),
     showInterview  = $bindable(),
     showOffer  = $bindable(),
     showAccepted  = $bindable(),
     showGhosted  = $bindable(),
     sortBy = $bindable(),
     isAscendent = $bindable()
    }  :
    {
        showOffer : boolean,
        showApplied : boolean,
        showInterview : boolean,
        showRejected : boolean,      
        showGhosted : boolean,
        showAccepted : boolean,
        sortBy : string,
        isAscendent : boolean,
    }= $props()

</script>

<div class="my-5">
    <ul class="flex flex-wrap justify-center gap-4">
        <li>
            <button onclick={()=>showOffer = !showOffer}
                class={`${showOffer? '':'bg-background'} ${showOffer? '':'border-accent-outer/50'}`}
            >
                <img src={JobStates.offer.icon} 
                    alt={`Filter by ${JobStates.offer.situation} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStates.offer.situation}</span>
            </button>
        </li>
        <li>
            <button onclick={()=>showApplied = !showApplied}
                class={`${showApplied? '':'bg-background'} ${showApplied? '':'border-accent-outer/50'}`}
            >
                <img src={JobStates.applied.icon} 
                    alt={`Filter by ${JobStates.applied.situation} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStates.applied.situation}</span>
            </button>
        </li>
        <li>
            <button onclick={()=>showInterview = !showInterview}
                class={`${showInterview? '':'bg-background'} ${showInterview? '':'border-accent-outer/50'}`}
            >
                <img src={JobStates.interview.icon} 
                    alt={`Filter by ${JobStates.interview.situation} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStates.interview.situation}</span>
            </button>
        </li>
        <li>
            <button onclick={()=>showRejected = !showRejected}
                class={`${showRejected? '':'bg-background'} ${showRejected? '':'border-accent-outer/50'}`}
            >
                <img src={JobStates.rejected.icon} 
                    alt={`Filter by ${JobStates.rejected.situation} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStates.rejected.situation}</span>
            </button>
        </li>
        <li>
            <button onclick={()=>showGhosted = !showGhosted}
                class={`${showGhosted? '':'bg-background'} ${showGhosted? '':'border-accent-outer/50'}`}
            >
                <img src={JobStates.ghosted.icon} 
                    alt={`Filter by ${JobStates.ghosted.situation} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStates.ghosted.situation}</span>
            </button>
        </li>       
        <li>
            <button onclick={()=>showAccepted = !showAccepted}
                class={`${showAccepted? '':'bg-background'} ${showAccepted? '':'border-accent-outer/50'}`}
            >
                <img src={JobStates.accepted.icon} 
                    alt={`Filter by ${JobStates.accepted.situation} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStates.accepted.situation}</span>
            </button>
        </li>
        <li>
            <select bind:value={sortBy}
                class="bg-accent-inner h-full"            
            >
                <option value="default">Default</option>
                <option value="date">Date</option>
                <option value="salary">Salary</option>
                <option value="status">Status</option>
            </select>
        </li>
        <li>
            <select bind:value={isAscendent} 
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