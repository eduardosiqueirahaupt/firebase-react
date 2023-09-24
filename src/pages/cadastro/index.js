import { useState } from "react";
import { useFirebaseContext } from "../../context/firebaseContext";
import { addUser } from "../../db/user";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  email: "",
  senha: "",
  nome: "",
  sobrenome: "",
  dataNascimento: "",
};

function CadastroPage() {
  const { db } = useFirebaseContext();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCadastro = async () => {
    try {
      await addUser(db, formData);
      navigate("/login");
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
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
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sobrenome">Sobrenome:</label>
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
          />
        </div>
        {errorMessage && <span className="error-message">{errorMessage}</span>}
        <button type="button" onClick={handleCadastro}>
          Salvar
        </button>
      </form>
    </div>
  );
}

export default CadastroPage;
