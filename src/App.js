
import './App.css';
import { CardContainer } from './components/CardContainer/CardContainer';
import { Content } from './components/content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';


 const App=()=>{
  return <>
  <Header/>
  <Content/>
  <CardContainer/>
  <Footer/>
  </>
}


export default App;