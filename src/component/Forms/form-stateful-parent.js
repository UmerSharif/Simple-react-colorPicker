import React from 'react';
import FormChild from './form-stateless-child';

class FormParent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            color: 'white'
        }
        this.changeName = this.changeName.bind(this);
    }

    changeName(newColor){

        this.setState({color:newColor});
    }

    render(){
        return(
            <FormChild color = {this.state.color} onChange={this.changeName}/>
        );
    }
}

export default FormParent;