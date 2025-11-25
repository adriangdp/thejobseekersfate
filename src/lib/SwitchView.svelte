<script lang="ts">

    let { isCardDisplay  = $bindable() } : {isCardDisplay:boolean} = $props();

</script>

<div class="flex gap-1 bg-background border border-accent-outer p-1">
    <button onclick={()=>{isCardDisplay = true}}
        class={`flex button-invisible ${isCardDisplay? 'bg-accent-inner':''} rounded-md hover:bg-accent-inner p-1 group`}  
    >
        <img width="24px" height="24px" src="/img/icon-view-card.png" alt="Card view style icon" class={`group-hover:brightness-200 ${isCardDisplay? 'brightness-200' : 'brightness-100'}`}/>
    </button>
    <button  onclick={()=>{isCardDisplay = false}}
        class={`flex button-invisible ${!isCardDisplay? 'bg-accent-inner':''} rounded-md hover:bg-accent-inner p-1 group`}
    >
        <img width="24px" height="24px" src="/img/icon-view-table.png" alt="Table view style icon" class={`group-hover:brightness-200 ${!isCardDisplay? 'brightness-200' : 'brightness-100'}`}/>
    </button>
</div>