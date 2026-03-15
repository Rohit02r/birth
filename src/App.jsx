import { Routes, Route } from "react-router-dom"
import BlogPage from "./pages/BlogPage"
import BirthdayPage from "./pages/BirthdayPage"

function App(){

return(

<Routes>

<Route path="/" element={<BlogPage />} />

<Route path="/birthday" element={<BirthdayPage />} />

</Routes>

)

}

export default App