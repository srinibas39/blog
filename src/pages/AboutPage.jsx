import { Header } from "../components/header/Header";
import { Footer } from "../components/Footer/Footer";
import { About } from "../components/About/About";
export const PageAbout = () => {
  return (
    <>
      <Header/>
      <About/>
      <div style={{height: "13vh"}}></div>
      <Footer />
    </>
  );
};
