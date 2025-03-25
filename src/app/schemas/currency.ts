import { z } from 'zod'

// Schema for inserting products
export const insertProjectSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters').max(50),
  description: z
    .string()
    .min(3, 'Description must be at least 3 characters')
    .max(100)
    .optional()
})
