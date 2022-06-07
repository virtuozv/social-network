import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { SignIn } from "./pages/auth/signin";
import { SignUp } from "./pages/auth/signup";
import { Home } from "./pages/home/home";
import { Testin } from "./pages/test/test";

function App() {
    return (
        <Router>
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/signin'} element={<SignIn />} />
              <Route path={'/signup'} element={<SignUp />} />
              <Route path={'/test'} element={<Testin />} />
          </Routes>
      </Router>
      );
}

export default App;

