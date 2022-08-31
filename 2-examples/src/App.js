import React from "react";
import { act } from "react-dom/test-utils";
import "./App.css";
import JSX from "./Examples/JSX";
import image1 from "./images/1.jpeg";

let a = 12

let c = {
  id: 1,
  name: "User 1",
};

let d = {
  id: 2,
  name: "User 2",
};


const arrayNew = [
  {id : 3, name: 'ba' },
  {id :4, name : 'bon'},
  {id :5, name : 'nam'}
]

const _render = (input) => {
  return (
    <>
      <p>{input.id}</p>
      <p style={{ color: input.id % 2 === 0 ? "red" : "green" }}>
        {input.name}
      </p>
    </>
  );
};

for (let index = 0; index < arrayNew.length; index++) {
  let item = arrayNew[index]
  _render(item)
}

arrayNew.map(
  (item) => {return _render(item)} 
)

arrayNew.map(
  (item) => _render(item)
)

function App() {
  return (
    <>
      {_render(c)}
      {_render(d)}

      {_render(arrayNew[0])}
      {_render(arrayNew[1])}
      {_render(arrayNew[2])}

      {
        arrayNew.map(
          (item) => <div key={item.id}>{_render(item)}</div>
        )
      }
      
    </>
  );
}

export default App;
