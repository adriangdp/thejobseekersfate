<script lang="ts">
    import { type JobEntry } from "@data/types"    
    import { JobStyling } from "@data/jobStates";
    import JobDetail from "./JobDetail.svelte";
    import JobDisplayCard from "./JobDisplayCard.svelte";
    import JobDisplayRow from "./JobDisplayRow.svelte";

    let showDetail: boolean = $state(false)
    let { application, isCardDisplay } : {application:JobEntry, isCardDisplay:boolean} = $props();
    let dateObject = $derived(application.applied_date ? new Date(application.applied_date) : null)
    let JobStyle = $derived(JobStyling[application.status])
</script>

{#if isCardDisplay}
    <JobDisplayCard 
        application = {application} 
        applied_date = {dateObject}
        jobStyle = {JobStyle}
        bind:showDetail = {showDetail}
    ></JobDisplayCard>
{:else}
    <JobDisplayRow 
        application = {application} 
        applied_date = {dateObject}
        jobStyle = {JobStyle}
        bind:showDetail = {showDetail}>
    </JobDisplayRow>
{/if}
{#if showDetail}
    <JobDetail 
        application={application} 
        applied_date = {dateObject}
        jobStyle = {JobStyle}
        bind:showDetail={showDetail}
    ></JobDetail>
{/if}


