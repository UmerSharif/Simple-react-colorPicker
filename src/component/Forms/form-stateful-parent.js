import React from 'react';
import FormChild from './form-stateless-child';

class FormParent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            bgColor: 'teal'
        };
        this.changeName = this.changeName.bind(this);
    }

    updateBackgroundColor(){
        let body = document.querySelector('body');
        body.style.background = this.state.bgColor;
    }

    componentDidMount() {
      this.updateBackgroundColor();
    }

    componentDidUpdate(){
        this.updateBackgroundColor();
    }


    changeName(newColor){

        this.setState({bgColor:newColor});
    }

    render(){
        return(
            <FormChild color = {this.state.bgColor} onChange={this.changeName}/>
        );
    }
}

export default FormParent;