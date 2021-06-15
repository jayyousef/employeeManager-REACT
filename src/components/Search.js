import React from "react";



function Search (props) {

    const {handleSearch,searchString}=props


    return (
        <div className="m-4 d-flex justify-content-center">
            <input onChange={handleSearch} type="text" placeholder="Search.."/>        
        </div>
    )
}

export default Search;