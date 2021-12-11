import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-pro/css/all.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import A6 from "./components/a6";
import A7 from "./components/a7";
import A8 from "./components/a8";
import A9 from "./components/a9";

function App() {
  return (
      <BrowserRouter>
        <div className="container">

          <Link to="/a6/practice">A6</Link> |
          <Link to="/a7/practice">A7</Link> |
          <Link to="/a8/practice">A8</Link> |
          <Link to="/a9/practice">A9</Link>

          <Route path="/a6/practice" exact={true}>
            <A6/>
          </Route>

          <Route path="/a7/practice" exact={true}>
            <A7/>
          </Route>

          <Route path="/a8/practice" exact={true}>
            <A8/>
          </Route>


          <Route path="/a9/practice" exact={true}>
            <A9/>
          </Route>


        </div>
      </BrowserRouter>
  );
}

export default App;
