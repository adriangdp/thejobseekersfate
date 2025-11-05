<script lang="ts">
    import type { Application } from "@data/types";

    let { 
     showRejected  = $bindable(true),
     showPending  = $bindable(true),
     showInProgress  = $bindable(true)
    } = $props()


</script>

<div>
    <ul class="flex">
        <li>
            <button onclick={()=>showRejected = !showRejected}>{showRejected ? "Hide rejected" : "Show rejected"}</button>
        </li>
        <li>
            <button onclick={()=>showPending = !showPending}>{showPending ? "Hide pending response" : "Show pending response"}</button>
        </li>
        <li>
            <button onclick={()=>showInProgress = !showInProgress}>{showInProgress ? "Hide in progress" : "Show in progress"}</button>
        </li>
    </ul>
</div>