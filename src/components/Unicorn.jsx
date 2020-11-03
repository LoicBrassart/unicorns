import React from 'react';

export default class Unicorn extends React.Component {
    constructor(props) {
        super(props);
        // A Unicorn is born black (it won't last, don't worry, the CdU will take care of it <3)
        this.state = {
            red: 0,
            blue: 0,
            green: 0
        }
    }

    componentDidMount() {
        // After seeing the sunlight for the first time (-> render :p), it prepares to swap to a new fabulous color every 3s
        const intervalHandle = setInterval(() => {
            this.setState({
                red: Math.floor(Math.random() * 255),
                blue: Math.floor(Math.random() * 255),
                green: Math.floor(Math.random() * 255)
            });
        }, 3000);
        this.setState({
            intervalHandle
        })
    }

    componentDidUpdate() {
        // On this line, we declare three new variables extracted from `this.state`. /!\ The variables *must* take the same name as the kkey in the original object !
        const { red, green, blue } = this.state;
        // Every Unicorn is polite enough to tell us when it swaps it's color
        console.log(`Neigh ! I'm now R:${red} G:${green} B:${blue} `);
    }

    componentWillUnmount() {
        // Before dying, the last thing a Unicorn does is to stop changing it's color
        clearInterval(this.state.intervalHandle);
    }

    render() {
        const { red, green, blue } = this.state;
        // Either the Unicorn received an "order" (via props) from App and will use it as it's color, or it can keep using it's own state to choose it randomly every 3s
        const myColor = this.props.color || `rgb(${red},${green},${blue})`;
        return (
            <p style={
                {
                    color: myColor
                }
            }
            > I'm a Unicorn !</p>
        )    
    }
}