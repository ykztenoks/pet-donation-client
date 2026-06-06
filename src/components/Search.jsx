// import Select from "react-select/base"
import { useState, useEffect } from "react"
import { usePetContext } from "../context/Pet.context"

export default function Search() {
  const { pets, setPets } = usePetContext()
  const [backup, setBackup] = useState(null)
  const [isTyping, setIsTyping] = useState(false)
  // const [selectedOption, setSelectedOption] = useState(null)
  // const [isOpen, setIsOpen] = useState(false)
  // const [options, setOptions] = useState([])
  // const navigate = useNavigate()

  const handleChange = (e) => {
    setTimeout(() => {
      console.log("INSIDE TIMEOUT")
      setPets(
        backup.filter((pet) => {
          return `${pet.name.toLowerCase()} ${pet.breed.toLowerCase()} ${pet.species.toLowerCase()}`.includes(
            e.target.value.toLowerCase(),
          )
        }),
      )
    }, 1000)
  }

  useEffect(() => {
    !backup && setBackup(pets)
  }, [pets])
  // useEffect(() => {
  //   pets?.map((pet) => ({
  //     value: `${pet.id}`,
  //     label: pet.name,
  //   }))
  // }, [pets])

  return (
    <div>
      <input type="text" name="search" id="search" onChange={handleChange} />
    </div>
    // <Select
    //   defaultValue={{ value: "", label: "Search pet🐾" }}
    //   options={options}
    //   onChange={(e) => {
    //     navigate(`/pets/${e.value}`)
    //   }}
    //   onMenuOpen={() => setIsOpen(true)}
    //   onMenuClose={() => setIsOpen(false)}
    //   onInputChange={(e) => console.log("input change", e)}
    // />
  )
}
