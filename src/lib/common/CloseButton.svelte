<script lang=ts>
    let{ isOpen = $bindable(), positioning } : {isOpen:boolean, positioning?:string} = $props()
</script>

<button 
    class={`${positioning  || 'absolute top-2 right-2'} border-0 text-xl font-bold cursor-pointer` } 
    onclick={()=>{isOpen=false}}
>X</button>