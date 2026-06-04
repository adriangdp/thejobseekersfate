<script lang="ts">
    import { type JobEntry, type JobStyle } from "@data/types"
    import BadgeStatus from "@lib/common/BadgeStatus.svelte";
    let { 
        application, 
        applied_date,
        jobStyle,
        showDetail = $bindable() 
    } : { 
        application: JobEntry,
        applied_date: Date | null,
        jobStyle: JobStyle,
        showDetail: boolean,
    } = $props(); 
    let { 
        id,
        status, 
        position, 
        company, 
        mode, 
        salary, 
        link
    } = $derived(application);
</script>

<tr onclick={()=>showDetail = true} class="cursor-pointer">
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40">
            <BadgeStatus status={status} />
        </td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40">{position}</td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40">{company}</td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40">{mode}</td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40">{salary}</td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40"><a href={link}> Offer site </a></td>
        <td class="border py-3 px-5 border-accent-outer text-sm md:text-base text-center min-w-40">
            {
                applied_date ?
                    `${applied_date.getDate().toString().padStart(2,"0")}/${(applied_date.getMonth() + 1).toString().padStart(2,"0")}/${applied_date.getFullYear()}`
                :
                    `No date`   
            }
        </td>
    </tr>