import { z } from 'zod';

export const loginFormSchema = z.object({
    email: z.string().min(1, { message: 'Почта обязательна' }).email({
        message: 'Невалидная почта',
    }),
    password: z.string().min(2, { message: 'Минимум 2 символа' }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
