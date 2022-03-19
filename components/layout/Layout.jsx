import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main className="wrapper" className="background__video">
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
