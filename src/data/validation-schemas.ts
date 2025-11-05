import { z } from "zod";
import { applicationStates } from "@data/types";

export const applicationSchema = z.object({
    status: z.enum(applicationStates),
    position: z.string().min(1,"Application position needed"),
    company: z.string().min(1,"Company name needed"),
    mode: z.string().default("unknown"),
    salary: z.coerce.number().min(0,"Must be a positive number").default(0),
    link: z.url("Need a valid url for the website were the application was made")
})