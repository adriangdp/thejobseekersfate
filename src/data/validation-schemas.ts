import { z } from "zod";


export const applicationSchema = z.object({
    statusKey: z.string("Missing application status"),
    position: z.string("Field is empty").nullable(),
    company: z.string("Field is empty"),
    mode: z.string("mode").default("unknown").nullable(),
    salary: z.number("salary").positive().transform(String).nullable().transform(val=>val?? "unknown"),
    link: z.url("Field is empty").nullable(),
    notes:z.string("No notes").nullable(),
    appliedDate: z.date().nullable()
})