import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Todo from "./Todo/Todo";

export default function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Todo  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
