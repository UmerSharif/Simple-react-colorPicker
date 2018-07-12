import React from 'react';


class FormChild extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        return(

            <div>
                <h1>
                    The color is :
                </h1>
                <select name="" id="change-color">
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                </select>

            </div>
        );
    };
}

export default FormChild;