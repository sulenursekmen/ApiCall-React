function SearchHeader({search}) {
const handleFormSubmit=(event)=>{
    event.preventDefault();
    debugger;
    search("sule");
}

    return ( 
    <div className="searchDiv" >
        <form onSubmit={handleFormSubmit}>
            <label>Ne Arıyorsunuz ?</label>
            <input />
        </form>
    </div> );
}

export default SearchHeader;