import { Route, Switch } from "react-router-dom";
import TheLayout from "../common/TheLayout";
import Login from "../pages/Login";
import AutoMessage from "../pages/automeaning/AutoMessage";
import Dashboard from "../pages/Dashboard";
import Trades from "../pages/trades/Trades";
import Offer from "../pages/Offer";

function AppRouter() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Switch>
        <Route exact path="/" render={() => <Login />} />

        <Route
          exact
          path="/dashboard"
          render={(props) => (
            <TheLayout {...props}>
              <Dashboard />
            </TheLayout>
          )}
        />
        <Route
          exact
          path="/trades"
          render={(props) => (
            <TheLayout {...props}>
              <Trades />
            </TheLayout>
          )}
        />

        <Route
          exact
          path="/automeaning"
          render={(props) => (
            <TheLayout {...props}>
              <AutoMessage />
            </TheLayout>
          )}
        />
        <Route
          exact
          path="/offer"
          render={(props) => (
            <TheLayout {...props}>
              <Offer />
            </TheLayout>
          )}
        />


      </Switch>
      {/* </BrowserRouter> */}
    </>
  );
}
export default AppRouter;
