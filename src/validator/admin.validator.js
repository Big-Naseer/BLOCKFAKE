import {z} from "zod";

export const updateValidator = z.object({
    name: z.string().min({message: "invalid name"}).max(24),
    email: z.string().email({ message:"input a valid email"}),
    password: z.object().min(8).max(24).trim()

})

export const loginValidator = z.object({
    email: z.string().email({message: "input a valid email"}),
    password: z.string().min(8).max(24).trim()
});