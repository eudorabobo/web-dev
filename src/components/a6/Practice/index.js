import React from "react";
import Classes from "./Classes";
import {Link} from "react-router-dom";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";

const Practice = () => {
  return(
      <div>
        <h1>Practice</h1>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <Link to="/a6/hello">
          Hello
        </Link>
      </div>
  )
};

export default Practice;

