import React from "react";
import { useTheme } from "../../context/main_context";

export default function test() {
  const { color, changeColor } = useTheme();
  return (
    <div>
      <button onClick={() => changeColor("red")}>set</button>
      <p>{color}</p>
    </div>
  );
}
