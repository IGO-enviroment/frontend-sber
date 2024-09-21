import { z } from 'zod';

export const studentInvatationFormSchema = z.object({
  universityId: z.number(),
  students: z.array(
    z.object({
      email: z.string().optional(),
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      middleName: z.string().optional(),
      phoneNumber: z.string().optional(),
}))}) 

export type StudentInvatationFormSchema = z.infer<typeof studentInvatationFormSchema>;