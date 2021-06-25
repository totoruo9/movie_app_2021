import React from 'react';
import {BrowserRouter, Route, HashRouter} from 'react-router-dom';
import About from "./routes/About";
import Home from './routes/Home';
import Navigation from './componets/Navigation'

function App(){
  return(
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
