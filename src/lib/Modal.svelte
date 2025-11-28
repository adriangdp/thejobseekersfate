<script lang="ts">
    import type { Snippet } from "svelte";
    import CloseButton from "@lib/common/CloseButton.svelte";
    let {isOpen = $bindable(), children} : {isOpen:boolean, children:Snippet}= $props()
</script>

<div class="z-40 flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-accent-inner/60 backdrop-blur-xs">
    <div class="relative bg-accent-inner/90 border-2 rounded-md border-accent-outer w-fit h-fit">
        {@render children()}
        <CloseButton bind:isOpen positioning="absolute top-0 right-0"/>         
    </div>  
          
</div>