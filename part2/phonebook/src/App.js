import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personSvc from './services/PersonSvc'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personSvc.getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])

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
      const confirm = window.confirm(`${newName} is already added to phonebook. Update ${newName}?`)
      if(confirm){
        const findPerson = persons.find(p => p.name === newName)
        const updatedPerson = {...findPerson, number: newNumber}
        personSvc.update(findPerson.id, updatedPerson)
        .then(response => {
          setPersons(persons.map(p => p.id !== findPerson.id ? p : response.data))
        })

      }
    }
    else {

        const newPerson = {
        name: newName,
        number: newNumber,
      }
      console.log(newPerson)
      personSvc.create(newPerson)
      .then( response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
      
    }
    
  }

  const deletePerson = id => {
    const person = persons.find(p => p.id === id)
    console.log("delete")
    const confirm = window.confirm(`Delete ${person.name}?`)
    if(confirm){
      personSvc.deleteRequest(id)
      .then(response => {
        persons.map(person => person.id !== id ? person : response)
      })
    setPersons(persons.filter(person => person.id !== id))
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
      <Persons persons={doFilter ? filteredList : persons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App