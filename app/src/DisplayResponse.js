import React, { Component } from 'react';

class DisplayResponse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            asian_rate: parseInt(this.props.attributes.images[0].faces[0].attributes.asian * 100),
            black_rate: parseInt(this.props.attributes.images[0].faces[0].attributes.black * 100),
            hispanic_rate: parseInt(this.props.attributes.images[0].faces[0].attributes.hispanic * 100),
            other_rate: parseInt(this.props.attributes.images[0].faces[0].attributes.other * 100),
            white_rate: parseInt(this.props.attributes.images[0].faces[0].attributes.white * 100),
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