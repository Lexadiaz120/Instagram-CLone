import "./ErrorMessage.css";

const ErrorMessage = ({ error }) => {
  return <p className="error_message">{error}</p>;
};

export default ErrorMessage;
