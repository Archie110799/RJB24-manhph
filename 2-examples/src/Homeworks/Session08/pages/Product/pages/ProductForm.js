import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ERROR_EMAIL = {
  required: "Email Address is required",
  pattern: "Please include an '@' in the email address ",
};

export default function ProductForm() {
  const navigate = useNavigate()
  const [cities, setCities] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue
  } = useForm();

  let url = "https://provinces.open-api.vn/api/?depth=3";
  async function fetchData() {
    try {
      let response = await axios(url);
      let temp = await response.data;
      setCities(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const cityWatch = watch("city");
  const districtWatch = watch("district");

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data.email, data.password)
    if(data.email === 'rjb24@gmail.com' && data.password === 'admin'){
      navigate('/')
    }
  };

  return (
    <>
      <form className="row g-3 mx-auto mt-3 w-50" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            id="inputEmail"
            placeholder="Email"
            {...register("email", {
              required: ERROR_EMAIL?.required,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
            })}
          />
          <p>{errors.email?.message}</p>
          <p>{errors.email?.type === "pattern" ? ERROR_EMAIL?.pattern : ""}</p>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            {...register("password", { required: true })}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
