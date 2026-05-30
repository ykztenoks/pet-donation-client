import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter as Router } from "react-router-dom"
import PetProvider from "./context/Pet.context.jsx"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <PetProvider>
        <App />
      </PetProvider>
    </Router>
  </StrictMode>,
)
