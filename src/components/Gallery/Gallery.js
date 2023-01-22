import React from "react";

import classes from "./Gallery.module.css";

// import { useLazyQuery } from "@apollo/client";
// import explorePublications from "../lensQueries/explorePublications";
// import GET_PUBLICATIONS from "../lensQueries/explorePublications";
// import { gql } from "@apollo/client";

import IMG1 from "./img/z1.PNG";
import IMG2 from "./img/z2.PNG";
import IMG3 from "./img/z3.PNG";
import IMG4 from "./img/z4.PNG";

let data = [
    {
        id: 1,
        imgSrc: IMG1,
    },
    {
        id: 2,
        imgSrc: IMG2,
    },
    {
        id: 3,
        imgSrc: IMG3,
    },
    {
        id: 4,
        imgSrc: IMG4,
    },
];

const Gallery = (props) => {
    // const [getPublication, { loading, data, error }] = useLazyQuery(
    //     GET_PUBLICATIONS,
    //     {
    //         explorePublications: { items: "" },
    //     }
    // );

    // if (error) return <h1>Error found</h1>;
    // if (data) {
    //     console.log(data);
    // }

    return (
        <>
            <div className={classes.gallery}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={classes["items"]}>
                            <img
                                className={classes["img"]}
                                src={item.imgSrc}
                            ></img>
                        </div>
                    );
                })}
                {/* <button onClick={() => getPublication()}></button> */}
            </div>
        </>
    );
};

export default Gallery;
