import React from "react";
import { useEffect, useState } from "react";

import MainButton from "../UI/Button/MainButton";
import ExplorePublications from "../components/ExplorePublications";

const Main = (props) => {
    return (
        <React.Fragment>
            <MainButton>Login</MainButton>
            <MainButton>All</MainButton>
            <MainButton>Other</MainButton>
        </React.Fragment>
    );
};

export default Main;
