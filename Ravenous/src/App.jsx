import { useState } from 'react'
import './App.module.css'

//fonts 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { BusinessList } from './components/Business/BusinessList'
import { SearchBar } from './components/Search Bar/SearchBar'

const business = {
  imageSrc: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
  name: "Sample Business",
  address: "123 Main Street",
  city: "Example City",
  state: "CA",
  zipCode: "12345",
  category: "Italian",
  rating: 4.5,
  reviewCount: 100
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </>
  )
}

export default App
