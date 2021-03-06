/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import '../../assets/css/accueil.css';
import {Carousel} from '3d-react-carousal';

const  Carou = () => {

    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
      <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
      <img  src="https://picsum.photos/800/302/?random" alt="3" />  , 
      <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
      <img src="https://picsum.photos/800/304/?random" alt="5" />  ];


    return (
        <div className="carou">
     
     <Carousel  slides={slides} autoplay={true} interval={3000}/>
        </div>
    )
}

export default Carou;
