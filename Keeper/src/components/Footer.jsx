import React from "react";

const year = new Date();
let currentYear=year.getFullYear();

function Footer(){
    return(
    <footer>
    <p>Copyright {currentYear}</p>
    </footer>);
}

export default Footer;