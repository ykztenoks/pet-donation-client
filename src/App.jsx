import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import NotFound from "./pages/NotFound"
import PetPage from "./pages/PetPage"
import PetDetails from "./pages/PetDetails"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import CreatePet from "./pages/CreatePet"

function App() {
  return (
    <div className="min-h-screen bg-[#8884ff] text-[#D7BCE8]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pets" element={<PetPage />} />
        <Route path="/pets/new" element={<CreatePet />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
