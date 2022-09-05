import React from "react";
import RenderColor from "./RenderColor";

export default function ColorExam() {
  const arrayData = [
    { id: 1, name: "Data 01" },
    { id: 2, name: "Data 02" },
    { id: 3, name: "Data 03" },
  ];

  const arrayColor = [
    { id: 1, name: "red" },
    { id: 2, name: "blue" },
    { id: 3, name: "green" },
  ];
  return (
    <>
      {arrayData.map((item, index) => (
        <RenderColor key={item.id} input={item} color={arrayColor[index]} />
      ))}
    </>
  );
}
