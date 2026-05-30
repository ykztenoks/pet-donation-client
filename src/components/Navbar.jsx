import { Link } from "react-router-dom"
import Search from "./Search"
export default function Navbar() {
  return (
    <nav className="flex flex-row gap-2 justify-evenly bg-amber-600">
      <div className="center">
        <img
          src="https://icon2.cleanpng.com/20180218/aoq/avgki9qja.webp"
          alt=""
          className="h-[10vh]"
        />

        <h2>adopt a pet</h2>
      </div>
      <div className="center gap-8">
        <Link>
          <span>pets</span>
        </Link>
        <Link>
          <span>add new pet</span>
        </Link>
        <Search />
      </div>
    </nav>
  )
}
