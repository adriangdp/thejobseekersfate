export enum applicationStates{
    Applied = "Applied",
    Rejected = "Rejected",
    Contacted = "Contacted"
}

export type Application = {
    id:number,
    status:applicationStates,
    position:string,
    company:string,
    mode?:string,
    salary:number,
    link:string,
}