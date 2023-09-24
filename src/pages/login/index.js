import { useState } from "react";
import { authUser } from "../../db/user";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  email: "",
  senha: "",
};

export const LoginPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      await authUser(formData.email, formData.senha);
      navigate("/main");
    } catch (e) {
      setErrorMessage("Usuário não cadastrado");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
          />
        </div>
        {errorMessage && <span className="error-message">{errorMessage}</span>}
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
};
