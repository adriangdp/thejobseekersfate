<script lang="ts">
    import  { applicationStates } from "@data/types";


    let {state}: {state:applicationStates} = $props()

    const labelColor = (border=false, background=false, text=false):string =>{

        const classes:string[] = []    
        const badgeColors = {
            "Applied" : ["border-card-pending/20", "bg-card-pending/20","text-card-pending"],
            "Rejected" : ["border-card-rejected/20", "bg-card-rejected/20","text-card-rejected"],
            "Contacted" : ["border-card-interview/20", "bg-card-interview/20","text-card-interview"]
        }

        if(border) classes.push(badgeColors[state][0])
        if(background) classes.push(badgeColors[state][1])
        if(text) classes.push(badgeColors[state][2])

        return classes.join(' ')
    }

</script>

<div class={`inline-flex items-center justify-center px-2 py-1 w-fit rounded-full border-2 brightness-200 ${labelColor(true,true,false)} `}>
    <p class={`${labelColor(false,false,true)} text-sm`}>{state}</p>
</div>