import React from 'react';
import './changeColor.css';


class FormChild extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        return(

            <div className="main">
                <h1>
                    The color is :
                </h1>
                <select name="switchColor" id="change-color">
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                </select>

            </div>
        );
    };
}

export default FormChild;