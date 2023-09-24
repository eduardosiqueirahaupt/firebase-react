import { useState } from "react";
import Firebase from "./service/firebase";

const authOptions = {
  notAuthenticate: 1,
  authenticate: 2,
};

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(null);

  const validateLogin = (e) => {
    e.preventDefault();
    if (email === "eduardo.haupt@pucpr.br" && password === "123456") {
      setIsLogged(authOptions.authenticate);
    } else {
      setIsLogged(authOptions.notAuthenticate);
    }
  };

  return (
    <form style={{ margin: "25px" }} onSubmit={validateLogin}>
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <br />
        <input onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button>Acessar</button>
      </div>
      {isLogged && (
        <span>
          {isLogged === authOptions.authenticate
            ? "Acesso com sucesso!"
            : "Usuário ou senha incorretos!"}
        </span>
      )}
    </form>
  );
}

export default App;
