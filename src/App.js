import React from 'react';
import {BrowserRouter, Route, HashRouter} from 'react-router-dom';
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from './routes/Home';
import Navigation from './componets/Navigation'

function App(){
  return(
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
