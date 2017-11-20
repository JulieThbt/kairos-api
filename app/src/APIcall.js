import React, { Component } from 'react';
import './APIcall.css';
import DisplayResponse from './DisplayResponse.js';

class APIcall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('http://localhost:8000/detect', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image: this.props.img64
            })
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) return <div><div class="spinner"></div><p>Please Wait</p></div>
        return (
            <div>
                {(this.state.isLoading) && <div><div class="spinner"></div> <p>Please Wait</p></div>}
                {(this.state.data.images) && <DisplayResponse attributes={this.state.data}></DisplayResponse>}
                {((this.state.data.Errors)) && <p>Error {this.state.data.Errors[0].ErrCode} :<br />{this.state.data.Errors[0].Message}. <br /><br />Please try with another image!</p>}
        </div>
                )
    }
}

export default APIcall;
