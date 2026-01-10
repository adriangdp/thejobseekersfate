import { flushSync } from "svelte";
import {describe, it, expect} from "vitest";
import { applicationSchema } from "@data/validation-schemas";
import type { JobApplication } from "@data/types";
import * as z from "zod";

describe("applicationSchema",()=>{
    it("Returns a strongly typed deep clone of the input", ()=>{
        const date = new Date();
        const mockData = {
            statusKey: "Applied",
            position: "Front End Developer",
            company: "The Company ltd",
            mode:"remote",
            salary:30000,
            link:"http://google.com",
            appliedDate: date
        }

        const mock = applicationSchema.parse(mockData);

        expect(mock).toMatchObject(mockData)
    }),
    it("Returns a Zod Error", ()=>{
        const date = new Date();
        const mockErrorData = {
            statusKey: "Applied",
            position: null,
            company: "The Company ltd",
            mode:"remote",
            salary:"30000",
            link:"http://google.com",
            appliedDate: date.toISOString()
        }

        expect(() => applicationSchema.parse(mockErrorData)).toThrow(z.ZodError);
    })
})