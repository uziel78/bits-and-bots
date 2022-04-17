import { useState } from "react";
import Button from "../common/Button";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import styles from "./UserModals.module.scss";

const UserModals = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
      <div className={styles.btn__modal}>
        <div>
          <Button type="button" onClick={() => setRegisterModal(true)}>
            Register
          </Button>
        </div>
        <div>
          <Button type="button" onClick={() => setLoginModal(true)}>
            Login
          </Button>
        </div>
        {/* conditionally render modals on button clicks */}
        {registerModal ? <RegisterForm /> : null}
        {loginModal ? <LoginForm /> : null}
        {/* close modal with button by resetting setRegisterModal(false) again on onClick */}
      </div>
    </>
  );
};

export default UserModals;
