<script lang="ts">
    import { db } from "@data/db"
    import { JobStates } from "@data/jobStates"
    import { applicationSchema } from "@data/validation-schemas"
    import BadgeStatus from "@lib/common/BadgeStatus.svelte";

    let{ showAddApplicationModal = $bindable() } : {showAddApplicationModal : boolean}= $props()
  
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
            showAddApplicationModal = false
        } catch(error){
            console.log(error)
        }
        
    }

</script>

        <form onsubmit={handleNewApplication} class="flex flex-col gap-8 h-fit">
            <div class="flex flex-col items-center gap-2 xl:gap-4">
                <div>
                    <label for="input-status">Status</label>
                    <div class="flex flex-wrap items-center gap-2 xl:gap-5 mt-3">
                        {#each Object.entries(JobStates) as [key,option]}
                            <button type="button" class={`button-invisible cursor-pointer ${key === selectedStatus? 'brightness-250':''} p-0`}  onclick={()=>selectedStatus = key}>
                                <BadgeStatus state={option}></BadgeStatus>
                            </button>                                  
                        {/each}
                    </div>
                </div>
                <div class="w-full">
                    <label for="input-position" class="block">Position</label>
                    <input name="position" id="input-position" type="text" class="w-full" />
                </div>
                <div class="w-full">
                    <label for="input-company">Company</label>
                    <input name="company" id="input-company" type="text" class="w-full"/>
                </div>                
                <div class="w-full">
                    <label for="input-mode">Mode</label>
                    <input name="mode" id="input-mode" type="text" class="w-full"/>
                </div>
                <div class="w-full">
                    <label for="input-salary">Salary</label>
                    <input name="salary" id="input-salary" type="number" class="w-full"/>
                </div>
                <div class="w-full">
                    <label for="input-link">Link</label>
                    <input name="link" id="input-link" type="url" class="w-full"/>
                </div>
            </div> 
            <button type="submit" class="w-full h-full"> Apply here</button>
        </form>


