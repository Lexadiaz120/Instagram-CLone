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
import { toast, ToastContainer } from "react-toastify";
import useFetch from "./hooks/useFetch";
import usePhotos from "./hooks/usePhotos";
import useUser from "./hooks/useUser";

function App() {
  const { photos, addPhoto } = usePhotos();
  const { user, loading, addAvatar } = useUser();
  console.log(user, "usuario");
  return (
    <div className="App">
      <BrowserRouter>
        <Header loading={loading} user={user} addPhoto={addPhoto} />
        <Routes>
          <Route path={"/login"} element={<LoginPage />}></Route>
          <Route path={"/register"} element={<RegisterForm />}></Route>
          <Route path={"/profile"} element={<ProfilePage />}></Route>
          <Route path={"/photos"} element={<PhotosPage photos={photos} />} />
          <Route path={"/photo/:id"} element={<PhotoPage />} />
          <Route path={"/gallery/:id"} element={<UserGallery />} />
          <Route
            path={"/profile/settings"}
            element={<UserSettings addAvatar={addAvatar} />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
