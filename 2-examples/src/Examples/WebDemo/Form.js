import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setConstantValue } from "typescript";

export default function Form(props) {
  const {setUser} = props
  const navigate = useNavigate();
  const USER_NAME = "rjb24@gmail.com";
  const USER_PASSWORD = "Abc@123";

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const [errors, setErrors] = useState({
    email: undefined,
    password: undefined,
  });

  const [res, setRes] = React.useState(undefined);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (email === USER_NAME && password === USER_PASSWORD) {
    //   setUser && setUser({
    //     name: email,
    //     age: 18,
    //   })
    //   console.log("S");
    //   navigate("/");
    //   setRes(true);
    // } else {
    //   setRes(false);
    //   console.log("F");
    // }

    let data = {
      name: 'abc',
    };

    fetch(`https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/:id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("success", res);
        setConstantValue(res)
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "inputEmail"){
      if(e.target.value === '') setErrors('empty')
      if(!e.target.value.includes('@')) setErrors('format was wrong')
      setEmail(e.target.value);
    }
    if (e.target.name === "inputPassword") setPassword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="m-auto">
        <input
          className="m-3"
          name={"inputEmail"}
          type={"text"}
          placeholder={"Please enter email"}
          onChange={handleChange}
        />
        <input
          className="m-3"
          name={"inputPassword"}
          type={"password"}
          onChange={handleChange}
        />
        <button type={"submit"} className="btn btn-danger m-3">
          SUBMIT
        </button>
        {/* {errors?.email ? 'F' : ''} */}
      </form>
    </>
  );
}
