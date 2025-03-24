import { z } from "zod";

export type loginType = z.infer<typeof loginSchema>

export const loginSchema = z.object({
  name: z.string(),
  email: z.string().email('E-mail Inválido'),
  password: z.string().min(8 , {message: 'A senha deve ter no mínimo 8 caracteres'}), 
})

