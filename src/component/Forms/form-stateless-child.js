import React from 'react';
import './changeColor.css';


class FormChild extends React.Component {
    constructor(props){
        super(props);
        this.handleColor = this.handleColor.bind(this);
    }

    handleColor(e){
        let newColor = e.target.value;
        this.props.onChange(newColor);
    }

    render(){

        return(

            <div className="main">
                <h1>
                    The color is : {this.props.color}
                </h1>
                <select name="switchColor" id="change-color" onChange={this.handleColor}>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                </select>

            </div>
        );
    };
}

export default FormChild;