// import { useContext } from "react"
// import { PetContext } from "../context/Pet.context"
import Loading from "../components/Loading"
import { usePetContext } from "../context/Pet.context"
import PetCard from "../components/PetCard"
export default function PetPage() {
  // const {pets} = useContext(PetContext)
  const { pets } = usePetContext()

  return (
    <div className="center flex-wrap gap-5">
      {pets ? (
        pets.map((pet) => <PetCard pet={pet} key={pet.id} />)
      ) : (
        <Loading />
      )}
    </div>
  )
}
