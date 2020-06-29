import React, {Component} from 'react'

import baseInputStyle from './baseInputStyle.jsx'
import { withStyles } from '@material-ui/core';

class BaseInput extends Component
{
    render(){
        const {className, classes, inputRef, ...rest} = this.props;
 
        return (
            <input { ...rest } className={[classes.baseInput, className].join(' ')} ref={inputRef} />
        )
    }
}

export default withStyles(baseInputStyle)(BaseInput);