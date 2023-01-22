import "./App.css";
import React from "react";

import ExplorePublications from "./components/ExplorePublications";
import MainHeader from "./components/MainHeader/MainHeader";
import Main from "./components/Main/Main";
import Gallery from "./components/Gallery/Gallery";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./components/lensQueries/apollo-client";


function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <ExplorePublications>
                <MainHeader />
                <Main />
                <Gallery />
            </ExplorePublications>
        </ApolloProvider>
    );
}

export default App;
