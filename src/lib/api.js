import axios from "axios"

const api = axios.create({
  baseURL: "https://pet-donation-server.onrender.com",
})

export default api
