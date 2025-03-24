export function Login() {
  return (
    <div>
      <h1>Login</h1>

      <form>
        <div>
          <label>Email: </label>
          <input type="email" placeholder="Digite seu email" />

          <label>Senha:</label>
          <input type="password" placeholder="Digite sua senha" />
        </div>
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}
