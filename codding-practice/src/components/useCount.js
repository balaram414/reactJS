import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);
  function INC() {
    setCount(count + 1);
  }
  function DEC() {
    setCount(count - 1);
  }
  return [count,INC,DEC]
}
export default useCount;