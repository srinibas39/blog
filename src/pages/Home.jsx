import { CardContainer } from "../components/CardContainer/CardContainer";
import { Content } from "../components/content/Content";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Content />
      <CardContainer />
      <Footer />
    </>
  );
};
