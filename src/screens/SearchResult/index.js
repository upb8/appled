import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const imageClick = () => {
  alert("click hoise")
} 

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  export default function SearchResult() {
  return (
    <div className="mainContainer">
      <div>
      <img src={'https://static.thenounproject.com/png/1410611-200.png'} className="backImg" onClick={handleClick}/>
      </div>
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
         <img src={'http://pngimg.com/uploads/amazon/amazon_PNG5.png'} className="firstImg" onClick={() => imageClick()}/>
        </div>
        <div className="second">
        <img src={'https://images-eu.ssl-images-amazon.com/images/I/413RHWsREDL.png'} className="secondImg" onClick={() => imageClick()}/>
        
        </div>
        <div className="third">
        <img src={'https://c1.neweggimages.com/WebResource/Themes/2005/Nest/logo_424x210.png'} className="thirdImg" onClick={() => imageClick()}/>
        </div>
      </div>
    </div>

    <div className="rightContainer">
     <div className="hackintoshCompatibility">
       <div className="leftImgHolder">
         <img src={'https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099__340.png'} className="tickImg"/>
       </div>
       <div className="rightH1Holder">
        <text className="comText">
            Hackintosh compatible
        </text>
       </div>
      </div>
      <div className="techSpecs">
        <h2>
          Technical Details
        </h2>
        <p>
          <ul>

          <li>Supports 9th and 8th Gen Intel® Core™ Processors</li>
          <li>Supports 9th and 8th Gen Intel® Core™ Processors</li>
          <li>Supports 9th and 8th Gen Intel® Core™ Processors</li>
          <li>Supports 9th and 8th Gen Intel® Core™ Processors</li>
          <li>Supports 9th and 8th Gen Intel® Core™ Processors</li>
          <li>Supports 9th and 8th Gen Intel® Core™ Processors</li>
          <li>Supports 9th and 8th Gen Intel® Core™ Processors</li>
          <li>Supports 9th and 8th Gen Intel® Core™ Processors</li>
          <li>Supports 9th and 8th Gen Intel® Core™ Processors</li>
          <li>Supports 9th and 8th Gen Intel® Core™ Processors</li>
          <li>Supports 9th and 8th Gen Intel® Core™ Processors</li>
          <li>Supports 9th and 8th Gen Intel® Core™ Processors</li>
          </ul>
        </p>
      </div>
    </div>
    </div>
  );
}


