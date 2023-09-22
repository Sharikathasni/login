import React from "react";
import './about.css'
import Men from ".././../assets/Images/images/men.png"
import Women from ".././../assets/Images/images/w.png"
import Kid from ".././../assets/Images/images/kid.png"
import Pic1 from ".././../assets/Images/images/m1.png"
import Pic2 from ".././../assets/Images/images/m2.png"
import Pic3 from ".././../assets/Images/images/m3.png"
import Pic4 from ".././../assets/Images/images/w1.png"
import Pic5 from ".././../assets/Images/images/w2.png"
import Pic6 from ".././../assets/Images/images/k1.png"
import Pic7 from ".././../assets/Images/images/k2.png"
import Pic8 from ".././../assets/Images/images/k3.png"
const About = () => {

    const images = [
        {
            id: 1,
            img: Men,
            head: "MEN"

        }, {
            id: 2,
            img: Women,
            head: "WOMEN"

        }, {
            id: 3,
            img: Kid,
            head: "KID"

        }
    ]

    const productImages = [
        {
            id: 1,
            img: Pic1,
            head: "Mens Suite"

        }, {
            id: 2,
            img: Pic2,
            head: "Mens formal"

        }, {
            id: 3,
            img: Pic3,
            head: "Mens Casual"

        },
        {
            id: 4,
            img: Pic4,
            head: "Womens Ethnic"

        }, {
            id: 5,
            img: Pic5,
            head: "Womens party wear"

        }, {
            id: 6,
            img: Pic6,
            head: "kids Girls"

        },
        {
            id: 7,
            img: Pic7,
            head: "Kids Party Wear"

        }, {
            id: 8,
            img: Pic8,
            head: "Kids Boys"

        },
    ]
    return (
        <>
            <div className="header"><h1>Categories</h1></div>
            <div className="sub-head">Lorem ipsum dolor sit amet,conseactetur adipiscing elit.</div>
            <div className="image-gal">
                <div class="row">
                    {
                        images.map((value, ind) => (
                            <div class="col" key={ind}>
                                <img src={value.img} className="img-item" />
                                <h4 className="bottom-text">{value.head}</h4>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="h1"><h1>Our Products</h1></div>
            <div className="producthead">
                <div className="our-product">
                    {
                        productImages.map((value, ind) => {
                            return (
                                <div className="productCard" key={ind}>
                                    <img src={value.img} alt="women" />
                                    <div><b>{value.head}</b></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <button>Buy now</button>
                                </div>
                                
                            )
                        })
                    }
                </div>

            </div>
        </>
    );
};


export default About;
