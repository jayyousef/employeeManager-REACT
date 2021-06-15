import React from "react";


function TableRows (props) {


      return (
        <tr key={props.email}>

        <td >
        <img src={props.picture} alt={props.name}/>
        </td>

        <td>
            {props.name}
        </td>

        <td>
        <a href = {"mailto:"+props.email}>{props.email}</a>
        </td>

        <td>
            {props.phone}
        </td>

        <td>
            {props.DOB}
        </td>
     </tr>
      )
      }
      
export default TableRows;