import React, { Component } from 'react'
import checkBoxStyle from './longCheckBoxStyle'
import Check from "@material-ui/icons/Check";
import { withStyles } from '@material-ui/core';

class LongCheckBox extends Component
{

    state = {
        checked: false,
    }

    handleClickCheck = () => {

        const { checked } = this.state; 
        this.setState({checked: !checked});

    }

    render(){
        const { name, classes } = this.props;
        const { checked } = this.state;
        return(
            <div className={ classes.container } onClick={ this.handleClickCheck } >
                <div className={ classes.unchecked } >
                    <input type="hidden" name={ name } value={ checked } />
                    {
                        checked && <Check 
                                        className={ classes.checkIcon }
                                    />
                    }
                    
                </div>
                <span className={ classes.label } >Stay logged in for faster checkout</span>
            </div>
        )
    }
}

export default withStyles(checkBoxStyle)(LongCheckBox);