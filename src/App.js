import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { UserSettings } from "./components/UserSettings/UserSettings";
import PhotoPage from "./pages/PhotoPage/PhotoPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";
import UserGallery from "./components/UserGallery/UserGallery";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<PhotosPage />}></Route>
          <Route path={"/login"} element={<LoginPage />}></Route>
          <Route path={"/register"} element={<RegisterForm />}></Route>
          <Route path={"/profile"} element={<ProfilePage />}></Route>
          <Route path={"/photos"} element={<PhotosPage />} />
          <Route path={"/photo/:id"} element={<PhotoPage />} />
          <Route path={"/gallery/:id"} element={<UserGallery />} />
          <Route path={"/profile/settings"} element={<UserSettings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
