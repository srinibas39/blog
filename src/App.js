
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PageAbout } from './pages/AboutPage';

import { Home } from './pages/Home';
import { Search } from './pages/Search';


const App = () => {
  return <>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/about" element={<PageAbout/>}/>
      </Routes>
    
  </>
}


export default App;