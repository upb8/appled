import React from 'react';
import './style.css';

function SearchResult() {
  return (
    <div className="mainContainer">
    <div className="leftContainer">
      <img src={'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6305/6305798cv12d.jpg'} className="img"/>
      <h3>
          ASRock B450M PRO4 MicroATX Motherboard
      </h3>
      <div className="sideText">
        Buy now :
      </div>
      <div className="shopLinks">
        <div className="first">
         <img src={'http://pngimg.com/uploads/amazon/amazon_PNG5.png'} className="firstImg"/>
        </div>
        <div className="second">
        <img src={'https://images-eu.ssl-images-amazon.com/images/I/413RHWsREDL.png'} className="secondImg"/>
        
        </div>
        <div className="third">
        <img src={'https://promotions.newegg.com/nepro/19-1326/images/imgs/newegglogo.png'} className="thirdImg"/>
        </div>
      </div>
    </div>
    <div className="rightContainer">
     hi
    </div>
    </div>
  );
}

export default SearchResult;
