import React from "react";

function Header () {
    return (
        <div className="jumbotron bg-primary border-bottom border-danger" >
            <h1 className="text-center text-white">Employee Directory</h1>
            <h4 className="text-center mt-4 text-white">Click on the carrots to filter by heading or use the search box to narrow your results</h4>
        </div>
    )
}

export default Header;