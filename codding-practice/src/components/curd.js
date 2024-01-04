import React, { useEffect ,useState} from "react";
import FilterJson from './filterJson'
function Curd()
{
    const [data,setData]=useState([])
    const [data1,setData1]=useState([])
    const [keyvalue,setKeyvalue]=useState("")
     useEffect(()=>{
        setData1([{name:"X"},{name:"Y"}])
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
     },[])
     
    return (<>
    <h2>CURD URL</h2>
    <input type="text" onChange={(e)=>{
       
setKeyvalue(e.target.value)
    }}/>
    <FilterJson keyVal={keyvalue} details={data}/>
   
    </>)
}
export default Curd;