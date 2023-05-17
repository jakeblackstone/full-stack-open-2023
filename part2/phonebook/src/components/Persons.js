import Person from "./Person";

const Persons = ({persons}) => {
    const people = persons.map(p => <Person key={p.id} person={p}/>)
    return(
        <ul>
            {people}
        </ul>
    );
};
export default Persons
