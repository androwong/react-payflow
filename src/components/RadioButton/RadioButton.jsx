import React, {Component} from 'react'
import { withStyles } from '@material-ui/core';
import radioButtonStyle from './radioButtonStyle';

class RadioButton extends Component
{
    render(){
        const {classes, selected, title, subTitle, onClick} = this.props;
        return(
            <div className={classes.radioButtonContainer} onClick={this.props.onClick}>
                <div className={classes.outerCircle}>
                    {
                        selected ? <div className={classes.innerCircle}></div> : null
                    }
                </div>
                <div className={classes.labelContainer}>
                    <div className={classes.radioButtonTitle}>
                        { title }
                    </div>
                    <div className={classes.radioButtonSubTitle}>
                        { subTitle }
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(radioButtonStyle)(RadioButton);