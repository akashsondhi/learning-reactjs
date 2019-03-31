import React, {Component} from 'react';
import './Clock.css';
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = this.getTime();
        this.setTimer();
    }
    getTime() {
        const currentTime = new Date();
        return {
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        };
    }
    setTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }
    updateClock() {
        this.setState(this.getTime, this.setTimer);
    }
    render() {
        const {hours, minutes, seconds, ampm} = this.state;
            return (
                <div className="clock">
                <span>{ hours == 0 ? 12 :(hours > 12) ? hours - 12 : hours}: {minutes > 9 ? minutes : `0${minutes}`}: {seconds > 9 ? seconds : `0${seconds}`} {ampm}</span>
                </div>
                )
    }
}

export default Clock;