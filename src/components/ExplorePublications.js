import React, { useEffect, useState } from "react";
import { explorePublications } from "../components/lensQueries/explorePublications";

export default function ExplorePublications(props) {
    const [publications, setPublications] = useState([]);

    const init = async () => {
        try {
            const request = {
                sortCriteria: "LATEST", //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
                noRandomize: true,
                sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
                publicationTypes: ["POST"],
                cursor: '{"timestamp":1,"offset":0}',
                limit: 24,
            };
            let response = await explorePublications(request); // To get next result replace the cursor with the value of response.pageInfo.next
            console.log(response);
            setPublications(response.data.explorePublications["items"]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        init();
    }, []);
    console.log(publications);

    return (
        <>
            <div>{props.children}</div>
            <div>
                {publications.map((publication, index) => (
                    <ul key={index}>
                        <h2>Hi</h2>
                        <h3> publication id : {publication.id}</h3>

                        {/* <h3> publication id : {publication.profile}</h3> */}
                        {/* <h3>{publication["metadata"]}</h3> */}
                        <img alt="all">{}</img>
                        <h4>{index}</h4>
                        <h4>{}</h4>
                    </ul>
                ))}
            </div>
            ;
        </>
    );
}
