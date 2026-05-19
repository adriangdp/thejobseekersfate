export enum enumJobStatus {
    offer = "offer", 
    applied = "applied", 
    rejected = "rejected", 
    interview = "interview", 
    ghosted = "ghosted",
    accepted = "accepted"
};

/*export type JobState = 
    enumJobStatus.offer |
    enumJobStatus.applied |
    enumJobStatus.rejected | 
    enumJobStatus.interview | 
    enumJobStatus.ghosted |
    enumJobStatus.accepted 
*/

export type JobStylingDictionary={
    [key in enumJobStatus]:JobStyle
}

export type JobStyle ={
    state:enumJobStatus,
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

export type Job = {
    status: enumJobStatus,
    position?: string,
    company: string,
    mode?: string,
    salary?: number,
    link?: string,
    notes?: string,
    applied_date?: string
}

export type JobEntry = Job & {
    id:number;
}


