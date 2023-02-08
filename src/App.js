import { Route, Switch, useLocation } from "react-router-dom";

import "./scss/App.scss";

import Home from "./components/home/Home";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
        </Switch>
      </header>
    </div>
  );
};

export default App;
