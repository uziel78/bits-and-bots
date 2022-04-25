import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import UserModals from "./UserModals";
//import Backdrop from "../common/Backdrop";
import FormError from "../common/FormError";
import AuthContext from "../context/AuthContext";

// ---------- Yup Validation ---------- //

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(/^(?=.{6,})/, "Must Contain minimum 6 Characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Must Contain One Uppercase and One Lowercase Letter"
    )
    .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number"),
  // passwordConfirmation: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "Passwords must match"),
});

// ---------- RegisterForm Function ---------- //

// function that renders and handles the Register Form component
function RegisterForm() {
  //state variables
  const [submitting, setSubmitting] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const [registerForm, setRegisterForm] = useState(true);
  const [userModals, setUserModals] = useState(false);
  //const [backdropIsActive, setBackdropIsActive] = useState(false);

  //context initialized for localStorage
  const [auth, setAuth] = useContext(AuthContext);

  //links yup validation above to form rendered below
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //function that handles the submit
  function onSubmit(data) {
    setSubmitting(true);
    setRegisterError(null);
    setRegisterError("Successfully Registered! -Hooray...");
    setAuth(data);
    setRegisterForm(false);
    setUserModals(true);
    //setBackdropIsActive(false);
    console.log(data);
  }

  //function that handles the cancel button on register form
  function exitHandler() {
    setUserModals(true);
    setRegisterForm(false);
    setRegisterError(null);
    setAuth(null);
    console.log("exit");
  }

  console.log(errors);

  // conditionally renders the Register Form and inputs
  return (
    <>
      {registerForm ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Register</h2>
          {registerError && <FormError>{registerError}</FormError>}
          <fieldset>
            <h4>Register your account here</h4>
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
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <p className="terms">
              By pressing Submit above, you are agreeing to the{" "}
              <span className="terms__link">terms of service</span>.
            </p>
            <br />
            <div>
              <p className="registered">Already Registered?</p>
              <button type="button" className="exit__btn" onClick={exitHandler}>
                Cancel
              </button>
            </div>
          </fieldset>
        </form>
      ) : null}
      {userModals ? <UserModals /> : null}
      {/* {backdropIsActive ? <Backdrop /> : null} */}
    </>
  );
}

export default RegisterForm;
