import Dexie, {type EntityTable} from 'dexie'
import type { JobData } from './types'

/* 
    *db is a IndexedDB storage that can be referenced as any other object. 
    *It will contain a table that will accept a type as defined below and an 'id'(after&)
*/
const db = new Dexie('JobApplications') as Dexie & {
    jobData:EntityTable<JobData,"id">
}



db.version(1).stores({
    jobData:'++id, status, position, company, mode, salary, link, date'
})

const clearTable = () =>{
    db.jobData.clear()
}

export { db, clearTable }