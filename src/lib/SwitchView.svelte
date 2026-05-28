<script lang="ts">

    let { isCardDisplay  = $bindable() } : {isCardDisplay:boolean} = $props();

</script>

<div class="flex gap-0 bg-accent-inner rounded-md p-1">
    <button onclick={()=>{isCardDisplay = true}}
        class={`button-invisible ${isCardDisplay? 'bg-accent-outer':''} rounded-md hover:bg-accent-outer/50 p-1 group`}  
    >
        <img src="/img/icon-view-card.png" alt="Card view style icon" class={`w-8 h-8 group-hover:brightness-200 ${isCardDisplay? 'brightness-200' : 'brightness-100'}`}/>
    </button>
    <button  onclick={()=>{isCardDisplay = false}}
        class={`button-invisible ${!isCardDisplay? 'bg-accent-outer':''} rounded-md hover:bg-accent-outer/50 p-1 group`}
    >
        <img src="/img/icon-view-table.png" alt="Table view style icon" class={`w-8 h-8 group-hover:brightness-200 ${!isCardDisplay? 'brightness-200' : 'brightness-100'}`}/>
    </button>
</div>