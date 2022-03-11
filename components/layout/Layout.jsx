import { Fragment } from "react";
import MainHeader from "./MainHeader";
// import Footer from "./Footer";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main className="wrapper">{props.children}</main>
      {/* <Footer /> */}
    </Fragment>
  );
}

export default Layout;
