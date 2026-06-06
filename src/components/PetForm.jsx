import { useEffect, useState } from "react"
import { usePetContext } from "../context/Pet.context"
export default function CreatePetForm({ petDetails, setIsEditting }) {
  const { createPet, updatePet } = usePetContext()
  const [petData, setPetData] = useState({
    name: "",
    species: "Dog",
    breed: "",
    age: { value: "", unit: "years" },
    gender: "Female",
    size: "Medium",
    images: [""],
    location: { city: "", state: "", postalCode: "" },
    healthInfo: {
      isVaccinated: false,
      isNeuteredOrSpayed: false,
      hasSpecialNeeds: false,
      medicalNotes: "",
    },
    behavior: {
      goodWithKids: false,
      goodWithOtherDogs: false,
      goodWithCats: false,
      energyLevel: "Medium",
    },
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setPetData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNestedChange = (category, field, value) => {
    setPetData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value,
      },
    }))
  }

  console.log(petDetails)
  useEffect(() => {
    if (petDetails) {
      setPetData(petDetails)
    }
  }, [petDetails])

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Add a Pet for Adoption
      </h2>

      <form
        className="space-y-8"
        onSubmit={(e) => {
          if (petDetails?.id) {
            updatePet(e, petDetails.id, petData, setIsEditting)
          } else {
            createPet(e, petData)
          }
        }}
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
            Basic Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={petData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Species
              </label>
              <select
                name="species"
                value={petData.species}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Breed
              </label>
              <input
                type="text"
                name="breed"
                value={petData.breed}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age Value
                </label>
                <input
                  type="number"
                  value={petData.age.value}
                  onChange={(e) =>
                    handleNestedChange("age", "value", e.target.value)
                  }
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unit
                </label>
                <select
                  value={petData.age.unit}
                  onChange={(e) =>
                    handleNestedChange("age", "unit", e.target.value)
                  }
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="years">Years</option>
                  <option value="months">Months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={petData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Size
              </label>
              <select
                name="size"
                value={petData.size}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- Location --- */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
            Location
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                value={petData.location.city}
                onChange={(e) =>
                  handleNestedChange("location", "city", e.target.value)
                }
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                value={petData.location.state}
                onChange={(e) =>
                  handleNestedChange("location", "state", e.target.value)
                }
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postal Code
              </label>
              <input
                type="text"
                value={petData.location.postalCode}
                onChange={(e) =>
                  handleNestedChange("location", "postalCode", e.target.value)
                }
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* --- Health & Behavior --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
              Health Info
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={petData.healthInfo.isVaccinated}
                  onChange={(e) =>
                    handleNestedChange(
                      "healthInfo",
                      "isVaccinated",
                      e.target.checked,
                    )
                  }
                  className="w-4 h-4 text-indigo-600 rounded"
                />
                <span className="text-sm text-gray-700">Vaccinated</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={petData.healthInfo.isNeuteredOrSpayed}
                  onChange={(e) =>
                    handleNestedChange(
                      "healthInfo",
                      "isNeuteredOrSpayed",
                      e.target.checked,
                    )
                  }
                  className="w-4 h-4 text-indigo-600 rounded"
                />
                <span className="text-sm text-gray-700">Spayed / Neutered</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={petData.healthInfo.hasSpecialNeeds}
                  onChange={(e) =>
                    handleNestedChange(
                      "healthInfo",
                      "hasSpecialNeeds",
                      e.target.checked,
                    )
                  }
                  className="w-4 h-4 text-indigo-600 rounded"
                />
                <span className="text-sm text-gray-700">Has Special Needs</span>
              </label>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 mt-3">
                  Medical Notes
                </label>
                <input
                  type="text"
                  value={petData.healthInfo.medicalNotes}
                  onChange={(e) =>
                    handleNestedChange(
                      "healthInfo",
                      "medicalNotes",
                      e.target.value,
                    )
                  }
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
              Behavior
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={petData.behavior.goodWithKids}
                  onChange={(e) =>
                    handleNestedChange(
                      "behavior",
                      "goodWithKids",
                      e.target.checked,
                    )
                  }
                  className="w-4 h-4 text-indigo-600 rounded"
                />
                <span className="text-sm text-gray-700">Good with Kids</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={petData.behavior.goodWithOtherDogs}
                  onChange={(e) =>
                    handleNestedChange(
                      "behavior",
                      "goodWithOtherDogs",
                      e.target.checked,
                    )
                  }
                  className="w-4 h-4 text-indigo-600 rounded"
                />
                <span className="text-sm text-gray-700">Good with Dogs</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={petData.behavior.goodWithCats}
                  onChange={(e) =>
                    handleNestedChange(
                      "behavior",
                      "goodWithCats",
                      e.target.checked,
                    )
                  }
                  className="w-4 h-4 text-indigo-600 rounded"
                />
                <span className="text-sm text-gray-700">Good with Cats</span>
              </label>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 mt-3">
                  Energy Level
                </label>
                <select
                  value={petData.behavior.energyLevel}
                  onChange={(e) =>
                    handleNestedChange(
                      "behavior",
                      "energyLevel",
                      e.target.value,
                    )
                  }
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
            Details
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="text"
                value={petData.images[0]}
                onChange={(e) =>
                  setPetData((prev) => ({ ...prev, images: [e.target.value] }))
                }
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={petData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
