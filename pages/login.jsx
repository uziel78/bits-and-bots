import Meta from "../components/common/Meta";
import Header from "../components/layout/Header";
import LoginForm from "../components/landing-page/LoginForm";

function LoginPage() {
  return (
    <>
      <Meta title="Bits & Bits Login" />
      <Header content="Login" />
      <LoginForm />
    </>
  );
}

export default LoginPage;
