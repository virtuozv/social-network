import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Body } from "./layouts/body/body";
import { Testin } from "./layouts/test/test";

function App() {
    return (
        <Router>
          <Routes>
              <Route path={'/'} element={<Body />} />
              <Route path={'/test'} element={<Testin />} />
          </Routes>
      </Router>
      );
}

export default App;

