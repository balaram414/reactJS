import { useRef } from "react";
import ChildRef from "./childRef";
function ForwordRef() {
  let inputRef = useRef(null);
  function setval() {
    inputRef.current.value = "Hello";
  }
  return (
    <>
      forwordRef
      <button onClick={() => setval()}>click</button>
      <ChildRef ref={inputRef} />
    </>
  );
}

export default ForwordRef;
