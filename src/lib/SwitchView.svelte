<script lang="ts">

    let { isCardDisplay  = $bindable() } : {isCardDisplay:boolean} = $props();

</script>

<div class="flex gap-0 bg-accent-inner rounded-md p-1">
    <button onclick={()=>{isCardDisplay = true}}
        class={`flex w-full h-full button-invisible ${isCardDisplay? 'bg-accent-outer':''} rounded-md hover:bg-accent-outer/50 p-1 group`}  
    >
        <img width="24px" height="24px" src="/img/icon-view-card.png" alt="Card view style icon" class={`group-hover:brightness-200 ${isCardDisplay? 'brightness-200' : 'brightness-100'}`}/>
    </button>
    <button  onclick={()=>{isCardDisplay = false}}
        class={`flex w-full h-full button-invisible ${!isCardDisplay? 'bg-accent-outer':''} rounded-md hover:bg-accent-outer/50 p-1 group`}
    >
        <img width="24px" height="24px" src="/img/icon-view-table.png" alt="Table view style icon" class={`group-hover:brightness-200 ${!isCardDisplay? 'brightness-200' : 'brightness-100'}`}/>
    </button>
</div>