<script lang="ts">
    import { db } from "@data/db";
    let{id} : { id:number} = $props();

    const handleDelete = async() =>{
        const found = await db.jobData.where("id").equals(id).delete()
    }
</script>

<button onclick={handleDelete}
    class="absolute bottom-2 right-2 border-0 text-xl font-bold cursor-pointer bg-radial from-card-rejected/15 from-35% to-card-rejected/0 to-60%"     
><img src="/img/icon-erase-entry.png" alt="close button icon"
    class="w-8 md:w-12"
/></button>