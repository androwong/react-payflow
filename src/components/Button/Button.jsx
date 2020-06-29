import React, {Component} from 'react'
import { withStyles } from '@material-ui/core';
import buttonStyle from './buttonStyle.jsx'
class Button extends Component
{
    render()
    {
        const { classes, className, children, ...rest } = this.props;
        return (
            <div { ...rest } className={[classes.button, className].join(' ')} onClick={ this.props.onClick } >
                { children }
            </div>
        )
    }
}

export default withStyles(buttonStyle)(Button);