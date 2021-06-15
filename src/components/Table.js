import React, {
    useState,
    useEffect
} from "react";
import TableRows from "./TableRows";
import "./styles.css";

function Table(props) {


    return (<div className="table-responsive">
        <table className="table table-striped table-hover">
        <caption>List of Employees</caption>
      <thead>
        <tr>
            <th>Image</th>
            <th onClick={()=>props.handleSort('Name')}>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
        </tr>
        </thead>
        <tbody>
                     {props.employeeData ? props.employeeData.map((d) =>{
                         return  <TableRows key={d.email} picture={d.picture.medium} email={d.email} name={d.name.first+' '+d.name.last} phone={d.phone} DOB={d.dob.date}/> 
                     }) : <></>}
    </tbody>
                     
             </table>
             </div>)
    }

    export default Table;