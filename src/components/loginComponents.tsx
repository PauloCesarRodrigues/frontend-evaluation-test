import { loginSchema, type loginType } from "@/schemas/schemaLogin";
import type { registerForm } from "@/schemas/schemaRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function Login() {

  const {register, formState:{errors, isLoading}, handleSubmit} = useForm<registerForm>({
    resolver: zodResolver(loginSchema)
  })

  function handleLogin(LoginData: loginType){
    /*const response = fetch('',{
    })*/

    console.log(LoginData)
  }


  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label>name: </label>
          <input type="text" placeholder="Digite seu nome" {...register('name')}/>
          {errors.name &&(
            <p>{errors.name.message}</p>
          )}

          <label>Email: </label>
          <input type="email" placeholder="Digite seu email" {...register('email')}/>
          {errors.email &&(
            <p>{errors.email.message}</p>
          )}

          <label>Senha:</label>
          <input type="password" placeholder="Digite sua senha" {...register('password')}/>
          {errors.password &&(
            <p>{errors.password.message}</p>
          )}
        </div>
        <div>
          <button type="submit" disabled={isLoading}>Entrar</button>
        </div>
      </form>
    </div>
  );
}
