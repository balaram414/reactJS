import { forwardRef } from "react";

function ChildRef(props, ref) {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  );
}

export default forwardRef(ChildRef);
