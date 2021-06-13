import React from "react";



function TableRows (props) {

    const sortName = ()=>{
        console.log ('This is the sortName function')
    }

    console.log('this is props.userInfo>>>>>',props.userInfo)

    const mappedEmployee=props.userInfo.map(data=>{
        return (
            <tr>
            <td>
                {data[0].picture}
            </td>
            <td>
                {data[0].name}
            </td>
            <td>
                {data[0].email}
            </td>
            <td>
                {data[0].phone}
            </td>
         </tr>
    
        )
    }
    )
    // const mappedEmployee = 'test'
   
      return (
      
      <tbody>
        <tr>
            <th>image</th>
            <th onClick={sortName}>name</th>
            <th>phone</th>
            <th>email</th>
            <th>DOB</th>
        </tr>
        <tr></tr>
        {mappedEmployee}
    </tbody>
      )
    }

export default TableRows;