import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { TOKEN_PATH } from "../../pages/api/api";
import AuthContext from "../context/AuthContext";

// ---------- yup validation ---------- //
const schema = yup.object().shape({
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});

// ---------- Login Form Function ---------- //

//The login tab form must also contain email and password inputs and on submit check the
// values against those stored in localStorage. If the values match, the user will be
//redirected to the browse page, otherwise an “Incorrect username or password”
//message must be displayed.

export default function LoginForm() {
  //state variables
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

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

  async function onSubmit(data) {
    event.preventDefault();
    setSubmitting(true);
    setLoginError(null);

    //check if email & password in localStorage = login input values
    //if yes, push to games, if not, error message

    console.log(data);

    const url = TOKEN_PATH;

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      //setAuth(response.data);
      router.push("/games");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input
              {...register("email")}
              name="email"
              type="email"
              placeholder="email"
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </div>

          <div>
            <input
              {...register("password")}
              name="password"
              type="password"
              placeholder="password"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
          <button>{submitting ? "Login In..." : "Login"}</button>
        </fieldset>
      </form>
    </>
  );
}
