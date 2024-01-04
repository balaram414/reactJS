import { useEffect, useState } from "react";

function FilterJson(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    let res = props.details.filter((item) =>
      item.name?.toLowerCase().includes(props.keyVal?.toLowerCase())
    );
    setData([...res]);
    console.log(props.keyVal);
  }, [props.keyVal]);

  return (
    <>
      {data.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </>
  );
}
export default FilterJson;
