import React from 'react';

export default class Unicorn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            red: 0,
            blue: 0,
            green: 0
        }
    }

    componentDidMount() {
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
        const { red, green, blue } = this.state;
        //console.log(`Neigh ! I'm now R:${red} G:${green} B:${blue} `);
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalHandle);
    }

    render() {
        const { red, green, blue } = this.state;
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