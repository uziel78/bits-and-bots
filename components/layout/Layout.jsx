import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main className="wrapper">{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
