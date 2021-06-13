import React, {
    useState,
    useEffect
} from "react";
import TableRows from "./TableRows";
// import * as APIService from "../utils/api"


function Table() {

    const [state, setState] = useState({
        message: '',
        data: ''
    })

    let employeeData;

    // const renderData = async e => {
    //     const response = await APIService.getData()
    //     if(response.ok){
    //     setState({
    //         message:'posted successfully',
    //         data: response
    //     })
    //  }
    // }

    const infoUrl = 'https://randomuser.me/api/?inc=name,email,phone,picture&results=10';
    useEffect(() => {
        fetch(infoUrl)
            .then(res => res.json())
            .then((response) => {
                employeeData=(response.results)
                setState({
                    message: 'test',
                    data: employeeData
                }

                )
            });
    }, [])

    // useEffect(() => renderData(), [])

    const testData=()=>console.log('this is response or data',state.data)

    return (<table onClick={testData}>

                     <TableRows userInfo = {state.data}/> 
             </table>)
    }

    export default Table;