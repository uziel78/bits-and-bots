import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { TOKEN_PATH } from "../../pages/api/api";
import AuthContext from "../context/AuthContext";

const schema = yup.object().shape({
  email: yup.string().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const [auth, setAuth] = useContext(AuthContext);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);
    const url = TOKEN_PATH;

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
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
        <fieldset>
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
          <button type="submit">Login</button>
        </fieldset>
      </form>
    </>
  );
}
