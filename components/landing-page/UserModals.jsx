

function Modals() {
  return (
    <div>Modals</div>
  )
}

export default Modals;






//login page

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

// register page

import Meta from "../components/common/Meta";
import Header from "../components/layout/Header";
// import RegisterForm component

function RegisterPage() {
  return (
    <>
      <Meta title="Bits & Bits Register Form" />
      <Header content="Register" />
      {/* <div>Register Form</div> */}
    </>
  );
}

export default RegisterPage;