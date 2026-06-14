<script lang="ts">
  import Header from '@lib/common/Header.svelte';
  import Board from '@lib/Board.svelte';
  import { dbGetAllJobs } from './service/data-functions.svelte';
  import { googleOAuth, LogOut } from './service/auth.svelte';
  import { session } from './store/session-store.svelte';
  import { jobData } from './store/data-store.svelte';
  import LogIn from '@lib/LogIn.svelte';

  $effect(()=>{
    if(session){
      dbGetAllJobs()
      .then(data => {
          jobData.set(data)
      })
    }
  })

    
</script>



{#if session.user == null}
  <!--<button onclick={()=>googleOAuth()} class="flex">
    <img  src="/img/icon-google.png" alt="Log in with google" class="opacity-60 h-6 w-6"/>
    Log In with Google
  </button>-->
  <LogIn />
{:else}
  <!--<button onclick={()=>LogOut()} class="flex">
    <img  src="/img/icon-logout.png" alt="Close session icon" class="opacity-60 h-6 w-6"/>    
      Log out
    </button>-->
    <main class="w-11/12 mx-auto">
      <Header />
      <button onclick={()=>LogOut()} class="flex">
        <img  src="/img/icon-logout.png" alt="Close session icon" class="opacity-60 h-6 w-6"/>    
          Log out
      </button>
      <Board />
    </main>
{/if}
  

