import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
const Practice = () => {
    return (
        <>
            <h1>Practice</h1>
            <ReduxExamples/>
            <Link to="/a7/hello">
                Hello
            </Link>
            <Link to="/a7/twitter/home">
                Build
            </Link>
        </>

    )
};
export default Practice;