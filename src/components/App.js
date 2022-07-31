import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Error404 from "./Error404";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/404">
          <Error404 />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
