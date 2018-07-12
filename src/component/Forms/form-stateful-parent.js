import React from 'react';
import FormChild from './form-stateless-child';

class FormParent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <FormChild/>
        );
    }
}

export default FormParent;