import React from "react";
import classes from "./Gallery.module.css";

const GalleryList = (props) => {
    return (
        <>
            <div key={props.index} className={classes["items"]}>
                <img className={classes["img"]} src={props.item.imgSrc}></img>
            </div>
        </>
    );
};

export default GalleryList;
