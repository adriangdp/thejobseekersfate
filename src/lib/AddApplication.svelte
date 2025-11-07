<script lang="ts">
    import { db } from "@data/db"
    import { applicationSchema } from "@data/validation-schemas"
    import { applicationStates } from "@data/types"
    import cardRejected from "/card-rejected.svg"
    import cardApplied from "/card-applied.svg"
    import cardContacted from "/card-contacted.svg"

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
        formData.set('date', new Date().toISOString())
        console.log(selectedStatus)

        try{
            const data = Object.fromEntries(formData.entries())
            console.log(data)
            const validateData = applicationSchema.parse(data)
            const id = await db.application.add(validateData)

            console.log(`Created entry with id ${id}`)
            console.log(validateData)
            form.reset()
            selectedStatus = applicationStates.Applied
        } catch(error){
            console.log(error)
        }
    }

</script>
<form onsubmit={handleNewApplication}>
    <div class="flex items-center gap-1 m-5">
        <div>
            <label for="input-status">Status</label>
            <div class="flex justify-center items-center gap-2 mt-3">
                {#each statusOptions as option}
                <div class="w-1/3">
                    <button 
                        onclick={()=> selectedStatus = option.value}
                        title={`option_${option.label}`}
                        type="button"
                    >
                        <img src={option.image} alt={`Status icon: ${option.label}`} class="w-full h-auto"/>
                    </button>
                    <label for={`option_${option.label}`}>{option.label}</label>
                </div>                
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
