import React, { Component } from 'react'
import { Checkbox, withStyles } from '@material-ui/core';
import Check from "@material-ui/icons/Check";
import checkBoxStyle from './checkBoxStyle';

class CheckBox extends Component
{
    render(){
        const { classes, label, className, ...rest } = this.props;
        return(
            <div className={ `${className} ${classes.container}` } >
            <Checkbox
                { ...rest}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                disableRipple
            />
            { label }
            </div>
        )
    }
}

export default withStyles(checkBoxStyle)(CheckBox)