import React from "react";
import photos from "../../data";
import "./style.scss";
import AI from "../../images/AI_I.jpg";

export default function Featured() {
  const [firstImage, secondImage] = photos;
  return (
    <section className="featured-section"  data-scroll-section>
      <div className="featured-row-layout">
        <h6 onClick={ 
          // add a external link
          () => window.open("https://babivillanova.github.io/AI_and_I/")
        }>AI & I</h6>

        
        <img src={AI} data-scroll onClick={ 
          // add a external link
          () => window.open("https://babivillanova.github.io/AI_and_I/")
        }/>
      </div>
      <div className='featured-column-layout'>
        <h6>VISITORS AI GENERATED BOARD</h6>
        <img src={secondImage} data-scroll/>
      </div>
    </section>
  );
}
