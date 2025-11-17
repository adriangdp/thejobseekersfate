<script lang="ts">
    import type { Application } from "@data/types";

    let { 
     showRejected  = $bindable(),
     showPending  = $bindable(),
     showInProgress  = $bindable(),
     sortBy = $bindable(),
     isAscendent = $bindable()
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
        <li>
            <select bind:value={sortBy}>
                <option value="default">Default</option>
                <option value="date">Date</option>
                <option value="salary">Salary</option>
                <option value="status">Status</option>
            </select>
        </li>
        <li>
            <select bind:value={isAscendent}>
                <option value={false}>Desc./Newest</option>
                <option value={true}>Asc./Oldest</option>
            </select>
        </li>
    </ul>
</div>