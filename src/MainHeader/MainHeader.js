import React from "react";

import Button from "../UI/Button/Button";
import ButtonTitle from "../UI/Button/ButtonTitle";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
    return (
        <header className={classes["main-header"]}>
            <h1>Lens AI</h1>
            <ButtonTitle />
            <Button />
        </header>
    );
};

export default MainHeader;
