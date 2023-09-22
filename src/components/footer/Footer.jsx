import React from "react"
import './footer.css'
export const Footer = () => {
    return <div className="footer-container">
        <div className="right"><b>Fashion Company</b>
            <p>University street
                ABC 
                pin:000</p>
        </div>
        <div className="left">Link
        <p>Home</p>
         <p>Shop</p>
         <p>About</p>
         <p>Contact</p></div>
        <div className="left">Help
        <p>Payment Options</p>
        <p>Returns</p>
        <p>Privacy Polices</p></div>
        <div className="left">Newsletter <br></br>
        <button className="btn" type="submit">Subscribe</button></div>

    </div>
}