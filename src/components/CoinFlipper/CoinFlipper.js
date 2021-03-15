import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";
import randomBool from "random-bool";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      total:0,
      tura:0,
      yazi:0,
    };
  }
  handleClick = () => {
    if(randomBool()===true){
      this.setState((state)=>({ 
        side:"yazi",
        yazi:this.state.yazi+1, 
        flipping:true,  
        total:this.state.total+1,
      }))
    }
    else
    this.setState((state)=>({ 
      side:"tura",
      tura:this.state.tura+1,
      flipping:true,
      total:this.state.total+1,
    })
    )
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    //this.setState({flipping:true});
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({flipping:false}), 1000);
    
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.total} </strong>
          atıştan
          <strong> {this.state.tura} </strong>ü tura
          <strong> {this.state.yazi} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
