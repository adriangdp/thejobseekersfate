<script lang="ts">
    import { liveQuery } from "dexie";
    import { db, clearTable } from "@data/db";
    import JobRow from "./JobRow.svelte";
    import AddApplication from "./AddApplication.svelte";
    import app from "../main";

    let applications = liveQuery(()=> db.application.toArray())

</script>

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
            {#each $applications as application (application.id)}
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