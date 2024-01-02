import { useEffect, useState } from "react";
import axios from "axios";
function ContactList() {
    const [list, setList] = useState([]);
    const apiCall=async ()=>{
        const response = await axios("https://api.publicapis.org/entries")
        console.log(JSON.stringify(response.data.entries))
        setList(response.data.entries)
    }
 
  useEffect( () => {
    let data =apiCall()
    console.log(JSON.stringify(data))
  }, [list]);
  return <>{
    list.map((item)=>{
        return <><br/><span>{ item.API}</span></>
    })
  }</>;
}

export default ContactList;
