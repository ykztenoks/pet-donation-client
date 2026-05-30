import { Link } from "react-router-dom"
import Search from "./Search"
import paw from "../assets/images/paw.png"
export default function Navbar() {
  return (
    <nav className="h-[12vh] flex mb-[5%] flex-row gap-2 justify-evenly bg-[#8884ff] text-[#D7BCE8] shadow-sm shadow-[#5D576B]/20">
      <Link to="/" className="center gap-8">
        <img
          src={paw}
          alt=""
          className="h-[10vh] self-center hover:-translate-y-0.5 transition-all duration-500"
        />
        <h2 className="text-hover">Opawtunity</h2>
      </Link>

      <div className="center gap-8">
        <Link to="/pets">
          <h2 className="text-hover">adopt a pet</h2>
        </Link>
        <Link to="/pets/new">
          <span className="text-hover">add new pet</span>
        </Link>
        <Search />
      </div>
    </nav>
  )
}
