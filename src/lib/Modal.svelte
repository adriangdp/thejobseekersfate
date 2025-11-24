<script lang="ts">
    import type { Snippet } from "svelte";
    import CloseButton from "@lib/common/CloseButton.svelte";
    let {isOpen = $bindable(), children} : {isOpen:boolean, children:Snippet}= $props()
</script>

<div class="z-40 fixed top-0 left-0 w-screen h-screen p-40 bg-accent-inner/20 backdrop-blur-xs">
    <div class="relative bg-accent-inner/90 border-2 rounded-md border-accent-outer">
        {@render children()}
        <CloseButton bind:isOpen positioning="absolute top-0 right-0"/>         
    </div>  
          
</div>