<script lang="ts">
    import Header from "@lib/common/Header.svelte";
    import { googleOAuth } from "../service/auth.svelte";

</script>

<div class="w-full h-screen p-5 flex justify-center items-center bg-[url(/img/bg-login.webp)] bg-no-repeat bg-position-[50%_5%]">
        <div class="aspect-[1/1.1] p-10 max-h-[720px] flex flex-col justify-center items-center gap-5 bg-accent-outer/80 rounded-xl">
            <h1 class="text-2xl font-semibold text-header text-text-darker">The Jobseeker's Grove</h1>
            <p class="text-4xl font-light">Welcome!</p>
            <p class="text-lg">Log in with Google to continue.</p>            
            <button onclick={()=>googleOAuth()} class="w-full flex items-center button-outlined bg-accent-outer">
                <img  src="/img/icon-google.png" alt="Log in with google" class="opacity-60 h-8 w-8 grow-0"/>
                <span class="grow">Log In with Google</span>
            </button>
        </div>     
</div>

