import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Search from "../components/Search";

function Allroutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route>
        <h3>Something went wrong</h3>
      </Route>
    </Switch>
  );
}

export default Allroutes;
