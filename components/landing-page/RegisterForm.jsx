import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import AuthContext from "../context/AuthContext";

// ---------- Yup Validation ---------- //

const schema = yup.object().shape({
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().min(3).max(15).required("Please enter your password"),
});

// ---------- RegisterForm Function ---------- //

//The register tab must hold a form with email address and password inputs.
//Submitting the form must validate the inputs and write the values to localStorage.

function RegisterForm() {
  //state variables
  const [submitting, setSubmitting] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  //context initialized
  const [auth, setAuth] = useContext(AuthContext);

  //links yup validation to form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //
  function onSubmit(data) {
    event.preventDefault();
    setSubmitting(true);
    setRegisterError(null);
    setAuth(data);
    console.log(data);
  }

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {registerError && <FormError>{registerError}</FormError>}
        <fieldset>
          <h4>Register your account here</h4>
          <div>
            <label>Enter your email below:</label>
            <input
              {...register("email")}
              email="email"
              type="email"
              placeholder="email"
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </div>

          <div>
            <label>Enter your password below:</label>
            <input
              {...register("password")}
              password="password"
              type="password"
              placeholder="password"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
          <button>Register Account</button>
          {/* <button className="exit__btn">Back</button> */}
        </fieldset>
      </form>
    </>
  );
}

export default RegisterForm;
