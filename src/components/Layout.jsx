import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar currLocation={props.currLocation} />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
