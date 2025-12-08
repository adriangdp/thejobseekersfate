<script lang="ts">
    import { clearTable } from "@data/db";

    let isFolded:boolean = $state(true)

    const handleunFold = async():Promise<void> =>{
        isFolded = false;
        setTimeout(()=>{isFolded = true}, 10 * 1000)
    }

</script>

<div class="relative w-fit bg-background border border-accent-outer overflow-hidden">
     <button class={`fold ${isFolded? '':'unfold'} flex items-center justify-center gap-2`} onclick={handleunFold}>
        <img src="/img/icon-delete.png"
                alt="Delete database button icon"
                width="20px" height="20px" 
        />
        <span>Clear data</span>
    </button>
    <div  class="flex p-2 gap-3 w-full h-full bg-card-rejected/10 ">
            <span>Are you sure?</span>
            <button onclick={clearTable} class="button-invisible p-0 hover:text-card-rejected" disabled={isFolded}>YES</button>
            <span>&nbsp;</span>
            <button onclick={()=>isFolded = true} class="button-invisible p-0 hover:text-card-applied" disabled={isFolded}>NO</button>  
    </div> 
   
</div>


<style>
    .fold{
        position:absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-accent-inner);
        border: 1px solid var(--color-accent-outer);
        transform: translateY(0%);
        transition: 2s 0s transform ease;
        z-index: 20;
        overflow: hidden;
    }

    .unfold{
        transform: translateY(-100%);
        transition: 1.2s 0s transform ease;
    }

</style>