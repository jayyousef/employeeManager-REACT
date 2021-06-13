import React from "react";



function Search () {

    const handleSearch = ()=>console.log('searchbutton')

    return (
        <div >
            <input onChange={handleSearch} type="text" placeholder="Search.."/>        
        </div>
    )
}

export default Search;