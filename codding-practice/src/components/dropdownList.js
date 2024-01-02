import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
function DropdownList() {
  let obj = [
    {
      name: "West Bengal",
      dist: [
        { name: "Kolkata", block: ["Bhagwanput", "Block 1"] },
        { name: "Purba Medini", block: ["Bhag", "Block 2"] },
      ],
    },
    {
      name: "Biher",
      dist: [
        { name: "BhagalPur", block: ["BhagalPur 1", "BhagalPur 2"] },
        { name: "Katiher", block: ["Katiher 1", "Katiher 2"] },
      ],
    },
    {
      name: "UP",
      dist: [
        { name: "Kanpur", block: ["Kanpur 1", "Kanpur 2"] },
        { name: "Ajaydha", block: ["Ajaydha 1", "Ajaydha 2"] },
      ],
    },
  ];

  const count = useSelector((state) =>state.counter);
  const dispatch = useDispatch();


  const [selectedState, setSelectedState] = useState();
  const [distList, setDistList] = useState([]);
  const [blockList, setBlock] = useState([]);
  let val = [];
  for (let i = 0; i < obj.length; i++) {
    val.push(obj[i].name);
  }

  function stateSelect(e) {
    let stateList = [];
    let distList = [];
    setSelectedState(e.target.value);
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].name == e.target.value) {
        stateList = obj[i].dist;
      }
    }
    for (let i = 0; i < stateList.length; i++) {
      distList.push(stateList[i].name);
    }
    setDistList([...distList]);
  }

  function distSelect(e) {
    let list = [];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].name == selectedState) {
        for (let j = 0; j < obj[i].dist.length; j++) {
          console.log();
          if (obj[i].dist[j].name == e.target.value) {
            for (let k = 0; k < obj[i].dist[j]?.block.length; j++) {
              list.push(obj[i].dist[j]?.block[k]);
            }
          }
        }
      }
    }
    setBlock([...list]);
  }
  return (
    <div style={{backgroundColor:"gray"}}>
      <div style={{ paddingLeft: 150, paddingTop: 50 }}>
        <select onChange={(e) => stateSelect(e)}>
          {val.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
      <div style={{ paddingLeft: 150, paddingTop: 50 }}>
        <select onChange={(e) => distSelect(e)}>
          {distList.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
      <div style={{ paddingLeft: 150, paddingTop: 50 }}>
        <select>
          {blockList.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
      
      <button onClick={() => dispatch(increment())}>INC {count} --</button>
      <button onClick={() => dispatch(decrement())}>DEC {count} --</button>
    </div>
  );
}
export default DropdownList;
