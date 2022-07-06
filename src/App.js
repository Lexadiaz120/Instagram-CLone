import logo from "./logo.svg";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginPage />}></Route>
          <Route path={"/profile"} element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
