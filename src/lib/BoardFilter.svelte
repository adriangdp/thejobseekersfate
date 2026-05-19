<script lang="ts">
    import { JobStyling } from "@data/jobStates";

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
                <img src={JobStyling.offer.icon} 
                    alt={`Filter by ${JobStyling.offer.state} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStyling.offer.state}</span>
            </button>
        </li>
        <li>
            <button onclick={()=>showApplied = !showApplied}
                class={`${showApplied? '':'bg-background'} ${showApplied? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.applied.icon} 
                    alt={`Filter by ${JobStyling.applied.state} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStyling.applied.state}</span>
            </button>
        </li>
        <li>
            <button onclick={()=>showInterview = !showInterview}
                class={`${showInterview? '':'bg-background'} ${showInterview? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.interview.icon} 
                    alt={`Filter by ${JobStyling.interview.state} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStyling.interview.state}</span>
            </button>
        </li>
        <li>
            <button onclick={()=>showRejected = !showRejected}
                class={`${showRejected? '':'bg-background'} ${showRejected? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.rejected.icon} 
                    alt={`Filter by ${JobStyling.rejected.state} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStyling.rejected.state}</span>
            </button>
        </li>
        <li>
            <button onclick={()=>showGhosted = !showGhosted}
                class={`${showGhosted? '':'bg-background'} ${showGhosted? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.ghosted.icon} 
                    alt={`Filter by ${JobStyling.ghosted.state} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStyling.ghosted.state}</span>
            </button>
        </li>       
        <li>
            <button onclick={()=>showAccepted = !showAccepted}
                class={`${showAccepted? '':'bg-background'} ${showAccepted? '':'border-accent-outer/50'}`}
            >
                <img src={JobStyling.accepted.icon} 
                    alt={`Filter by ${JobStyling.accepted.state} icon`}
                    width="20px" height="20px" class="inline"
                />
                <span class="text-sm">{JobStyling.accepted.state}</span>
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