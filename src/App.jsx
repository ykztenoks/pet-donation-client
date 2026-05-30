import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import NotFound from "./pages/NotFound"
import PetPage from "./pages/PetPage"
import PetDetails from "./pages/PetDetails"
import About from "./pages/About"
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pets" element={<PetPage />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
