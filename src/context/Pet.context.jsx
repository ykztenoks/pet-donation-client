import { createContext, useContext, useEffect, useState } from "react"
import api from "../lib/api"
import { useNavigate } from "react-router-dom"

const PetContext = createContext()

export default function PetProvider({ children }) {
  const [pets, setPets] = useState(null)
  const navigate = useNavigate()
  const getPets = async () => {
    try {
      const response = await api.get("/pets")
      console.log(response.data)
      setPets(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getPet = async (id) => {
    try {
      const response = await api.get(`/pets/${id}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const createPet = async (e, body) => {
    e.preventDefault()
    try {
      const response = await api.post("/pets", body)
      if (response.status === 200 || response.status === 201) {
        getPets()
        navigate("/pets")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const updatePet = async (id, body) => {
    try {
      const response = await api.patch(`/pets/${id}`, body)
    } catch (error) {
      console.log(error)
    }
  }

  const deletePet = async (id) => {
    try {
      const response = await api.delete(`/pets/${id}`)
      if (response.status === 200) {
        getPets()
        navigate("/pets")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPets()
  }, [])

  return (
    <PetContext.Provider
      value={{ pets, getPets, getPet, createPet, updatePet, deletePet }}
    >
      {children}
    </PetContext.Provider>
  )
}

function usePetContext() {
  const context = useContext(PetContext)
  if (!context) {
    return
  }
  return context
}
export { PetContext, usePetContext }
