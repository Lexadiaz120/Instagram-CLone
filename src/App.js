import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Header from "./components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { UserSettings } from "./components/UserSettings/UserSettings";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";
import PhotoPage from "./pages/PhotoPage/PhotoPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";
import UserGallery from "./components/UserGallery/UserGallery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path={"/"} element={<LoginPage />}></Route>
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
