import {describe, it, expect, expectTypeOf} from "vitest";
import type { JobPost } from "@data/types";
import { enumJobStatus } from "@data/enum";
import { applicationSchema } from "@data/validation-schemas";
import * as z from "zod";

describe("applicationSchema",()=>{
    it("Returns a strongly typed deep clone of the input", ()=>{
        const date = new Date();
        const mockData:JobPost = {
            status: enumJobStatus.applied,
            position: "Front End Developer",
            company: "The Company ltd",
            mode:"remote",
            salary:30000,
            link:"http://google.com",
            applied_date: date
        }

        const mock = applicationSchema.parse(mockData);

        expectTypeOf(mock).toEqualTypeOf<JobPost>()
        expect(mock).toMatchObject(mockData)
    }),
    it("Returns a Zod Error", ()=>{
        const date = new Date();
        const mockErrorData = {
            status: enumJobStatus.applied,
            position: undefined,
            company: "The Company ltd",
            mode:"remote",
            salary:30000,
            link:"http://google.com",
            applied_date: date.toISOString()
        }

        expect(() => applicationSchema.parse(mockErrorData)).toThrow(z.ZodError);
    }),
    it("Returns a deep copy of mockData where salary is unknown", ()=>{
        const date = new Date();
        const mockData:JobPost = {
            status: enumJobStatus.applied,
            position: "Front End Developer",
            company: "The Company ltd",
            mode:"remote",
            salary: undefined,
            link:"http://google.com",
            applied_date: date
        }

        const mock = applicationSchema.parse(mockData);

        expect(mock.salary).toBe(undefined)
    })
    
    
})