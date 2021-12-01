import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import A6Build from "./components/a6/Build";
import A7Build from "./components/a7/Build";
import A8Build from "./a8/Build";
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './vendors/bootstrap-5.1.2-dist/css/bootstrap.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.min.css';
import A9Build from "./a9/Build";
import A9 from "./a9";
import A8 from "./a8";
import A7 from "./components/a7"
import A6 from "./components/a6"
// function App() {
//   return (
//       <BrowserRouter>
//         <div className="container">
//           <Link to="/a6/practice">A6 </Link>
//           <Link to="/a7/practice">A7 </Link>
//           <Link to="/a8/practice">A8 </Link>
//           <Link to="/a9/practice">A9</Link>
//
//           <Route path="/a6/practice">
//             <A6/>
//           </Route>
//           <Route path="/a7/practice">
//             <A7/>
//           </Route>
//           <Route path="/a8/practice">
//             <A8/>
//           </Route>
//           <Route path="/a9/practice">
//             <A9/>
//           </Route>
//
//           <Route path="/a6/twitter">
//             <A6Build/>
//           </Route>
//           <Route path="/a7/twitter">
//             <A7Build/>
//           </Route>
//           <Route path="/a8/twitter">
//             <A8Build/>
//           </Route>
//           <Route path="/a9/twitter">
//             <A9Build/>
//           </Route>
//
//         </div>
//       </BrowserRouter>
//
//   );
// }
//
// export default App;

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Link to="/a6/practice">A6 </Link>
          <Link to="/a7/practice">A7 </Link>
          <Link to="/a8/practice">A8 </Link>
          <Link to="/a9/practice">A9</Link>


          <Route path="/a6/hello" exact={true}>
            <HelloWorld/>
          </Route>
          <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
            <Practice/>
          </Route>
          <Route path="/a6/build" exact={true}>
            <A6Build/>
          </Route>
          <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
            <Practice/>
          </Route>
          <Route path="/a7/twitter">
            <A7Build/>
          </Route>
          <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
            <Practice/>
          </Route>
          <Route path={["/", "/a8", "/a8/build"]} exact={true}>
            <A8Build/>
          </Route>

          <Route path="/a9">

            <A9/>
          </Route>



        </div>
      </BrowserRouter>
  );
}


export default App;
