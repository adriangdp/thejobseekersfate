import { JobStates } from "@data/jobStates";
import { z } from "zod";


export const applicationSchema = z.object({
    statusKey: z.string(),
    position: z.string().min(1,"Application position needed"),
    company: z.string().min(1,"Company name needed"),
    mode: z.string().default("unknown"),
    salary: z.coerce.number().min(0,"Must be a positive number").default(0),
    link: z.url("Need a valid url for the website were the application was made"),
    appliedDate: z.coerce.date()
})