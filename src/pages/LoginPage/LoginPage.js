import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <>
      <div className="login-page-container">
        <div className="login-page-image">
          <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"></img>
        </div>
        <LoginForm />
      </div>
    </>
  );
};
