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
                console.log(response);
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
        if (!this.state.data) return <div><div class="spinner"></div><p>Please Wait</p></div>
        return (
            <DisplayResponse attributes={this.state.data}></DisplayResponse>
        )
    }
}

export default APIcall;
