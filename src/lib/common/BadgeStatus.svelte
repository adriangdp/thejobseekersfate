<script lang="ts">
    import { enumJobStatus, type JobEntry } from "@data/types";
    import { JobStyling } from "@data/jobStates";

    let {status}: {status:enumJobStatus} = $props()
    let border = $derived(JobStyling[status].styles.badge.border)
    let background = $derived(JobStyling[status].styles.badge.background)
    let textStyle = $derived(JobStyling[status].styles.text)

</script>

<div class={`inline-flex items-center justify-center p-1 lg:px-2 lg:py-1 w-fit rounded-full border-2 ${border} ${background}`}>
    <p class={`${textStyle} text-sm`}>{JobStyling[status].state}</p>
</div>