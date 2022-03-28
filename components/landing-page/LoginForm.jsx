import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../components/common/FormError";
//import { BASE_URL, TOKEN_PATH } from "../pages/api/api";
//import AuthContext from "../common/AuthContext";

//const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

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

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      history.push("/games");
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
              {...register("username")}
              name="username"
              type="username"
              placeholder="Username"
              type="username"
            />
            {errors.username && (
              <FormError>{errors.username.message}</FormError>
            )}
          </div>

          <div>
            <input
              {...register("password")}
              name="password"
              type="password"
              placeholder="Password"
              type="password"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
          <button type="submit">{submitting ? "Loggin in..." : "Login"}</button>
        </fieldset>
      </form>
    </>
  );
}

//=======================remove below when fixed! ======================================//

// import { useState, useContext } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
// import { useRouter } from "next/router";
// import FormError from "./common/FormError";
// import { BASE_URL, TOKEN_PATH } from "../pages/api/api";
// import AuthContext from "./common/AuthContext";
// import formStyles from "../styles/ContactForm.module.css";

// //url to make API call to
// const url = BASE_URL + TOKEN_PATH;
// console.log(url);

// //username: rune
// //password: 2xmw 7IMb qlEL TvQF M3KS YjQM

// // ========== Yup Validation ==========
// const schema = yup.object().shape({
// 	username: yup.string().required("Please enter username").min(3, "Username must be at least 3 characters"),
// 	password: yup.string().required("Please enter password"),
// });

// // ========== Login Function ==========

// //set initial states
// export default function LoginForm() {
// 	//const [auth] = useContext(AuthContext);
// 	const [submitting, setSubmitting] = useState(false);
// 	const [loginError, setLoginError] = useState(null);

// 	// if auth, push to admin page
// 	//const router = useRouter();

//   //if (auth) {
//   //  router.push("/admin");
//   //}

//   //implement yup validation
// 	const { register, handleSubmit, errors } = useForm({
// 		resolver: yupResolver(schema),
// 	});

// 	//const [, setAuth] = useContext(AuthContext);

// 	const url = BASE_URL + TOKEN_PATH;
// 	console.log(url);

//   //onsubmit useState set changes
// 	async function onSubmit(data) {
// 		setSubmitting(true);
// 		setLoginError(null);

// 		console.log(data);

//   // handle axios post request
// 		try {
// 			const response = await axios.post(url, data);
// 			console.log("response", response.data);
// 			setAuth(response.data);
// 			//router.back();
// 		} catch (error) {
// 			console.log("error", error);
// 			setLoginError(error.toString());
// 		} finally {
// 			setSubmitting(false);
// 		}
// 	}

//   //render form to handle initial input and submit + login button state change
// 	return (
// 		<>
// 			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
// 				{loginError && <FormError>{loginError}</FormError>}
// 				<fieldset disabled={submitting}>
// 					<div>
// 						<input
// 						{...register("username")}
// 						className={formStyles.input}
// 						type="username"
// 						name="username"
// 						placeholder="donald@duck.com"
// 						/>
// 						{errors.username && <FormError>{errors.username.message}</FormError>}
// 					</div>

// 					<div>
// 						<input
// 						{...register("password")}
// 						className={formStyles.input}
// 						type="password"
// 						name="password"
// 						placeholder="Passord"
// 						/>
// 						{errors.password && <FormError>{errors.password.message}</FormError>}
// 					</div>
// 					<button className={formStyles.btn}>{submitting ? "Logging in..." : "Login"}</button>
// 				</fieldset>
// 			</form>
// 		</>
// 	);
// }
