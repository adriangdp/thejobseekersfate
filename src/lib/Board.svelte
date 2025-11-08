<script lang="ts">
    import { liveQuery } from "dexie"
    import { db, clearTable } from "@data/db"
    import { applicationStates } from "@data/types"
    import AddApplication from "./AddApplication.svelte"
    import BoardFilter from "@lib/BoardFilter.svelte"
    import JobDisplay from "@lib/JobDisplay.svelte"
    

    let applications = liveQuery(()=> db.application.toArray())
   
    let isCardDisplay: boolean = $state(true)
    let showAddApplicationModal:boolean = $state(false)
    let showRejected: boolean = $state(true)
    let showPending: boolean = $state(true)
    let showInProgress: boolean = $state(true)

    let filteredApplications = $derived(
        $applications.filter(a =>
            a.status === applicationStates.Rejected && showRejected ||
            a.status === applicationStates.Applied && showPending ||
            a.status === applicationStates.Contacted && showInProgress
        )|| []
    )
</script>

<div class="flex gap-2">
<button onclick={()=>{isCardDisplay = !isCardDisplay}}> Change view</button>
<button onclick={()=>{showAddApplicationModal = !showAddApplicationModal}}> Add Job Application</button>
</div>
<BoardFilter bind:showRejected bind:showPending bind:showInProgress ></BoardFilter>
{#if $applications}
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
