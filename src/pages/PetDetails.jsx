import { useEffect, useState } from "react"
import { usePetContext } from "../context/Pet.context"
import Loading from "../components/Loading"
import { useParams } from "react-router-dom"
import CreatePetForm from "../components/PetForm"

const PetDetailPage = () => {
  const [petDetails, setPetDetails] = useState(null)
  const [newComment, setNewComment] = useState({
    author: "",
    petId: "",
    comment: "",
  })
  const [isEditting, setIsEditting] = useState(false)
  const { id } = useParams()
  const { pets, deletePet, addComment } = usePetContext()

  useEffect(() => {
    const pet = pets?.find((pet) => pet.id === id)
    setPetDetails(pet)
  }, [id, pets])

  const renderGenderIcon = (petGender) => {
    const normalized = petGender?.toLowerCase()
    if (normalized === "male")
      return <span className="text-blue-500 ml-2 text-2xl">♂</span>
    if (normalized === "female")
      return <span className="text-pink-500 ml-2 text-2xl">♀</span>
    return null
  }

  // const handleCommentSubmit = (e) => {
  //   // e.preventDefault()
  //   // if (!newComment.trim()) return
  //   // const newCommentObj = {
  //   //   id: `temp_${Date.now()}`,
  //   //   petId: pet.id,
  //   //   authorName: authorName.trim() || "Anonymous",
  //   //   text: newComment,
  //   //   createdAt: new Date().toISOString(),
  //   // }
  //   // setComments([...comments, newCommentObj])
  //   // setNewComment("")
  //   // setAuthorName("")
  // }
  if (!petDetails) return <Loading />
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm h-96">
          <img
            src={
              petDetails.images?.length > 0
                ? petDetails.images[0]
                : "https://via.placeholder.com/600x400?text=No+Photo"
            }
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-4xl font-bold text-gray-900 flex items-center">
              {petDetails.name} {renderGenderIcon(petDetails.gender)}
            </h1>
            <span
              className={`px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide ${
                petDetails.status === "Available"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {status}
            </span>
          </div>

          <div className="text-lg text-gray-600 mb-6 font-medium">
            {petDetails.breed} • {petDetails.age?.value} {petDetails.age?.unit}
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            {petDetails.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-3">
                Health & Care
              </h3>
              <ul className="text-sm text-gray-700 space-y-2 flex flex-col">
                <li>
                  {petDetails.healthInfo?.isVaccinated
                    ? "✅ Vaccinated"
                    : "❌ Needs Vaccines"}
                </li>
                <li>
                  {petDetails.healthInfo?.isNeuteredOrSpayed
                    ? "✅ Spayed/Neutered"
                    : "❌ Intact"}
                </li>
                {petDetails.healthInfo?.hasSpecialNeeds && (
                  <li className="text-amber-600 font-medium">
                    ⚠️ Special Needs
                  </li>
                )}
              </ul>
            </div>

            <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
              <h3 className="font-semibold text-purple-900 mb-3">Behavior</h3>
              <ul className="text-sm text-gray-700 space-y-2 flex flex-col">
                <li>
                  {petDetails.behavior?.goodWithKids
                    ? "✅ Good with kids"
                    : "❌ No kids"}
                </li>
                <li>
                  {petDetails.behavior?.goodWithOtherDogs
                    ? "✅ Good with dogs"
                    : "❌ No dogs"}
                </li>
                <li>
                  Energy:
                  <span className="font-semibold">
                    {petDetails.behavior?.energyLevel}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-gray-500 text-sm flex items-center gap-2 mt-auto">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            Located in {petDetails.location?.city}, {petDetails.location?.state}
          </div>
        </div>
        <button
          onClick={() => {
            const ok = confirm("Are you sure you want to delete?")
            if (ok) deletePet(id)
          }}
        >
          delete pet 🗑️
        </button>

        <button onClick={() => setIsEditting(!isEditting)}>update pet</button>
      </div>

      {/* Update form */}
      {isEditting && (
        <div>
          <CreatePetForm
            petDetails={petDetails}
            setIsEditting={setIsEditting}
          />
        </div>
      )}
      <div>
        <form></form>
      </div>

      <div className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Questions & Comments
        </h2>

        {petDetails.comments.length ? (
          <div>
            {petDetails.comments.map((comment) => (
              <div>
                <h3>{comment.author}</h3>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <span>no comments yet</span>
        )}

        {/* <div className="space-y-4 mb-8">
          {pet.comments.length === 0 ? (
            <p className="text-gray-500 italic">
              No comments yet. Be the first to ask about {name}!
            </p>
          ) : (
            pet.comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-gray-50 p-4 rounded-xl border border-gray-100"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-bold text-gray-900">
                    {comment.authorName}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{comment.text}</p>
              </div>
            ))
          )}
        </div> */}

        <form
          onSubmit={(e) =>
            addComment(e, newComment, petDetails.id, setNewComment)
          }
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={newComment.author}
                name="author"
                onChange={(e) =>
                  setNewComment((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="Leave blank for Anonymous"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Comment
              </label>
              <input
                type="text"
                value={newComment.comment}
                name="comment"
                onChange={(e) =>
                  setNewComment((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="Ask a question about this pet..."
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  )
}

export default PetDetailPage
