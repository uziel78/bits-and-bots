import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import UserModals from "./UserModals";
import AuthContext from "../context/AuthContext";

// ---------- yup validation ---------- //
const schema = yup.object().shape({
  email: yup.string().email().required("Please enter your email above"),
  password: yup.string().required("Please enter your password above"),
});

// ---------- Login Form Function ---------- //

//The login tab form must also contain email and password inputs and on submit check the
// values against those stored in localStorage. If the values match, the user will be
//redirected to the browse page, otherwise an “Incorrect username or password”
//message must be displayed.

const LoginForm = () => {
  //state variables
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [loginForm, setLoginForm] = useState(true);
  const [userModals, setUserModals] = useState(false);

  //context & routing initialized
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();

  //links yup validation to the form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //check if email & password in localStorage = login input values
  //if yes, push to API call browse page, if not, error message

  function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    //data must match auth object and neither can be null for login to be successful
    // not that it technically can be null due to the register yup validation
    if (JSON.stringify(data) === JSON.stringify(auth) && data !== null) {
      router.push("/games");
      //console.log(data, auth);
    } else {
      setLoginError(true);
      console.log("failed password match");
    }
  }

  //function that handles the cancel button on register form
  function exitHandler() {
    setLoginForm(false);
    setUserModals(true);
    setLoginError(null);
  }
  // conditionally render login form
  return (
    <>
      {loginForm ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Please Log In</h2>
          {loginError && (
            <FormError>{"Incorrect username or password"}</FormError>
          )}
          <fieldset disabled={submitting}>
            <h4>Login here</h4>
            <div>
              <label>Enter your email below:</label>
              <input
                {...register("email")}
                email="email"
                type="email"
                placeholder="Enter your email here..."
                autoComplete="off"
              />
              {errors.email && (
                <FormError>| {errors.email.message} |</FormError>
              )}
            </div>

            <div>
              <label>Enter your password below:</label>
              <input
                {...register("password")}
                password="password"
                type="password"
                placeholder="Enter your password here..."
                autoComplete="off"
              />
              {errors.password && (
                <FormError>| {errors.password.message} |</FormError>
              )}
            </div>
            <div>
              <button type="submit" disabled={submitting}>
                {submitting ? "Logging In..." : "Login"}
              </button>
              <button
                type="button"
                className="exit__btn--right"
                onClick={exitHandler}
              >
                Back
              </button>
            </div>
          </fieldset>
        </form>
      ) : null}
      {userModals ? <UserModals /> : null}
    </>
  );
};

export default LoginForm;
