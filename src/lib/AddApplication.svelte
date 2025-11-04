<script lang="ts">
    import { db } from "../data/db"
    import { applicationSchema } from "../data/validation-schemas"

    const handleNewApplication = async(event:SubmitEvent) =>{
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)

        try{
            const data = Object.fromEntries(formData.entries())
            console.log(data)
            const validateData = applicationSchema.parse(data)
            const id = await db.application.add(validateData)

            console.log(`Created entry with id ${id}`)
            console.log(validateData)
            form.reset()
        } catch(error){
            console.log(error)
        }
    }

</script>
<form on:submit={handleNewApplication}>
    <div class="flex m-5">
        <div>
            <label for="input-status">Status</label>
            <input name="status" id="input-status" type="number" />
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
