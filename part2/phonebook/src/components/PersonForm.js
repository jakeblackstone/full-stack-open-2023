const PersonForm = (props) => {
    const {handleNameChange, handleNumChange} = props.changes
    const {newName, newNumber} = props.vals

    return (
        <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/> <br></br>
          number: <input value={newNumber} onChange={handleNumChange}/>
        </div>
        <div>
          <button type="submit" onClick={props.click}>add</button>
        </div>
      </form>
    );
};
export default PersonForm
