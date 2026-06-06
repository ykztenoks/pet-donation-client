import { Link } from "react-router-dom"

export default function Homepage() {
  return (
    <div className="text-2xl flex flex-col gap-4 justify-center items-center w-[99vw] h-[99vh]">
      <h1>WELCOME TO THE HOMEPAGE!</h1>
      <Link to={"/pets"} className="links">
        Go to pets 👍
      </Link>
    </div>
  )
}
