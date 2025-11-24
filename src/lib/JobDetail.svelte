<script lang="ts">
    import { type JobApplication, type JobState } from "@data/types";
    let  {jobApplication } : {jobApplication: JobApplication} = $props()
</script>

<div class="flex flex-col">
    <div class="flex">
        <img src={jobApplication.status.icon} alt={jobApplication.status.situation} />
        <div>
            <h3>{jobApplication.company}</h3>
            <p>{jobApplication.company}</p>
        </div>
    </div>
</div>