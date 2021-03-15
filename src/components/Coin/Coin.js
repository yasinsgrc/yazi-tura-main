import React from "react";
import "./Coin.css";
import CoinTura from "../../Assets/1-lira-tura.png";
import CoinYazi from "../../Assets/1-lira-yazi.png";

const Coin = (props) => {
  return (
    <div className="Coin-container">
      <div className={`Coin ${props.flipping ? "Coin-rotate" : ""}`}>
        <img
          src={CoinTura} alt="tura"
          className={props.side === "tura" ? "Coin-front" : "Coin-back"}
        />
         <img
        src={CoinYazi} alt="yazi"
        className={props.side === "yazi" ? "Coin-front" : "Coin-back"}
      />          
      </div>
    </div>
  );
};

export default Coin;
