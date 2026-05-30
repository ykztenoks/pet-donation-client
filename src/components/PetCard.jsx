import { Link } from "react-router-dom"

export default function PetCard({ pet }) {
  const { name, breed, age, gender, images, id } = pet

  const renderGenderIcon = (petGender) => {
    const normalizedGender = petGender?.toLowerCase()

    if (normalizedGender === "male") {
      return <span className="text-blue-500 font-bold text-lg ml-2">♂</span>
    }
    if (normalizedGender === "female") {
      return <span className="text-pink-500 font-bold text-lg ml-2">♀</span>
    }
    return null
  }

  const displayImage =
    images?.length > 0
      ? images[0]
      : "https://via.placeholder.com/400x300?text=No+Photo"

  return (
    <div className="w-[30vw] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="h-56 w-full overflow-hidden bg-gray-50">
        <img
          src={displayImage}
          alt={`Photo of ${name}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center">
            {name}
            {renderGenderIcon(gender)}
          </h3>
        </div>

        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800">Breed:</span>
            <span>{breed}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800">Age:</span>
            <span>
              {age?.value} {age?.unit}
            </span>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-50">
          <Link to={`/pets/${id}`}>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
