export type ReadOnlyDictionary<T> = {readonly [key:string]:T}

export type JobApplication = {
    id:number,
    status:JobState,
    position:string,
    company:string,
    mode:string,
    salary:string,
    link:string,
    appliedDate:Date,
}

export type JobData = {
    id:number,
    statusKey:string,
    position:string,
    company:string,
    mode:string,
    salary:string,
    link:string,
    appliedDate:Date,
}

export type JobState ={
    situation:string,
    figureName:string,
    icon:string,
    styles:{
        color:string,
        background:string,
        border:string,
        text:string,
        bgGradient:string
        badge:{
            border:string,
            background:string,
        }
    },
}

