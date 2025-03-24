"use client";
import { useState } from "react";

type User = {
  name: string;
  email: string;
  password: string;
};

export const RegistroComponent = () => {
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const handleChangeFormData = (e: any) => {
    console.log(e);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    console.log(formData);
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <div>
        <label>Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChangeFormData}
        ></input>
      </div>

      <div>
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChangeFormData}
        ></input>
      </div>

      <div>
        <label>Senha</label>
        <input
          id="password"
          name="password"
          type="text"
          value={formData.password}
          onChange={handleChangeFormData}
        ></input>
      </div>

      <button onClick={handleSubmit}>Cadastrar</button>
      {/* </form> */}
    </div>
  );
};

//export default RegistroComponent();
