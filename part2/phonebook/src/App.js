import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [search, setSearch] = useState('')

  const filteredList = persons.filter(e => e.name.toLowerCase().startsWith(search.toLowerCase()))

  const doFilter = search !== ''

  const addPerson = (event) => {
    event.preventDefault()
    if(newName === '' || newName === undefined){
      alert(`Name can't be empty`)
    }
    else if(persons.some(e => e.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newId = persons.at(-1).id + 1

        const newPerson = {
        name: newName,
        number: newNumber,
        id: newId
      }
      console.log(newPerson)
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
    
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
    
  }

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)

  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch}/>
      <h2>Add new contact</h2>
      <PersonForm click={addPerson} changes={{handleNameChange, handleNumChange}} vals={{newName, newNumber}}/>
      <h2>Numbers</h2>
      <Persons persons={doFilter ? filteredList : persons}/>
    </div>
  )
}

export default App