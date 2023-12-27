import useCount from "./useCount";
function CustomHook() {
  const [count,INC, DEC] = useCount();

  return (
    <div>Hello Kolkata
      <button onClick={INC}>INC</button>
      {count}
      <button onClick={DEC}>DEC</button>
    </div>
  );
}
export default CustomHook;
