import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { SignIn } from "./pages/auth/signin";
import { Body } from "./pages/body/body";
import { Testin } from "./pages/test/test";

function App() {
    return (
        <Router>
          <Routes>
              <Route path={'/'} element={<SignIn />} />
              <Route path={'/test'} element={<Testin />} />
          </Routes>
      </Router>
      );
}

export default App;

