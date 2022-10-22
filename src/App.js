import './App.css';
import Assignment6 from "./labs/a6/index.js";
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
                  <Route index
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