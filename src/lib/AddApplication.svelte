<script lang="ts">
    import { db } from "@data/db"
    import { applicationSchema } from "@data/validation-schemas"
    import { applicationStates, type Application } from "@data/types"
    import CloseButton from "@lib/common/CloseButton.svelte"
    import cardRejected from "/card-rejected.svg"
    import cardApplied from "/card-applied.svg"
    import cardContacted from "/card-contacted.svg"
    import BadgeStatus from "@lib/common/BadgeStatus.svelte";
    import app from "../main";
    import type { EventHandler } from "svelte/elements";


    let{ showAddApplicationModal = $bindable() } = $props()
  
    let selectedStatus:applicationStates = $state(applicationStates.Applied)

    const statusOptions = [
        {
            value: applicationStates.Applied,
            image: cardApplied,
            label: "Applied",
        },
        {
            value: applicationStates.Contacted,
            image: cardContacted,
            label: "Contacted",
        },
        {
            value: applicationStates.Rejected,
            image: cardRejected,
            label: "Rejected",
        },
    ]

    const handleNewApplication = async(event:SubmitEvent) =>{
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        formData.set('status', selectedStatus.toString())
        formData.set('appliedDate', new Date().toISOString())

        try{
            const data = Object.fromEntries(formData.entries())

            const validateData = applicationSchema.parse(data)
            const id = await db.application.add(validateData)
            
            form.reset()
            selectedStatus = applicationStates.Applied
            showAddApplicationModal = false
        } catch(error){
            console.log(error)
        }
        
    }

    const handleSelectApplicationState = (button:HTMLButtonElement, choice:applicationStates) =>{

        selectedStatus = choice
    }

</script>
<div class="absolute top-0 left-0 w-screen h-screen p-40 bg-accent-inner/20 backdrop-blur-xs">
    <div class="relative bg-accent-inner/90 border-2 rounded-md border-accent-outer">
        <form onsubmit={handleNewApplication}>
            <div class="flex items-center gap-1 m-5">
                <div>
                    <label for="input-status">Status</label>
                    <div class="flex justify-center items-center gap-2 mt-3">
                        {#each statusOptions as option}
                            <button type="button" class={`button-invisible cursor-pointer ${option.value === selectedStatus? 'opacity-100':'opacity-40'}`}  onclick={(e)=>handleSelectApplicationState(e.currentTarget as HTMLButtonElement, option.value)}>
                                <BadgeStatus state={option.value}></BadgeStatus>
                            </button>                                  
                        {/each}
                    </div>
                </div>
                <div>
                    <label for="input-position">Position</label>
                    <input name="position" id="input-position" type="text"/>
                </div>
                <div>
                    <label for="input-company">Company</label>
                    <input name="company" id="input-company" type="text"/>
                </div>                
                <div>
                    <label for="input-mode">Mode</label>
                    <input name="mode" id="input-mode" type="text"/>
                </div>
                <div>
                    <label for="input-salary">Salary</label>
                    <input name="salary" id="input-salary" type="number"/>
                </div>
                <div>
                    <label for="input-link">Link</label>
                    <input name="link" id="input-link" type="url"/>
                </div>
            </div> 
            <button type="submit" class="w-full h-full"> Apply here</button>
        </form>
        <CloseButton bind:isOpen={showAddApplicationModal} positioning="absolute top-0 right-0"/>         
    </div>  
          
</div>

