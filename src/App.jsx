import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Box, Typography} from "@mui/material"
import BOX1 from './Comp/BOX1'
function App() {
  const [count, setCount] = useState(0)

  return (
   <Box 
  
   width={"100vw"} height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} bgcolor={"#201E43"}>

<BOX1></BOX1>


   </Box>
  )
}

export default App
