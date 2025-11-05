<script lang="ts">
    import { liveQuery } from "dexie"
    import { db, clearTable } from "@data/db"
    import { applicationStates } from "@data/types"
    import JobRow from "./JobRow.svelte"
    import AddApplication from "./AddApplication.svelte"
    import BoardFilter from "@lib/BoardFilter.svelte"

    let applications = liveQuery(()=> db.application.toArray())
   

    let showRejected: boolean = $state(true)
    let showPending: boolean = $state(true)
    let showInProgress: boolean = $state(true)

    let filteredApplications = $derived(
        $applications.filter(a =>
            applicationStates.Rejected && showRejected ||
            applicationStates.Applied && showPending ||
            applicationStates.Contacted && showInProgress
        )|| []
    )
</script>

<BoardFilter bind:showRejected bind:showPending bind:showInProgress ></BoardFilter>

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
        {#if $applications}
            {#each filteredApplications as application }
                <JobRow {application}></JobRow>
            {/each}
        {/if}
    </tbody>
</table>
<AddApplication></AddApplication>
<button onclick={clearTable}> Clear data</button>
<style>
    th{
        border-color: beige;
        border-width: 1px;
        padding: 1em 2em;
    }
    .fullrow{
        padding: 0;
    }
</style>