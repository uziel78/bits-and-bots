import { useState } from "react";
import Button from "../common/Button";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Backdrop from "../common/Backdrop";
import styles from "./UserModals.module.scss";

// function that renders and handles interactions with the  Register & Login buttons
const UserModals = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [backdropIsActive, setBackdropIsActive] = useState(false);
  const [userModals, setUserModals] = useState(true);

  //handle function for Register Button (stacking issue with backdrop needs)
  function OpenRegisterField() {
    setRegisterModal(true);
    setBackdropIsActive(true);
    setUserModals(false);
  }

  //handle function for Login button (stacking issue with backdrop needs resolving)
  function OpenLoginField() {
    setLoginModal(true);
    setBackdropIsActive(true);
    setUserModals(false);
  }

  //function that handles clicks on the backdrop so that forms are removed,
  // backdrop is removed, and userModals are returned
  function CloseForms() {
    setBackdropIsActive(false);
    setRegisterModal(false);
    setLoginModal(false);
    setUserModals(true);
  }

  //content to be conditionally rendered
  return (
    <>
      <div className={styles.btn__modal}>
        {userModals ? (
          <div>
            <div>
              <Button type="button" onClick={OpenRegisterField}>
                Register
              </Button>
            </div>
            <div>
              <Button type="button" onClick={OpenLoginField}>
                Login
              </Button>
            </div>
          </div>
        ) : null}
        {/* conditionally render modals on button clicks */}
        {registerModal ? <RegisterForm /> : null}
        {loginModal ? <LoginForm /> : null}
        {backdropIsActive ? <Backdrop onClickOutside={CloseForms} /> : null}
      </div>
    </>
  );
};

export default UserModals;
