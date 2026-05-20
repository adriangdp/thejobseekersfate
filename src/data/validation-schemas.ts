import { z } from "zod";
import { enumJobStatus } from "@data/enum";

export const applicationSchema = z.object({
    status: z.enum(Object.values(enumJobStatus) as string[], {error: "Invalid status"}),
    position: z.string().optional(),
    company: z.string().min(1,{error:"Company is empty"}),
    mode: z.string().optional(),
    salary: z.number().positive({error:"Salary must be positive or empty"}).optional(),
    link: z.preprocess(val => val === "" ? undefined: val, z.url().optional()),
    notes:z.string().optional(),
    applied_date: z.date().optional()
})