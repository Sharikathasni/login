import React from "react"
import './footer.css'
export const Footer = () => {
    return <div className="footer-container">
        <div className="right"><b>Furniro</b>
            <p>400 University Drive Suite 200 Coral
                Gables,
                FL 33134 USA
                 </p>
        </div>
        <div className="left"><i>Links</i>
        <p><h5>Home</h5></p>
         <p><h5>Shop</h5></p>
         <p><h5>About</h5></p>
         <p><h5>Contact</h5></p></div>
        <div className="bottom"><i>Help</i>
        <p><h5>Payment Options</h5></p>
        <p><h5>Returns</h5></p>
        <p><h5>Privacy Polices</h5></p></div>
        <div className="up"><i>Newsletter</i> <br></br>
        <button className="btn1">Subscribe</button></div>

    </div>
}