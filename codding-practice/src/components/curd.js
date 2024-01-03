import React, { useEffect ,useState} from "react";

function Curd()
{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    },[])

    console.log(JSON.stringify(data))
    return (<>
    <h2>CURD URL</h2>
    {data.map((item)=><h1>{item.name}</h1>)}
    </>)
}
export default Curd;