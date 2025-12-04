<script lang="ts">
    import { liveQuery } from "dexie"
    import { db, clearTable } from "@data/db"
    import { type JobState, type JobApplication, type JobData } from "@data/types"
    import { JobStates } from "@data/jobStates"
    import AddApplication from "./AddApplication.svelte"
    import BoardFilter from "@lib/BoardFilter.svelte"
    import JobDisplay from "@lib/JobDisplay.svelte"
    import Modal from "@lib/Modal.svelte"
    import SwitchView from "@lib/SwitchView.svelte"
    import ClearDataButton from "@lib/ClearDataButton.svelte";
    
    let isCardDisplay: boolean = $state(true)
    let showAddApplicationModal:boolean = $state(false)

    let showRejected: boolean = $state(true)
    let showApplied: boolean = $state(true)
    let showInterview: boolean = $state(true)
    let showOffer: boolean = $state(true)
    let showAccepted: boolean = $state(true)
    let showGhosted: boolean = $state(true)

    let preventScroll: boolean = $derived(showAddApplicationModal)

    let sortBy:string = $state("default")
    let isAscendent:boolean = $state(false)

    let jobData:JobData[] = $state([])
    liveQuery(()=> db.jobData.toArray()).subscribe(data => jobData = [...data])
    let jobApplications:JobApplication[] = $derived.by(():JobApplication[]=>{
        return jobData.map(e=>{
            let job:JobApplication = {
                id:e.id,
                status: JobStates[e.statusKey],
                position: e.position,
                company: e.company,
                salary: e.salary,
                link: e.link,
                appliedDate: e.appliedDate                
            }
            if(e.mode){
                job.mode = e.mode
            } 
            return job
        })
    })
    
    let filteredApplications = $derived.by(
        ():JobApplication[]=>{       
            let filteredArray = jobApplications.filter(a =>
            (a.status.situation === JobStates.rejected.situation && showRejected) ||
            (a.status.situation === JobStates.applied.situation && showApplied) ||
            (a.status.situation === JobStates.interview.situation && showInterview) ||
            (a.status.situation === JobStates.offer.situation && showOffer) ||
            (a.status.situation === JobStates.accepted.situation && showAccepted) ||
            (a.status.situation === JobStates.ghosted.situation && showGhosted)
            )|| []


            filteredArray.sort((a,b):number=>{
                switch(sortBy){
                    case("salary") : { return isAscendent ? a.salary - b.salary : b.salary - a.salary}
                    case("status") : { return isAscendent ? a.status.toString().localeCompare(b.status.toString()) : b.status.toString().localeCompare(a.status.toString())}
                    case("date") : {return isAscendent ? a.appliedDate.getTime() - b.appliedDate.getTime() : b.appliedDate.getTime() - a.appliedDate.getTime()}
                    default: return a.id-b.id
                }
            })
            console.log(filteredArray)
            return filteredArray
        }
    )
</script>

<div class={`${preventScroll ? 'max-h-screen overflow-hidden':''} w-full pt-4`
}>
    <div class="max-w-full flex flex-wrap gap-2 justify-between">
        <div class="flex flex-wrap gap-2 justify-between">
            <SwitchView bind:isCardDisplay/>
            <button onclick={()=>{showAddApplicationModal = !showAddApplicationModal}}
                    class="flex gap-3"
            > 
                <img  src="/img/icon-add.png" alt="add job application button icon" width="24px" height="24px" class="brightness-200"/>
                <span>Add Job Application</span>
            </button>
        </div>
        <ClearDataButton />
    </div>
    <BoardFilter 
        bind:showRejected 
        bind:showApplied 
        bind:showInterview 
        bind:showAccepted
        bind:showOffer
        bind:showGhosted
        bind:sortBy 
        bind:isAscendent
    >
    </BoardFilter>
    {#if filteredApplications}
        {#if isCardDisplay}
            <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                {#each filteredApplications as cardApplication}
                    <JobDisplay application={cardApplication} isCardDisplay={true}></JobDisplay>
                {/each}
            </div>
        {:else}
        <div class="w-full overflow-x-auto">
            <table class="lg:mx-auto lg:w-full">
                <thead class="bg-accent-inner">
                    <tr>
                        <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Status</th>
                        <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Position</th>
                        <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Company</th>
                        <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Mode</th>
                        <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Salary</th>
                        <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Link</th>
                        <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Added Date</th>
                    </tr>
                </thead>
                <tbody>                
                    {#each filteredApplications as application }
                        <JobDisplay application={application} isCardDisplay={false}></JobDisplay>
                    {/each}
            
                </tbody>
            </table>
        </div>

        {/if}
    {/if}
    {#if showAddApplicationModal}
    <Modal bind:isOpen={showAddApplicationModal}>
        <AddApplication bind:showAddApplicationModal={showAddApplicationModal} />
    </Modal>

    {/if}
</div>

