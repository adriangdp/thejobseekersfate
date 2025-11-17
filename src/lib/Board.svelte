<script lang="ts">
    import { liveQuery } from "dexie"
    import { db, clearTable } from "@data/db"
    import { applicationStates, type Application } from "@data/types"
    import AddApplication from "./AddApplication.svelte"
    import BoardFilter from "@lib/BoardFilter.svelte"
    import JobDisplay from "@lib/JobDisplay.svelte"
    
    let isCardDisplay: boolean = $state(true)
    let showAddApplicationModal:boolean = $state(false)
    let showRejected: boolean = $state(true)
    let showPending: boolean = $state(true)
    let showInProgress: boolean = $state(true)
    let sortBy:string = $state("default")
    let isAscendent:boolean = $state(false)

    let applications:Application[] = $state([])
    liveQuery(()=> db.application.toArray()).subscribe(data => applications = [...data])
    
    let filteredApplications = $derived.by(
        ():Application[]=>{            
            let filteredArray = applications.filter(a =>
            (a.status === applicationStates.Rejected && showRejected) ||
            (a.status === applicationStates.Applied && showPending) ||
            (a.status === applicationStates.Contacted && showInProgress)
            )|| []


            filteredArray.sort((a,b):number=>{
                switch(sortBy){
                    case("salary") : { return isAscendent ? a.salary - b.salary : b.salary - a.salary}
                    case("status") : { return isAscendent ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status)}
                    case("date") : {return isAscendent ? a.appliedDate.getTime() - b.appliedDate.getTime() : b.appliedDate.getTime() - a.appliedDate.getTime()}
                    default: return a.id-b.id
                }
            })
            console.log(filteredArray)
            return filteredArray
        }
    )
</script>

<div class="flex gap-2">
<button onclick={()=>{isCardDisplay = !isCardDisplay}}> Change view</button>
<button onclick={()=>{showAddApplicationModal = !showAddApplicationModal}}> Add Job Application</button>
</div>
<BoardFilter bind:showRejected bind:showPending bind:showInProgress bind:sortBy bind:isAscendent></BoardFilter>
{#if applications}
    {#if isCardDisplay}
        <div class="flex">
            {#each filteredApplications as cardApplication}
                <JobDisplay application={cardApplication} isCardDisplay={true}></JobDisplay>
            {/each}
        </div>
    {:else}
        <table>
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Position</th>
                    <th>Company</th>
                    <th>Mode</th>
                    <th>Salary</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
            
                {#each filteredApplications as application }
                    <JobDisplay application={application} isCardDisplay={false}></JobDisplay>
                {/each}
        
            </tbody>
        </table>
    {/if}
{/if}
{#if showAddApplicationModal}
    <AddApplication bind:showAddApplicationModal />
{/if}

<button onclick={clearTable}> Clear data</button>
