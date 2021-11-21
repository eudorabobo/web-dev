import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Route path="/a6/hello" exact={true}>
            <HelloWorld/>
          </Route>
          <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
            <Practice/>
          </Route>
          <Route path="/a6/build" exact={true}>
            <Build/>
          </Route>
          <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
            <Practice/>
          </Route>
          <Route path="/a7/twitter">
            <Build/>
          </Route>
          <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
            <Practice/>
          </Route>
          <Route path={["/", "/a8", "/a8/build"]} exact={true}>
            <Build/>
          </Route>


        </div>
      </BrowserRouter>
  );
}


export default App;
