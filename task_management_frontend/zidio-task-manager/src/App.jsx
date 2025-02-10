import { useState } from 'react'
import './App.css'
import { ThemeProvider } from '@emotion/react'
import { darkTheme } from './theme/darktheme'
import Navbar from './page/Navbar/Navbar'
import Home from './page/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar/>
      <Home/>
    </ThemeProvider>
  )
}

export default App
