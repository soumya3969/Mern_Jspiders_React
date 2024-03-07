import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>This Is Home Page</h1>}></Route>
          <Route path="/about" element={<h1>This is About Page</h1>}></Route>
          <Route
            path="/contact"
            element={<h1>This is Contact Page</h1>}
          ></Route>
          <Route
            path="*"
            element={<h1>⚠⚠⚠ 404! PAGE NOT FOUND... ⚠⚠⚠</h1>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
