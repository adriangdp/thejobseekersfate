<script lang="ts">

    let { 
     showRejected  = $bindable(),
     showApplied  = $bindable(),
     showInterview  = $bindable(),
     showOffer  = $bindable(),
     showAccepted  = $bindable(),
     showGhosted  = $bindable(),
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
            <button onclick={()=>showApplied = !showApplied}>{showApplied ? "Hide applied" : "Show applied"}</button>
        </li>
        <li>
            <button onclick={()=>showInterview = !showInterview}>{showInterview ? "Hide interview" : "Show interview"}</button>
        </li>
        <li>
            <button onclick={()=>showAccepted = !showAccepted}>{showAccepted ? "Hide accepted" : "Show accepted"}</button>
        </li>
        <li>
            <button onclick={()=>showGhosted = !showGhosted}>{showGhosted ? "Hide ghosted" : "Show ghosted"}</button>
        </li>
        <li>
            <button onclick={()=>showOffer = !showOffer}>{showOffer ? "Hide offers" : "Show offers"}</button>
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