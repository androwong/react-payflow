import React, {Component} from 'react'
import { withStyles } from '@material-ui/core';
import rangeSliderStyle from './rangeSliderStyle'
class RangeSlider extends Component
{

    renderLabel = () => {
        const { classes, label }  = this.props;
        if(this.props.label == null)
            return;
        return(
            <div className={ classes.labelContainer }>
                {label}
            </div>
        )
    }

    render(){
        let { classes, max, current, className } = this.props;
        max = max / 1000;
        current = current / 1000;
        return(
            <div className={ `${ classes.container } ${ className }` }>
                <div className={ classes.componentContainer }>
                    { this.renderLabel() }     
                    <div className={ classes.rangeBarContainer }>
                        <div className={ classes.rangeBar }>
                            <div className={ classes.greyBackground }>

                            </div>
                            <div className={ classes.redRange } style={{ width: `${current/max * 100}%` }}>
                                { current } K
                            </div>
                        </div>
                        <div  className={ classes.edgeValuesContainer }>
                            <span>0</span>
                            <span className={ classes.maxValue }>{ max }K</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(rangeSliderStyle)(RangeSlider);