
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CardContainer } from './components/CardContainer/CardContainer';
import { Content } from './components/content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { SearchBox } from './components/SearchBox/SearchBox';
import { SearchContent } from './components/searchContent/SearchContent';
import { Home } from './pages/Home';
import { Search } from './pages/Search';


const App = () => {
  return <>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    
  </>
}


export default App;