import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Route path="/React-Movie-app/" exact={true} component={Home} />
        <Route path="/React-Movie-app/about" component={About} />
        <Route path="/React-Movie-app/movie/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;