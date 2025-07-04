import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/Home";
import { SignUpPage } from "./pages/Cadastro";
import { SignInPage } from "./pages/Login";
import { FeedPage } from "./pages/Feed";
import { UploadPage } from "./pages/Upload";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/upload" element={<UploadPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
