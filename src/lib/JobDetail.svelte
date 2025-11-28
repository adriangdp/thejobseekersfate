<script lang="ts">
    import { type JobApplication, type JobState } from "@data/types";
    import Modal from "@lib/Modal.svelte";
    let  {jobApplication, isOpen = $bindable() } : {jobApplication: JobApplication, isOpen: boolean} = $props()
    let { status, position, company, salary, mode, link, appliedDate} = $derived(jobApplication)
</script>

<Modal isOpen>
    <div class="flex flex-col w-72">
        <div class="flex">
            <img src={status.icon} alt={`${status} icon status`} class="mx-auto mix-blend-color-dodge w-13 md:w-28 lg:w-43"/>
            <div>
                <h3>{status.figureName}</h3>
                <span>{company}</span>
            </div>
        </div>
        <div>
                <div>
                    <img src="/img/icon-building.png" alt="work mode icon"  class="w-5 md:w-7 inline" />
                    <span class="text-text-darker text-sm md:text-md">{position}</span>
                </div>
                <div>
                    <img src="/img/icon-building.png" alt="work mode icon"  class="w-5 md:w-7 inline" />
                    <span class="text-text-darker text-sm md:text-md">{mode? `${mode}`:'Unkown'}</span>
                </div>
                <div>
                    <img src="/img/icon-coin.png" alt="salary icon"  class="w-5 md:w-7 inline" />
                    <span class="text-text-darker text-sm md:text-md">{salary}</span>
                </div>
                <div>
                    <img src="/img/icon-calendar.png" alt="added date icon"  class="w-5 md:w-7 inline" />
                    <span class="text-text-darker text-sm md:text-md">{String(appliedDate.getDate()).padStart(2,'0')}/{appliedDate.getMonth()}/{appliedDate.getFullYear()}</span>
                </div>
                <div>
                    <img src="/img/icon-calendar.png" alt="added date icon"  class="w-5 md:w-7 inline" />
                    <span class="text-text-darker text-sm md:text-md">{link}</span>
                </div>     
        </div>
    </div>
</Modal>
