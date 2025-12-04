<script lang="ts">
    import { type JobState } from "@data/types";
    

    let {state}: {state:JobState} = $props()
    let border = $derived(state.styles.badge.border)
    let background = $derived(state.styles.badge.background)
    let text = $derived(state.styles.text)

</script>

<div class={`inline-flex items-center justify-center p-1 lg:px-2 lg:py-1 w-fit rounded-full border-2 ${border} ${background}`}>
    <p class={`${text} text-sm`}>{state.situation}</p>
</div>