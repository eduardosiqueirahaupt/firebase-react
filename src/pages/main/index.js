import { useEffect, useState } from "react";
import { getUserLogged } from "../../db/user";
import { useFirebaseContext } from "../../context/firebaseContext";

const initialUserData = {
  email: "",
  senha: "",
  nome: "",
  sobrenome: "",
  dataNascimento: "",
};

export const MainPage = () => {
  const [userData, setUserData] = useState(initialUserData);
  const { db } = useFirebaseContext();

  const loadPage = async () => {
    const userLogged = await getUserLogged(db);
    setUserData(userLogged);
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <div>
      {console.log('process.env.REACT_APP_LINK_API', process.env.REACT_APP_NOME_DA_VARIAVEL)}
      <h1>Página de Exibição de Dados</h1>
      <p>
        <strong>E-mail:</strong> {userData?.email}
      </p>
      <p>
        <strong>Nome:</strong> {userData?.nome}
      </p>
      <p>
        <strong>Sobrenome:</strong> {userData?.sobrenome}
      </p>
      <p>
        <strong>Data de Nascimento:</strong> {userData?.dataNascimento}
      </p>
    </div>
  );
};
