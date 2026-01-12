<script lang="ts">
    import { type JobApplication, type JobState } from "@data/types";
    import BadgeStatus from "@lib/common/BadgeStatus.svelte";
    import BadgeStatusChanger from "@lib/common/BadgeStatusChanger.svelte";
    import DeleteJobApplication from "@lib/DeleteJobApplication.svelte";
    import Modal from "@lib/Modal.svelte";

    let  { isOpen = $bindable(), jobApplication } : {jobApplication: JobApplication, isOpen: boolean} = $props()
    let { id, status, position, company, salary, mode, link, appliedDate} = $derived(jobApplication)
    let editStatusFlag:boolean = $state(false);


</script>

<Modal bind:isOpen>
    <div class="flex flex-col">
        <div class="flex justify-between items-center gap-4 md:gap-6 w-full">
            <img src={status.icon} alt={`${status} icon status`} class="mx-auto mix-blend-color-dodge w-18 md:w-26 lg:w-22"/>
            <div>
                <span class="block font-rosarivo text-center text-wrap text-lg md:text-2xl lg:text-xl">{company}</span>
                <span class="block font-rosarivo text-text-darker text-center text-wrap text-lg md:text-2xl lg:text-xl">&#149;  {status.figureName}  &#149;</span>
            </div>
        </div>
        <div class="mt-12 flex flex-col gap-5 md:gap-6">
                <div>
                    <button class="button-invisible p-0 relative flex gap-2" onclick={()=>{editStatusFlag = !editStatusFlag}}>
                        <BadgeStatus state={status} />   
                        {#if editStatusFlag}
                            <BadgeStatusChanger id={id} state={status}></BadgeStatusChanger>
                        {/if}
                    </button>
                </div>                
                <div>
                    <img src="/img/icon-building.png" alt="work mode icon"  class="w-8 md:w-9 inline" />
                    <span class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base">{position}</span>
                </div>
                <div>
                    <img src="/img/icon-byhorse.png" alt="work mode icon"  class="w-8 md:w-9 inline" />
                    <span class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base">{mode? `${mode}`:'Unkown'}</span>
                </div>
                <div>
                    <img src="/img/icon-coin.png" alt="salary icon"  class="w-8 md:w-9 inline" />
                    <span class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base">{salary === "unknown" ? "unknown": Number(salary).toLocaleString('es-ES')+" €"} </span>
                </div>
                <div>
                    <img src="/img/icon-calendar.png" alt="added date icon"  class="w-8 md:w-9 inline" />
                    <span class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base">{String(appliedDate.getDate()).padStart(2,'0')}/{appliedDate.getMonth()}/{appliedDate.getFullYear()}</span>
                </div>
                <div>
                    <img src="/img/icon-link.png" alt="added date icon"  class="w-8 md:w-9 inline" />
                    <a href={link} class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base">Link to offer</a>
                </div>     
        </div>
        <div class="mt-12 w-full flex justify-between items-center">
            <button class="w-10/12"> Edit </button>
            <DeleteJobApplication id={id} />
        </div>

    </div>
</Modal>
