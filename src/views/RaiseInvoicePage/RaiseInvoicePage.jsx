import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import raiseInvoicePageStyle from './raiseInvoicePageStyle.jsx';
import WhiteHeader from 'components/WhiteHeader/index.jsx';
import SideNavButton from 'components/SideNavButton/index.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import CheckBox from 'components/CustomCheckBox/index.jsx';
import Button from 'components/Button/index.jsx';
import Footer from 'components/Footer/index.jsx';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'; 

function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    fileSelector.setAttribute('accept', '*.*');
    return fileSelector;
  }

class RaiseInvoicePage extends Component
{

    fields = {
    }
    
    state = {
        attachments: [],
    }

    componentDidMount(){
        this.fileSelector = buildFileSelector();
        this.fileSelector.addEventListener('change',e => this.handleCloseFileDialog(e));
    }

    handleCloseFileDialog = () => {
        if(this.fileSelector.files.item(0) === null)
            return;
        let attachments = this.fileSelector.files;
        this.setState({ attachments });
        /* console.log(this.fileSelector.files.item(0));
        var file = this.fileSelector.files.item(0); */
        
    }

    handleClickSubmit = () => {
        
        let formData = {}
        for (var field in this.fields) {
            formData[field] = this.fields[field].value;
        }

    }

    handleClickUploadAttachment = () => {
        this.fileSelector.click();
    }


    renderAttachments = () => {
        const {classes} = this.props;
        
        let fileNames = [];
        for(let i = 0; i < this.state.attachments.length;i ++)
        {
            fileNames.push(this.state.attachments.item(i).name);
        }
        return fileNames.map((filename, key) => {
            return (
                <div className={ classes.attachmentContainer } key={key}>
                    <img src="/assets/img/attachment-inactive.png" alt="attachment" className={ classes.attachmentImg }/>
                        { filename }
                </div>
            )
        })
    }

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
                        <div className={ classes.formContainer } ref={ ref => { this.form = ref } }>
                            <GridContainer>
                                <GridItem xs={12}>
                                    Enter key provided by your contact, you would have received an email
                                </GridItem>
                                <GridItem xs={12} className={ classes.marginVertical_25 }>
                                    <BaseInput className={ classes.input } inputRef={ ref => this.fields['key'] = ref } />
                                </GridItem>
                            </GridContainer>
                            <GridContainer spacing={40}>
                                <GridItem xs={3}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            Event ID, Name
                                        </GridItem>
                                        <GridItem xs={12} className={ classes.marginVertical_25 }>
                                            <BaseInput className={ classes.input } inputRef={ ref => this.fields['eventId'] = ref } />
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={3}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            Product or Service Category
                                        </GridItem>
                                        <GridItem xs={12} className={ classes.marginVertical_25 }>
                                            <BaseInput className={ classes.input } inputRef={ ref => this.fields['category'] = ref } />
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={6}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            Buyer/requestor
                                        </GridItem>
                                        <GridItem xs={12} className={ classes.marginVertical_25 }>
                                            <BaseInput className={ classes.input } inputRef={ ref => this.fields['buyer'] = ref } />
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                            <GridContainer spacing={40}>
                                <GridItem xs={9}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            Short Decription
                                        </GridItem>
                                        <GridItem xs={12} className={ classes.marginVertical_25 }>
                                            <BaseInput className={ classes.input } inputRef={ ref => this.fields['description'] = ref } />
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={3}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            Invoice value
                                        </GridItem>
                                        <GridItem xs={12} className={ classes.marginVertical_25 }>
                                            <BaseInput className={ classes.input } inputRef={ ref => this.fields['invoiceValue'] = ref }/>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem className={ `${classes.marginVertical_25} ${classes.uploadAttachmentContainer}` } onClick={this.handleClickUploadAttachment}>
                                    <span className={ classes.uploadAttachment }>Upload attachment</span><AddCircleOutlineIcon className={ classes.addIcon } onClick={ this.handleClick } />
                                </GridItem>
                            </GridContainer>
                            <div className={ classes.attachmentSection }>
                                { this.renderAttachments() }
                            </div>
                            <GridContainer>
                                <GridItem xs={12} className={ classes.marginVertical_40 }>
                                    <Button className={ classes.btnSubmit } onClick={ this.handleClickSubmit }>
                                        Submit
                                    </Button>
                                    {/* <input type="submit" value="Submit" className={ `${classes.btnSubmit}` } /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(raiseInvoicePageStyle)(RaiseInvoicePage));