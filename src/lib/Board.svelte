<script lang="ts">
    import { liveQuery } from "dexie";
    import { db, clearTable } from "@data/db";
    import JobRow from "./JobRow.svelte";
    import AddApplication from "./AddApplication.svelte";
    import app from "../main";
    import { derived } from "svelte/store";
    import type { Application } from "@data/types";
    import BoardFilter from "@lib/BoardFilter.svelte";

    let applications = liveQuery(()=> db.application.toArray())
   

    let showRejected: boolean = $state(true)
    let showPending: boolean = $state(true)
    let showInProgress: boolean = $state(true)

    let filteredApplications = $derived(
        $applications.filter(a =>
            a.status === 0 && showRejected ||
            a.status === 1 && showPending ||
            a.status === 2 && showInProgress
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