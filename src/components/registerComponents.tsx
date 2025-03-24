"use client";
import { registerForm, schemaRegister } from "@/schemas/schemaRegister";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export const RegistroComponent = () => {
 

  const { register, handleSubmit, formState: { errors } } = useForm<registerForm>({resolver: zodResolver(schemaRegister)})

  return (
    <form onSubmit={(handleSubmit((data) => console.log(data)))}>
      <div>
        <label>Nome</label>
        <input
          {...register("name")}
          name="name"
          type="text"
        ></input>
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          {...register("email")}
          name="email"
          type="text"
        ></input>
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Senha</label>
        <input
          {...register("password")}
          name="password"
          type="password"
        ></input>
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button>Cadastrar</button>
    </form>
  );
};

