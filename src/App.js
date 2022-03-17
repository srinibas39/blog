
import './App.css';
import { CardContainer } from './components/CardContainer/CardContainer';
import { Content } from './components/content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { SearchBox } from './components/SearchBox/SearchBox';
import { SearchContent } from './components/searchContent/SearchContent';


const App = () => {
  return <>
    <Header />
    <Content/>
    <CardContainer/>
    {/* <SearchContent />
    <SearchBox/>
    <div style={{minHeight:"46vh"}}></div> */}
    <Footer />
  </>
}


export default App;