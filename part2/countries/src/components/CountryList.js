import Country from "./Country";

const CountryList = ({countries}) => {
    const countryList = countries.map(c => <Country key={c.id} data={c}/>)
    
    
    return(<div>
        {countryList}
    </div>);
};
export default CountryList;
