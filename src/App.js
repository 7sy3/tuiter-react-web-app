import './App.css';

import React from "react";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Labs from "./labs/index.js";
import HelloWorld from "./labs/a6/hello-world.js"
function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/*"
                         element={<Labs/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter/*"
                         element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;