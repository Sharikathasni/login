import React, { useState } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import "./image.css";

const images = [
    "https://picsum.photos/id/129/4000/3500",
    "https://picsum.photos/id/201/2500/3333",
    "https://picsum.photos/id/1068/5000/3333",
    "https://picsum.photos/id/445/4256/2819",
    " https://picsum.photos/id/534/4000/3000",
     "https://picsum.photos/id/625/4000/3000",
]

const Image = () => {
    const [data, setData] = useState({img: '',i: 0})


    const viewImage=(img, i)=> {
        setData({img,i})
     }
    return( 
        <>
        <div className="head"><h4>Share your setup with</h4></div>
         <div className="sub"><h1>#FurniroFurniture</h1></div>
        {data.img &&
            <div style={{
                width: '100%',
                height: '100vh',
                background: 'black',
                position: 'fixed',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
            }}>
            <img src={data.img} style={{width: 'auto', maxWidth: '90%',maxHeight: '90%'}}/>
            </div>    
        }
        
       <div  style={{padding:'10px'}}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                    <Masonry gutter="20px">
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{width: "100%", display: "block",cursor:'pointer'}}
                                alt=""
                                onClick={()=>viewImage(image,i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
       </div>
        </>

    );
};
export default Image;