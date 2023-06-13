import Search from "./components/Search";
import CountryList from "./components/CountryList";
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const onSearchChange = event => {
    setSearch(event.target.value)
  }

  const doFilter = search !== ''

  const filteredCountryList = countries.filter(e => e.name.common.toLowerCase().startsWith(search.toLowerCase()))

 const tooMany = filteredCountryList.length > 10 && doFilter

  console.log(countries)

  if(tooMany){
    return(
      <div>
        <Search changeHandler={onSearchChange}/>
        Too many matches, specify another filter
      </div>
    )
  }

  else{
  return (
    <div>
      <Search changeHandler={onSearchChange}/>
      <CountryList countries={doFilter ? filteredCountryList : []}/>
    </div>
  );
  }
}

export default App;
