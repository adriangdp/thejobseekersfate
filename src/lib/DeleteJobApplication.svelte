<script lang="ts">
    import { dbDeleteJob } from "../service/data-functions.svelte";
    import { jobData } from "../store/data-store.svelte";
    let{id, handleDelete} : { id:number, handleDelete:()=>void} = $props();

</script>

<button class="grow flex items-center justify-center gap-1 w-1/2" onclick={handleDelete}>
    <img src="/img/icon-delete.png" 
        class="w-[25px] h-[25px]" 
        alt="delete button icon"
    />
    <span>Archive</span>
</button>