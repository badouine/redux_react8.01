import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { change } from "../features/color";

function ChangeColor() {
  const [bgcolor, setBgcolor] = useState();
  const [txtcolor, setTxtcolor] = useState();

  const dispatch = useDispatch();
  return (
    <div>
      <input
        type={"text"}
        placeholder="Background color"
        onChange={(event) => setBgcolor(event.target.value)}
      />
      <br />
      <br />
      <input
        type={"text"}
        placeholder="Text color"
        onChange={(event) => setTxtcolor(event.target.value)}
      />
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(change({bgcolor:bgcolor,txtcolor:txtcolor}));
        }}
      >
        Change
      </button>
    </div>
  );
}

export default ChangeColor;