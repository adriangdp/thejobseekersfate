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
    let appliedDate:string = $state(new Date().toISOString().split("T")[0]);




    const handleNewApplication = async(e:Event) =>{
        e.preventDefault();
        const formData = {
            statusKey,
            position,
            company,
            mode,
            salary,
            link,
            appliedDate: new Date(appliedDate)
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
                            <button onclick={()=>statusKey = key}
                                type="button" 
                                class={`button-invisible cursor-pointer 
                                    ${key === statusKey? 
                                        'brightness-250':''
                                    } p-0`
                                }
                            >
                                <BadgeStatus state={option}></BadgeStatus>
                            </button>                                  
                        {/each}
                    </div>
                </div>
                <div class="w-full">
                    <label for="input-position" class="block">Position</label>
                    <input bind:value={position}
                        name="position" 
                        id="input-position" 
                        type="text" 
                        placeholder="Position / Job Title"
                        class="w-full" 
                    />
                </div>
                <div class="w-full">
                    <label for="input-company">Company</label>
                    <input bind:value={company} 
                        name="company"
                        id="input-company" 
                        type="text" 
                        placeholder="Company / Job Poster"
                        class="w-full"
                    />
                </div>                
                <div class="w-full">
                    <label for="input-mode">Mode (optional)</label>
                    <input bind:value={mode} 
                        name="mode" 
                        id="input-mode" 
                        type="text" 
                        placeholder="Office / Remote / Hybrid / Other"
                        class="w-full"
                    />
                </div>
                <div class="w-full">
                    <label for="input-salary">Salary (optional)</label>
                    <input bind:value={salary} 
                        name="salary" 
                        id="input-salary" 
                        type="number"
                        placeholder="Annual salary" 
                        class="w-full"                        
                    />
                </div>
                <div class="w-full">
                    <label for="input-link">Link</label>
                    <input bind:value={link} 
                        name="link" 
                        id="input-link" 
                        type="url" 
                        placeholder="Link to job posting"
                        class="w-full"
                    />
                </div>
                <div class="w-full">
                    <label for="input-date">Date applied</label>
                    <input bind:value={appliedDate}
                        type="date"                         
                        name="input-date"                         
                        class="w-full"                    
                        max={new Date().toISOString().split('T')[0]}
                        min={new Date().getFullYear()}
                    />
                </div>
            </div> 
            <button type="submit" class="w-full h-full"> Apply here</button>
        </form>

<style>
    input::-webkit-calendar-picker-indicator{
        display: none;
    }
</style>
