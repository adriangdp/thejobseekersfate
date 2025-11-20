<script lang="ts">
    import { db } from "@data/db"
    import { JobStates } from "@data/jobStates"
    import { applicationSchema } from "@data/validation-schemas"
    import CloseButton from "@lib/common/CloseButton.svelte"
    import BadgeStatus from "@lib/common/BadgeStatus.svelte";
    import type { JobState } from "@data/types";
    import { keyof } from "zod";



    let{ showAddApplicationModal = $bindable() } = $props()
  
    let selectedStatus:string = $state("offer")

    const handleNewApplication = async(event:SubmitEvent) =>{
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        formData.set('statusKey', selectedStatus)
        formData.set('appliedDate', new Date().toISOString())

        try{
            const data = Object.fromEntries(formData.entries())
            const parseData = applicationSchema.parse(data)
            const id = await db.jobData.add(parseData)
            
            form.reset()
            selectedStatus = "offer"
            showAddApplicationModal = false
        } catch(error){
            console.log(error)
        }
        
    }

</script>
<div class="z-40 absolute top-0 left-0 w-screen h-screen p-40 bg-accent-inner/20 backdrop-blur-xs">
    <div class="relative bg-accent-inner/90 border-2 rounded-md border-accent-outer">
        <form onsubmit={handleNewApplication}>
            <div class="flex items-center gap-1 m-5">
                <div>
                    <label for="input-status">Status</label>
                    <div class="flex justify-center items-center gap-2 mt-3">
                        {#each Object.entries(JobStates) as [key,option]}
                            <button type="button" class={`button-invisible cursor-pointer ${key === selectedStatus? 'opacity-100':'opacity-40'}`}  onclick={()=>selectedStatus = key}>
                                <BadgeStatus state={option}></BadgeStatus>
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

