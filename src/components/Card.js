import React from "react";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

export default function Card() {
    return (
        <div className={"container1"}>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
