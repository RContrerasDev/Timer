import React, {Component} from 'react';
import '../css/App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            textdays: 'Days',
            texthours: 'Hours',
            textminutes: 'Minutes',
            textseconds: 'Seconds'
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    getTimeUntil(deadline) {
        // Set the time to countdown
        const tiempo = new Date();
        tiempo.setHours([47], [29], [47]);
        const time = tiempo - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        this.setState({days, hours, minutes, seconds});
    }

    render() {

        return (
            <div>
                <div className="clock-days">
                    {this.state.days}
                    <div className="text-days">{this.state.textdays}</div>
                </div>
                <div className="clock-hours">
                    {this.state.hours}
                    <div className="text-hours">{this.state.texthours}</div>
                </div>
                <div className="clock-minutes">
                    {this.state.minutes}
                    <div className="text-minutes">{this.state.textminutes}</div>
                </div>
                <div className="clock-seconds">
                    {this.state.seconds}
                    <div className="text-seconds">{this.state.textseconds}</div>
                </div>
            </div>
        )
    }
}

export default Clock;