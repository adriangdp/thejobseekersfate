<script lang="ts">
  import Header from '@lib/common/Header.svelte';
  import Board from '@lib/Board.svelte';
  import { dbGetAllJobs } from './service/data-functions.svelte';
  import { googleOAuth, LogOut } from './service/auth.svelte';
  import { session } from './store/session-store.svelte';
  import { jobData } from './store/data-store.svelte';

  $effect(()=>{
    if(session){
      dbGetAllJobs()
      .then(data => {
          jobData.set(data)
      })
    }
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
