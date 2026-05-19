<script lang="ts">
    import type { enumJobStatus, JobEntry } from "@data/types";
    import { JobStyling } from "@data/jobStates";
    import BadgeStatus from "@lib/common/BadgeStatus.svelte";
    import BadgeStatusChanger from "@lib/common/BadgeStatusChanger.svelte";
    import DeleteJobApplication from "@lib/DeleteJobApplication.svelte";
    import Modal from "@lib/Modal.svelte";

    let  { isOpen = $bindable(), application } : {application: JobEntry, isOpen: boolean} = $props();
    let { 
        id,
        status, 
        position, 
        company, 
        mode, 
        salary, 
        link, 
        applied_date 
    } = $derived(application);
    let dateObject = $derived(applied_date ? new Date(applied_date) : null)
    let jobStyle = $derived(JobStyling[status]);

    let editableDate = $derived(applied_date ?? new Date().toISOString().split('T')[0] )
    let editableSalary = $derived.by(()=>{return isNaN(Number(salary)) ? null : Number(salary)})
    let editStatusFlag:boolean = $state(false);
    let editDataMode:boolean = $state(false)
    
    const handleModify = async(e:Event) =>{
        /*e.preventDefault();

        const formData = {
            statusKey: status.situation,
            position,
            company,
            mode,
            salary: editableSalary,
            link,
            appliedDate: new Date(editableDate)
        }
            const parseData = applicationSchema.safeParse(formData);

            if(parseData.success){
                await db.jobData.where("id").equals(id).modify(
                    {position:parseData.data.position}
                )
                await db.jobData.where("id").equals(id).modify(
                    {company:parseData.data.company}
                )
                await db.jobData.where("id").equals(id).modify(
                    {mode:parseData.data.mode}
                )
                await db.jobData.where("id").equals(id).modify(
                    {salary:parseData.data.salary}
                )
                await db.jobData.where("id").equals(id).modify(
                    {link:parseData.data.link}
                )
                await db.jobData.where("id").equals(id).modify(
                    {appliedDate:parseData.data.appliedDate}
                )
                editDataMode = false;
            }
            else{
               console.log(parseData.error.message)
            }*/
    }



</script>

<Modal bind:isOpen>
    <div class="flex flex-col">
        <div class="flex justify-between items-center gap-4 md:gap-6 w-full">
            <img src={jobStyle.icon} alt={`${status} icon status`} class="mx-auto mix-blend-color-dodge w-18 md:w-26 lg:w-22"/>
            <div>
                {#if !editDataMode}
                <span class="block font-rosarivo text-center text-wrap text-lg md:text-2xl lg:text-xl">{company}</span>              
                {:else}
                <input class="block font-rosarivo text-center text-wrap text-lg md:text-2xl lg:text-xl" bind:value={company}/>               
                {/if}
                <span class="block font-rosarivo text-text-darker text-center text-wrap text-lg md:text-2xl lg:text-xl">&#149;  {jobStyle.figureName}  &#149;</span>
            </div>
        </div>
        <div class="mt-12 flex flex-col gap-5 md:gap-6">
                <div>
                    <button class="button-invisible p-0 relative flex gap-2" onclick={()=>{editStatusFlag = !editStatusFlag}}>
                        <BadgeStatus status={status as enumJobStatus} />   
                        {#if editStatusFlag}
                            <BadgeStatusChanger id={id} state={status}></BadgeStatusChanger>
                        {/if}
                    </button>
                </div>                
                <div>
                    <img src="/img/icon-building.png" alt="work mode icon"  class="w-8 md:w-9 inline" />
                    {#if !editDataMode}
                    <span class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base">{position}</span>
                    {:else}
                    <input class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base" bind:value={position} />
                    {/if}
                </div>
                <div>
                    <img src="/img/icon-byhorse.png" alt="work mode icon"  class="w-8 md:w-9 inline" />
                    {#if !editDataMode}
                        <span class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base">{mode? `${mode}`:'Unkown'}</span>
                    {:else}
                        <input class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base" bind:value={mode} />
                    {/if}
                </div>
                <div>
                    <img src="/img/icon-coin.png" alt="salary icon"  class="w-8 md:w-9 inline" />
                    {#if !editDataMode}
                        <span class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base">
                            { 
                                salary ? Number(salary).toLocaleString('es-ES')+" €" : "unknown"
                            }
                        </span>
                    {:else}
                        <input type="number" class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base" bind:value={editableSalary} />
                    {/if}
                </div>
                <div>
                    <img src="/img/icon-calendar.png" alt="added date icon"  class="w-8 md:w-9 inline" />
                    {#if !editDataMode}
                        <span class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base">
                            {
                                dateObject ?
                                    `${dateObject.getDay().toString().padStart(2,"0")}/${dateObject.getMonth().toString().padStart(2,"0")}/${dateObject.getFullYear()}`
                                :
                                    `No date`  
                            }
                        </span>
                    {:else}
                        <input
                        class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base"
                        type="date"                         
                        name="input-date"                                          
                        max={new Date().toISOString().split('T')[0]}
                        min={new Date().getFullYear()}
                        bind:value={editableDate}
                    />
                    {/if}
                </div>
                <div>
                    <img src="/img/icon-link.png" alt="added date icon"  class="w-8 md:w-9 inline" />
                    {#if !editDataMode}
                        <a href={link} class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base">Link to offer</a>
                    {:else}
                        <input class="ml-2 md:ml-3 text-text-darker md:text-lg lg:text-base" value={link} />
                    {/if}
                </div>     
        </div>
        <div class="mt-12 w-full flex gap-3">
            {#if editDataMode == false}
            <button 
                class="grow flex items-center justify-center gap-1 w-1/2" 
                onclick={()=> editDataMode = true}
            >
                <img src="/img/icon-edit.png" 
                    class="w-[25px] h-[25px]" 
                    alt="edit button icon"
                />
                <span>
                    Edit
                </span> 
            </button>
            {:else}
            <button 
                class="grow flex items-center justify-center gap-1 w-1/2" 
                onclick={handleModify}
            >
                <img src="/img/icon-edit.png" 
                    class="w-[25px] h-[25px]" 
                    alt="apply changes button icon"
                />
                <span>
                    Apply changes
                </span> 
            </button>
            {/if}
            <DeleteJobApplication id={id} />           
        </div>

    </div>
</Modal>

<style>
    input::-webkit-calendar-picker-indicator{
        display: none;
    }
</style>