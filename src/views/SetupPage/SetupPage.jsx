import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import setupPageStyle from './setupPageStyle.jsx';
import WhiteHeader from 'components/WhiteHeader/index.jsx';
import SideNavButton from 'components/SideNavButton/index.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import CheckBox from 'components/CustomCheckBox/index.jsx';
import Button from 'components/Button/index.jsx';
import Footer from 'components/Footer/index.jsx';

class SetupPage extends Component
{
    render(){
        const { classes } = this.props;

        return(
            <div className={classes.setupPageContainer}>
                <WhiteHeader />
                <div className={ classes.contentContainer }>
                    <div className= { classes.welcomeDiv }>
                        Welcome Doris decker, Pursuit LLC
                    </div>
                    <div className={ classes.pageContent }>
                        <div className={ classes.sidebar }>
                            <SideNavButton to="/setup" label="Setup" activeImage="/assets/img/man-active.png" inactiveImage="/assets/img/man-inactive.png" />
                            <SideNavButton to="/raise-invoice" label="Raise Invoice" activeImage="/assets/img/list-active.png" inactiveImage="/assets/img/list-inactive.png" />
                            <SideNavButton to="/track-payment" label="Track Payment" activeImage="/assets/img/list-active.png" inactiveImage="/assets/img/list-inactive.png" />
                        </div>
                        <div className={ classes.formContainer }>
                            <div className={ classes.formHeaderContainer }>
                                <div className={ classes.formLabelContainer }>
                                    <div className={ classes.formNumberContainer }>
                                        <span className={ classes.formLabel }>Form</span>
                                        <span className={ classes.formNumber }>W-9</span>
                                    </div>
                                    <div className={ classes.companyTitle }>
                                        (Rev. October 2018) <br/>
                                        Department of the Treasury Internal Revenue Service
                                    </div>
                                </div>
                                <div className={ classes.subTitleContainer }>
                                    <div className={ classes.redTitle }>
                                        Request for Taxpayer<br/> Identification Number and Certification
                                    </div>
                                    <div className={ classes.infoUrl }>
                                        Go to www.irs.gov/FormW9 for instruction and the latest information.
                                    </div>
                                </div>
                                <div className={ classes.hintContainer }>
                                    <div>
                                        Give Form to the requester.<br/> Do not send to the IRS
                                    </div>
                                </div>
                            </div>
                            <div className={ classes.divider }> </div>
                            <GridContainer spacing={40}>
                                <GridItem xs={4}>
                                    <div>
                                        <span className={ classes.colorRed }>1.</span> Name (as shown on your income tax return)
                                    </div>
                                    <BaseInput className={ `${classes.marginVertical_25} ${classes.width_100}` }/>
                                </GridItem>
                                <GridItem xs={8}>
                                    <div>
                                        <span className={ classes.colorRed }>2.</span> Business name/disregarded entity name, if different from above
                                    </div>
                                    <BaseInput className={ `${classes.marginVertical_25} ${classes.width_100}` }/>
                                </GridItem>
                            </GridContainer>
                            <GridContainer className={ classes.marginVertical_25 }>
                                <GridItem>
                                    <span className={ classes.colorRed }>3.</span> Check appropriate box for federal tax classification of the person whose name is entered on line 1. Check only one of the following seven boxes.
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem  xs={12}>
                                    <GridContainer alignItems="center">
                                    <CheckBox name="abcde" label="Individual/sole proprietor or single-member LLC" className={ classes.marginRight_40 }/>
                                    <CheckBox name="abcde" label="C Corporation" className={ classes.marginRight_40 }/>
                                    <CheckBox name="abcde" label="S Corporation" className={ classes.marginRight_40 }/>
                                    <CheckBox name="abcde" label="Partnership" className={ classes.marginRight_40 }/>
                                    <CheckBox name="abcde" label="Trust/estate"/>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem className={ classes.marginTop_25 }>
                                    <CheckBox name="abcde" label="Limited liability company. Enter the tax classification (C=C corporation, S=S corporation, P=Partnership) ▶"/>
                                    <BaseInput type="text" className={ classes.marginLeft_25 } />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem className={ `${classes.paddingLeft_12} ${classes.marginTop_25}` }>
                                    <span className={ classes.colorRed } >Note:</span> Check the appropriate box in the line above for the tax classification of the single-member owner. Do not check LLC if the LLC is classified as a single-member LLC that is disregarded from the owner unless the owner of the LLC is another LLC that is not disregarded from the owner for U.S. federal tax purposes. Otherwise, a single-member LLC that is disregarded from the owner should check the appropriate box for the tax classification of its owner.
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem className={ classes.marginTop_25 }>
                                    <CheckBox name="abcde" label="Other (see instructions) ▶" className={ classes.marginRight_25 }/>
                                    <BaseInput type="text" className={ classes.marginLeft_25 } />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem className={ `${classes.marginBottom_25} ${classes.marginTop_40}` }>
                                    <span className={ classes.colorRed } >4.</span> Exemptions (codes apply only to certain entities, not individuals; see instructions on page 3):
                                </GridItem>
                            </GridContainer>
                            <GridContainer className={ `${classes.marginTop_25} ${classes.paddingLeft_12}` }>
                                <GridItem xs={4}>
                                    Exempt payee code (if any)
                                    <BaseInput className={ classes.marginLeft_25 } type="text" />
                                </GridItem>
                                <GridItem xs={8}>
                                    Exemption from FATCA reporting code (if any)
                                    <BaseInput className={ classes.marginLeft_25 } type="text" />
                                </GridItem>
                                <GridItem xs={12} className={ classes.marginVertical_25 }>
                                    <span className={ `${classes.colorRed} ` } >(Applies to accounts maintained outside the U.S.)</span>
                                </GridItem>
                            </GridContainer>
                            <GridContainer spacing={40} className={ classes.marginTop_10 } >
                                <GridItem xs={4}>
                                    <div>
                                        <span className={ classes.colorRed } >5.</span> Address (number, street, and apt. or suite no.) See instructions.
                                    </div>
                                    <BaseInput className={ `${classes.marginVertical_25} ${classes.width_100}` }/>
                                </GridItem>
                                <GridItem xs={8}>
                                    <div>
                                        Requester’s name and address (optional)
                                    </div>
                                    <BaseInput className={ `${classes.marginVertical_25} ${classes.width_100}` }/>
                                </GridItem>
                            </GridContainer>
                            <GridContainer spacing={40} className={ classes.marginTop_10 }>
                                <GridItem xs={4}>
                                    <div>
                                        <span className={ classes.colorRed } >6.</span> City, state, and ZIP code
                                    </div>
                                    <BaseInput className={ `${classes.marginVertical_25} ${classes.width_100}` }/>
                                </GridItem>
                                <GridItem xs={8}>
                                    <div>
                                        <span className={ classes.colorRed } >7.</span> List account number(s) here (optional)
                                    </div>
                                    <BaseInput className={ `${classes.marginVertical_25} ${classes.width_100}` }/>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} className={ `${classes.marginTop_40} ${classes.marginBottom_25}` }>
                                    <span className={ classes.partNumber } >PART 1</span><span className={ classes.partTitle } >Taxpayer Identification Number (TIN)</span>
                                </GridItem>
                                <GridItem xs={12}>
                                    Enter your TIN in the appropriate box. The TIN provided must match the name given on line 1 to avoid backup withholding. For individuals, this is generally your social security number (SSN). However, for a resident alien, sole proprietor, or disregarded entity, see the instructions for Part I, later. For other entities, it is
                                </GridItem>
                                <GridItem xs={12} className={ classes.marginVertical_10 }>
                                    <span className={ classes.colorRed }>Note:</span> If the account is in more than one name, see the instructions for line 1. Also see What Name and Number To Give the Requester for guidelines on whose number to enter.
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={5} className={ classes.marginVertical_25 }>
                                    Social security number
                                </GridItem>
                                <GridItem xs={2}>
                                </GridItem>
                                <GridItem xs={5} className={ classes.marginVertical_25 }>
                                    Employer identification number
                                </GridItem>
                                <GridItem xs={5}>
                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ `${classes.marginRight_25} ${classes.oneLetterInput}` } />

                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ `${classes.marginRight_25} ${classes.oneLetterInput}` } />

                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ classes.oneLetterInput } />

                                </GridItem>
                                <GridItem xs={2}>
                                    <div className={ classes.orLabel }>
                                            OR
                                    </div>
                                </GridItem>
                                <GridItem xs={5}>
                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ `${classes.marginRight_25} ${classes.oneLetterInput}` } />

                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                    <BaseInput type="text" className={ classes.oneLetterInput } />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} className={ `${classes.marginTop_40} ${classes.marginBottom_25}` }>
                                    <span className={ classes.partNumber } >PART 2</span><span className={ classes.partTitle } >Certification</span>
                                </GridItem>
                                <GridItem xs={12} className={ classes.marginBottom_25 }>
                                    Under penalties of perjury, I certify that:
                                </GridItem>
                                <GridItem xs={12}>
                                    1. The number shown on this form is my correct taxpayer identification number (or I am waiting for a number to be issued to me); and <br/>
                                    2. I am not subject to backup withholding because: (a) I am exempt from backup withholding, or (b) I have not been notified by the Internal Revenue Service (IRS) that I am subject to backup withholding as a result of a failure to report all interest or dividends, or (c) the IRS has notified me that I am no longer subject to backup withholding; and <br/>
                                    3. I am a U.S. citizen or other U.S. person (defined below); and <br/>
                                    4. The FATCA code(s) entered on this form (if any) indicating that I am exempt from FATCA reporting is correct.
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} className={ classes.marginVertical_25 }>
                                    <span className={ classes.colorRed }>Certification instructions.</span><br/> You must cross out item 2 above if you have been notified by the IRS that you are currently subject to backup withholding because you have failed to report all interest and dividends on your tax return. For real estate transactions, item 2 does not apply. For mortgage interest paid, acquisition or abandonment of secured property, cancellation of debt, contributions to an individual retirement arrangement (IRA), and generally, payments other than interest and dividends, you are not required to sign the certification, but you must provide your correct TIN. See the instructions for Part II, later.
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} className={ classes.marginTop_40 }>
                                    <Button className={ `${classes.btnSave} ${classes.marginRight_25}` }>
                                        Save
                                    </Button>
                                    <Button className={ classes.btnSubmit }>
                                        Submit
                                    </Button>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(setupPageStyle)(SetupPage));