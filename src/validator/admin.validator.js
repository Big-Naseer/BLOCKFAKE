import {z} from "zod";

// export const updateValidator = z.object({
//     name: z.string().min({message: "invalid name"}).max(24),
//     email: z.string().email({ message:"input a valid email"}),
//     password: z.object().min(8).max(24).trim()

// })
export const updateValidator = z.object({
    name: z.string().min(1, { message: "Name must be at least 1 character long" }).max(24, { message: "Name cannot exceed 24 characters" }),
    email: z.string().email({ message: "Please provide a valid email" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }).max(24, { message: "Password cannot exceed 24 characters" }).trim()
});

export const loginValidator = z.object({
    email: z.string().email({message: "input a valid email"}),
    password: z.string().min(8).max(24).trim()
});