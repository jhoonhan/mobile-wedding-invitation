import { Route, Switch, useLocation } from "react-router-dom";
import "./scss/App.scss";

import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Rsvp from "./components/Rsvp/Rsvp";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  return (
    <div className="App flex--v align--cc">
      <main className="flex--v align--cc">
        <Home />
        <Rsvp />
        <Gallery />
        <Info />
      </main>
      <footer>aaang</footer>
    </div>
  );
};

export default App;
