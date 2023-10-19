import { createContext, useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import MainComponent from "./components/MainComponent/MainComponent"
import Page from "./components/Pages/Page"
import Error from "./components/ErrorAndLoader/Error"
import { Routes,Route, BrowserRouter } from "react-router-dom"

export const ThemeContext = createContext()

function App() {
  const [isDark,setDark] = useState(false)
  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{isDark,setDark}}>
     <NavBar/>
     <Routes>
      <Route path="/" element = {<MainComponent/>}/>
      <Route path="alpha/:code" element = {<Page/>}/>
      <Route path="*" element = {<Error err = '404 Page Not Found'/>}/>
     </Routes>
    </ThemeContext.Provider>
  </BrowserRouter>
  )
}
export default App;