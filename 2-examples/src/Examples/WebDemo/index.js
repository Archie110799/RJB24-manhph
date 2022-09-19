import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

export default function WebDemo() {
  return (
    <>
      <BrowserRouter>
        {/* menu */}
        <Link to={'/'}>Trang chu</Link>
        <Link className="d-block" to={'/form'}>Form</Link>
        {/* Dinh nghia route */}
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route
                path='*'
                element={
                <main style={{ padding: '1rem' }}>
                    <p>404 Page not found 😂😂😂</p>
                </main>
                }
            />
        </Routes>
      </BrowserRouter>
    </>
  );
}
