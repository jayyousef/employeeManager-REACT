import React, {
  useState,
  useEffect
} from "react";
import Header from "./Header";
import Search from "./Search";
import Table from "./Table";

function Wrapper() {

  const [data, setData] = useState('')
  const [message, setMessage] = useState('')
  const [employeeData, setEmployeeData] = useState([])
  const [sorted, setSorted] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchString, setsearchString] = useState('')
  const [isAscending, setIsAscending] = useState(false)


  const handleFilter = ()=>{
    //false is filtered out
      const filteredResults = sorted.filter(searched=>{
        const stringifiedItem=JSON.stringify(searched)
        
        return stringifiedItem.includes(searchString)
  
      })
      setFiltered(filteredResults)
  }

  useEffect(() => {
    fetchData()
}, [])

useEffect(() => {
  handleFilter()

}, [handleFilter, searchString, sorted])


//USE EFFECT whenever filter changes then sort also changes [sorted]


const fetchData=()=>{

    const infoUrl = 'https://randomuser.me/api/?results=10&inc=name,email,phone,picture,dob&nat=us';

    fetch(infoUrl)
    .then(res => res.json())
    .then((res) => {
        console.log(res)
        setEmployeeData(
            res.results
        )
        setSorted(
            res.results
        )
        setFiltered(
          res.results
      )
    });
}

const handleSearch=(event)=>{
  setsearchString(event.target.value)

}


const handleSort = (header)=>{
  console.log('sort with this header>>>',header)
  
  if(sorted){
      if(employeeData){
      let tempData =  employeeData.sort(function(a, b) {
          var textA = a.name.first.toUpperCase()
          var textB = b.name.first.toUpperCase()
          if (isAscending) {
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          } else {            
          return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
          }
      })
      setIsAscending(!isAscending)
      setSorted(
          tempData
      )
  }
  }
}



return <div>
    <Header />
    <Search searchString={searchString} handleSearch={handleSearch}/>
    <Table employeeData={filtered} handleSort={handleSort}/>
    </div>;
}

export default Wrapper;
