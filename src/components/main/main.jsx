import React from "react";
import './main.css'
import Kontakt from "./kontakt/kontakt";
import Meny from "./meny/meny";
import Schema from "./schema/schema";

const Main = () => {
    return(
        <main>
            <Meny></Meny>
            <Schema></Schema>
            <Kontakt></Kontakt>
        </main>
    )
}

export default Main