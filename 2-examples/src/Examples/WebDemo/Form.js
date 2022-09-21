import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    if (email === USER_NAME && password === USER_PASSWORD) {
      setUser && setUser({
        name: email,
        age: 18,
      })
      console.log("S");
      navigate("/");
      setRes(true);
    } else {
      setRes(false);
      console.log("F");
    }
  };

  const handleChange = (e) => {
    console.log(e.target);
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
          Login
        </button>
        {errors?.email ? 'F' : ''}
      </form>

      {/* <div className="w-50 m-auto mb-3 d-flex">
        <span>Form Demo</span>

        <small className="text-danger">{res ? "Success" : "Fail"}</small>
      </div> */}

      {/* Form login */}
      {/* <form onSubmit={handleSubmit} className="w-50 m-auto">
        <div>
          <input
            name="inputEmail"
            type={"text"}
            placeholder={"please enter email"}
            value={email}
            onChange={handleChange}
          />
          <p className="text-danger">{errors?.email && "Invalid"}</p>
        </div>
        <div>
          <input
            name="inputPassword"
            type={"password"}
            onChange={handleChange}
          />
          <p className="text-danger">{errors?.password && "Invalid"}</p>
        </div>
        <input type={"submit"} />
      </form> */}
    </>
  );
}
