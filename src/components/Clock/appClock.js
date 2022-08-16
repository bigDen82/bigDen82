import React, { Component } from "react";
import Clock from "./Clock";

class appClock extends Component {

state = {
    secondRatation: 0,
    minutesRatation: 0,
    hourRatation: 0
}

componentDidMount () {
    setInterval(()=> {
        this.setClock()
    },1000)
}

setClock = () => {
    let currentdate = new Date();
    let secondRatation = currentdate.getSeconds()/60;
    let minutesRatation = (secondRatation + currentdate.getMinutes())/60;
    let hourRatation = (minutesRatation + currentdate.getHours())/12;

    this.setState({secondRatation: secondRatation})
    this.setState({minutesRatation: minutesRatation})
    this.setState({hourRatation: hourRatation})
}
render() {
    const{secondRatation, minutesRatation, hourRatation} = this.state
    
    return(
        <Clock secondRatation={secondRatation} minutesRatation={minutesRatation} hourRatation={hourRatation} />
    );
}
}

export default appClock;