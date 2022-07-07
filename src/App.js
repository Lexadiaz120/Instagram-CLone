import logo from "./logo.svg";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Header from "./components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { UserSettings } from "./components/UserSettings/UserSettings";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginPage />}></Route>
          <Route path={"/profile"} element={<ProfilePage />}></Route>
          <Route path={"/profile/settings"} element={<UserSettings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
