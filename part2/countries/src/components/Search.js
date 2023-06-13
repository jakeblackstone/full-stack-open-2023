const Search = ({changeHandler}) => {
    return(
        <div>
            find countries <input onChange={changeHandler}></input>
        </div>
    );
};
export default Search;
