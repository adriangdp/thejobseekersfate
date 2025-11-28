<script lang=ts>
    let{ isOpen = $bindable(), positioning } : {isOpen:boolean, positioning?:string} = $props()
</script>

<button onclick={()=>{isOpen=false}}
    class={`${positioning  || 'absolute top-2 right-2'} border-0 text-xl font-bold cursor-pointer` }     
><img src="/img/icon-delete.png" alt="close button icon"
    class="w-8 md:w-12"
/></button>