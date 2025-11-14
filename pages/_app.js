import CustomCursor from "@/src/CustomCursor";
import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import FaroukHead from "@/src/FaroukHead";
import "@/public/css/devicon.min.css";
import "@/public/css/all.min.css";
import "@/public/css/bootstrap.min.css";
import "@/public/css/swiper-bundle.min.css";
import "@/public/css/animate.min.css";
import "@/public/css/jquery.mCustomScrollbar.min.css";
import "@/public/css/style.css";
import "@/public/css/styleswitcher.css";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <FaroukHead />
      <CustomCursor />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
