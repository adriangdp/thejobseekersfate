import type { Job, JobEntry } from "@data/types";
import { writable } from 'svelte/store';

let jobStore = $state<JobEntry[]>([])

export const jobData = {
    get values() {return jobStore},
    get length() {return jobStore.length},
    set (arr: JobEntry[]){jobStore = [...arr]},
    add (job: JobEntry) {jobStore = [job, ...jobStore]},
    update (job:JobEntry) { 
        const indexID = jobStore.findIndex((e:JobEntry) => 
            e.id === job.id            
        )
        jobStore[indexID] = {...job};
    },
    remove (id: number) { 
        jobStore = jobStore.filter((e:JobEntry) => e.id !== id)
    }
}
