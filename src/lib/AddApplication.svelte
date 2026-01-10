<script lang="ts">
    import { db } from "@data/db";
    import { JobStates } from "@data/jobStates";
    import { applicationSchema } from "@data/validation-schemas";
    import BadgeStatus from "@lib/common/BadgeStatus.svelte";

    let{ showAddApplicationModal = $bindable() } : {showAddApplicationModal : boolean}= $props()
  
    let statusKey:string = $state("offer");
    let position:string = $state("");
    let company:string = $state("");
    let mode:string = $state("");
    let salary:number|null = $state(null);
    let link:string = $state("");

    const handleNewApplication = async() =>{
     
        const date = new Date().toISOString();
        const formData = {
            statusKey,
            position,
            company,
            mode,
            salary,
            link,
            appliedDate: date
        }

        try{
            const parseData = applicationSchema.parse(formData);
            const id = await db.jobData.add(parseData);
            
            statusKey="offer"
            position=""
            company=""
            mode=""
            salary=null
            link=""

            showAddApplicationModal = false
        } catch(error){
            console.log("Form error.");
            console.log(error);
        }
        
    }

</script>

        <form onsubmit={handleNewApplication} class="flex flex-col gap-8 h-fit">
            <div class="flex flex-col items-center gap-2 xl:gap-4">
                <div>
                    <label for="input-status">Status</label>
                    <div class="flex flex-wrap items-center gap-2 xl:gap-5 mt-3">
                        {#each Object.entries(JobStates) as [key,option]}
                            <button type="button" class={`button-invisible cursor-pointer ${key === statusKey? 'brightness-250':''} p-0`}  onclick={()=>statusKey = key}>
                                <BadgeStatus state={option}></BadgeStatus>
                            </button>                                  
                        {/each}
                    </div>
                </div>
                <div class="w-full">
                    <label for="input-position" class="block">Position</label>
                    <input bind:value={position} name="position" id="input-position" type="text" class="w-full" />
                </div>
                <div class="w-full">
                    <label for="input-company">Company</label>
                    <input bind:value={company} name="company" id="input-company" type="text" class="w-full"/>
                </div>                
                <div class="w-full">
                    <label for="input-mode">Mode</label>
                    <input bind:value={mode} name="mode" id="input-mode" type="text" class="w-full"/>
                </div>
                <div class="w-full">
                    <label for="input-salary">Salary</label>
                    <input bind:value={salary} name="salary" id="input-salary" type="number" class="w-full"/>
                </div>
                <div class="w-full">
                    <label for="input-link">Link</label>
                    <input bind:value={link} name="link" id="input-link" type="url" class="w-full"/>
                </div>
            </div> 
            <button type="submit" class="w-full h-full"> Apply here</button>
        </form>


