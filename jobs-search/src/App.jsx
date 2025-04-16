import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MainSearch from "./components/MainSearch"
import CompanySearchResults from "./components/CompanySearchResults"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Preferiti from "./components/Preferiti"
import PrefeIndicator from "./components/PrefeIndicator"

function App() {
  return (
    <BrowserRouter>
      <PrefeIndicator />
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/preferiti" element={<Preferiti />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
