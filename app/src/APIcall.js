import React, { Component } from 'react';

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
        if (!this.state.data) return <p>Please Wait</p>
        return (
            <p>Bonjour</p>
        )
    }
}

export default APIcall;
