import React, { Component } from 'react';

class DisplayResponse extends Component {
    constructor(props) {
        super(props)
        let response = this.props.attributes.images[0].faces[0].attributes;
        this.state = {
            asian_rate: parseInt(response.asian * 100),
            black_rate: parseInt(response.black * 100),
            hispanic_rate: parseInt(response.hispanic * 100),
            other_rate: parseInt(response.other * 100),
            white_rate: parseInt(response.white * 100),
        }
    }

    render() {
        return (
            <div>
                <p>Results for this photo:<br /><br />
                Asian: {this.state.asian_rate}%<br />
                    Black: {this.state.black_rate}%<br />
                    Hispanic: {this.state.hispanic_rate}%<br />
                    Other: {this.state.other_rate}%<br />
                    White : {this.state.white_rate}%</p>
            </div>
        )
    }

}

export default DisplayResponse;