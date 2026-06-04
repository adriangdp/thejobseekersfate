<script lang="ts">

    import { session } from "../store/session-store.svelte"
    import { jobData } from "../store/data-store.svelte";
    import { applyFiltersAndSort, isAllFiltersOff } from "../store/filter-store.svelte";
    import AddApplication from "@lib/AddApplication.svelte"
    import BoardFilter from "@lib/BoardFilter.svelte"
    import JobDisplay from "@lib/Job/JobDisplay.svelte"
    import Modal from "@lib/Modal.svelte"
    import SwitchView from "@lib/SwitchView.svelte"
    import ClearDataButton from "@lib/ClearDataButton.svelte";
    
    let filteredApplications = $derived(applyFiltersAndSort(jobData.values))

    let isCardDisplay: boolean = $state(true)
    let showAddApplicationModal:boolean = $state(false) 
    let preventScroll: boolean = $derived(showAddApplicationModal)

</script>

<div class={`${preventScroll ? 'max-h-screen overflow-hidden':''} w-full pt-4`
}>
    <div class="max-w-full flex flex-wrap gap-2 justify-between">
        <div class="flex flex-wrap gap-2 justify-between">
            <SwitchView bind:isCardDisplay/>
            {#if !session.loading && session.user}
            <button onclick={()=>{showAddApplicationModal = !showAddApplicationModal}}
                class="flex items-center gap-3"
            > 
                <img  src="/img/icon-add.png" alt="add job application button icon" class="w-7 h-7"/>
                <span>Add Job Application</span>
            </button>
            {/if}
        </div>
        <ClearDataButton />
    </div>
    <BoardFilter />
    {#if session.user && !session.loading}
        <div class="my-3">
            <p>Showing {filteredApplications.length} of {jobData.values.length} applications</p>
        </div>
        {#if filteredApplications.length > 0}
            {#if isCardDisplay}
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-3 lg:gap-6">
                    {#each filteredApplications as cardApplication}
                        <JobDisplay application={cardApplication} isCardDisplay={true}></JobDisplay>
                    {/each}
                </div>
            {:else}
            <div class="w-full overflow-x-auto">
                <table class="lg:mx-auto lg:w-full">
                    <thead class="bg-accent-inner">
                        <tr>
                            <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Status</th>
                            <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Position</th>
                            <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Company</th>
                            <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Mode</th>
                            <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Salary</th>
                            <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Link</th>
                            <th class="border p-3 border-accent-outer text-text-darker text-sm md:text-base">Added Date</th>
                        </tr>
                    </thead>
                    <tbody>                
                        {#each filteredApplications as application }
                            <JobDisplay application={application} isCardDisplay={false}></JobDisplay>
                        {/each}
                
                    </tbody>
                </table>
            </div>

            {/if}
        {:else if jobData.length <= 0 && !isAllFiltersOff()}
            <span class="block my-8 text-center text-text-darker text-2xl font-rosarivo"> 
                Approach, oh fretting soul, and add a 
                <button onclick={()=>{showAddApplicationModal = true}}
                    class="button-invisible p-0 text-card-accepted decoration-card-accepted underline decoration-dotted underline-offset-7 lg:underline-offset-4 hover:decoration-card-offer hover:text-card-offer visited:text-card-accepted visited:decoration-card-accepted"
                >
                Job Application
                </button> to recieve a reading.
            </span>
        {:else if isAllFiltersOff()}
            <span class="block mt-8 text-center text-text-darker text-2xl font-rosarivo"> No readings can be offered with all filters turned off.</span>
        {:else}
            <span class="block mt-8 text-center text-text-darker text-2xl font-rosarivo"> The stars do not align. Something unsettling is afoot.</span>
        {/if}
    {:else}
        <span class="block mt-8 text-center text-text-darker text-2xl font-rosarivo"> Please, mysterious soul, identify yourself to know your fate...</span>
    {/if}
    
    
    {#if showAddApplicationModal}
        <Modal bind:isOpen={showAddApplicationModal}>
            <AddApplication bind:showAddApplicationModal={showAddApplicationModal} />
        </Modal>
    {/if}
    
    
</div>

