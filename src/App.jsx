import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/Home";
import { SignUpPage } from "./pages/Cadastro";
import { SignInPage } from "./pages/Login";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
