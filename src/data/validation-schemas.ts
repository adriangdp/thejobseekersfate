import { JobStates } from "@data/jobStates";
import { z } from "zod";


export const applicationSchema = z.object({
    statusKey: z.string("Missing application status"),
    position: z.string("Field is empty"),
    company: z.string("Field is empty"),
    mode: z.string("mode").default("unknown"),
    salary: z.number("salary").positive().transform(String).nullable().transform(val=>val?? "unknown"),
    link: z.url("Field is empty"),
    appliedDate: z.date()
})