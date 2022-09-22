// Tao routing
// - Import
// - BrowserRouter
// - Routes
// - Route
// - Navigation (Link/NavLink)
// - 2 component : HOME, LOGIN

// Tao FORM
// - FORM 
// - Handel event SUBMIT (onSubmit, 1btn type submit)
// - INPUT (email, password)
// - Handle btn (click -> in ra thong tin -> so sanh vs thong tin dung)
// - Thong tin dung: Redirect HOME

// Khoi tao state user o file routing
// Truyen prop user -> LOGIN 
// LOGIN: setState User (check null)

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Navi from "./Navi";
import Info from "./Info";

export default function WebDemo() {
  const [user, setUser] = useState({
    name: undefined,
    age: undefined,
  });

  useEffect(()=>{
    // console.log(user)
  },[user])

  return (
    <>
      <BrowserRouter>
        {/* menu */}
        <Navi />
        {/* {user?.name === undefined ? <Link to={"/login"}>LOGIN</Link> : <Navi />} */}

        {/* Dinh nghia route */}
        <Routes>
          <Route path="/" element={<Home user={user}/>}></Route>
          <Route path="/:id" element={<Info user={user}/>}></Route>
          <Route path="/form" element={<Form setUser={setUser}/>}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
