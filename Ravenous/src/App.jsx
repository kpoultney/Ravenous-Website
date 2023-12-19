import { useState } from 'react'
import './App.module.css'

//fonts 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { BusinessList } from './components/Business/BusinessList'
import { SearchBar } from './components/Search Bar/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <BusinessList />
    </>
  )
}

export default App
