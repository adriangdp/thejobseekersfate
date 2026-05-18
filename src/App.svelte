<script lang="ts">
  import Header from '@lib/common/Header.svelte';
  import Board from '@lib/Board.svelte';
  import { googleOAuth, GetToken, LogOut } from './service/supabase-client.svelte';
  import { onMount } from 'svelte';
  import { session } from './store/session-store.svelte';


  onMount(()=>{
    GetToken();
  })

</script>

<Header />
<main class="w-11/12 mx-auto">
{#if session.user == null}
  <button onclick={()=>googleOAuth()}>LOGIN GOOGLE</button>
{:else}
  <button onclick={()=>LogOut()}>LOG OUT</button>
{/if}
  <Board />
</main>
