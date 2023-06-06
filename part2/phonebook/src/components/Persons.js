import Person from "./Person";

const Persons = ({persons, deletePerson}) => {
    const people = persons.map(p => <Person key={p.id} person={p} deletePerson={deletePerson}/>)
    return(
        <ul>
            {people}
        </ul>
    );
};
export default Persons
