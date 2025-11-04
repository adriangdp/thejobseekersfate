import Dexie, {type EntityTable} from 'dexie'
import type { Application } from './types'

/* 
    *db is a IndexedDB storage that can be referenced as any other object. 
    *It will contain a table that will accept a type as defined below and an 'id'(after&)
*/
const db = new Dexie('applications') as Dexie & {
    application:EntityTable<Application,"id">
}



db.version(1).stores({
    application:'++id, status, position, company, mode, salary, link'
})

const clearTable = () =>{
    db.application.clear()
}

export { db, clearTable }