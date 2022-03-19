import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/header/Header"
import { SearchBox } from "../components/SearchBox/SearchBox"
import { SearchContent } from "../components/searchContent/SearchContent"

export const Search=()=>{
    return <>
      <Header/>
      <SearchContent />
      <SearchBox/>
      <div style={{ minHeight: "40.5vh" }}></div>
      <Footer /></>
}