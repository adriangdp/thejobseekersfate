<script lang="ts">
    import { db } from "@data/db";
    let{id} : { id:number} = $props();

    const handleDelete = async() =>{
        const found = await db.jobData.where("id").equals(id).delete()
    }
</script>

<button class="grow flex items-center justify-center gap-1 w-1/2" onclick={handleDelete}>
    <img src="/img/icon-delete.png" 
        class="w-[25px] h-[25px]" 
        alt="delete button icon"
    />
    <span>Archive</span>
</button>