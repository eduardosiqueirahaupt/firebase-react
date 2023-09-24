import { FirebaseProvider } from "./context/firebaseContext";
import AppRouter from "./router";
import "./App.css";

function App() {
  return (
    <FirebaseProvider>
      <AppRouter />
    </FirebaseProvider>
  );
}

export default App;
