import { z } from "zod"

export type registerForm = z.infer<typeof schemaRegister>;

export const schemaRegister = z.object({
  name: z.string().min(3, "O nome está inválido!"),
  email: z.string().email("E-mail inválido!"),
  password: z.string().min(8, "A senha tem que ter no mínimo 8 caracteres")
});
