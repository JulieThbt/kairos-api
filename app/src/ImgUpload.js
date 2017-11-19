import React, { Component } from 'react';
import './ImgUpload.css';
import img from './user-icon.png';

class ImgUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            img64: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            file: "",
            img64: "",
        });
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                img64: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render() {

        return (
            <div class="wrapper">
                <div class="card-img">
                    {(this.state.img64.trim() != "") && <img src={this.state.img64} height="420" width="327" />}
                    {!(this.state.img64) && <img src={img} height="420" width="327" />}
                </div>
                <div class="card-info">
                    <div class="card-text">
                        <h1>Face recognition with Kairos API</h1>
                        <h5>by Julie Thiebaut</h5>
                        {!(this.state.img64) && <p>Please select an Image to Analyze</p>}
                        
                    </div>
                    <div class="card-btn">
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <input type="file" name="file" id="file" onChange={(event) => this.handleChange(event)} />
                            <label for="file">Choose a file</label>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImgUpload;
