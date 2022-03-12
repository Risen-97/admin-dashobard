import Sidebar from "./component/Sidebar";
import "./app.css";
import Navbar from "./component/layout/Navbar";
import Dashboard from "./component/pages/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customers from "./component/pages/Customers";
import { useContext } from "react";
import adminContext from "./context/use-context";

function App() {
  const [value, setValue] = useContext(adminContext);
  return (
    <Router>
      <div
        className={`app ${
          value.isDark ? "dark-background" : "light-background"
        }`}
      >
        <Sidebar />
        <div className="app__container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>

            <Route path="/customers">
              <Customers />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
