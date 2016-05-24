import React from 'react';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alertVisible: false,
            alertMessage: '',
            validationErrors: {},
            touchedFields: {}
        };
    }

    updateField = (e, text, callback) => {
        let fieldName = e.currentTarget.name;
        let fieldValue = e.target.value;
        let stateChange = {};
        stateChange[fieldName] = fieldValue;
        this.setState(stateChange, callback);
    };

    hasBeenTouched = (field) => {
        return (this.state.touchedFields[field] !== undefined);
    };

    onChange = (e, text, callback) => {
        this.updateField(e, text, callback);
    };

    onBlur = (e, text, callback) => {
        //this.state.touchedFields[e.currentTarget.name] = true;
        this.updateField(e, text, callback);
    };

    isFormValid = () => {
        for (var field in this.state.validationErrors) {
            if (this.state.validationErrors.hasOwnProperty(field)) {
                if (this.state.validationErrors[field].length !== 0) {
                    return false;
                }
            }
        }
        return true;
    };

    handleAlertDismiss = () => {
        this.setState({ alertVisible: false });
    };

    handleAlertShow = (text) => {
        this.setState({
            alertVisible: true,
            alertMessage: text,
            submitInFlight: false
        });
    };

    closeCallback = () => {
        this.handleAlertDismiss();
        this.props.buttonCallback();
    };

    submitCallback = (error, userData) => {
        if (error) {
            this.handleAlertShow(error);
        } else {
            this.closeCallback();
        }
    };

    renderAlert = () => {
        if (this.state.alertVisible) {
            //return (
            //    <Alert
            //        onDismiss={this.handleAlertDismiss} >
            //        {this.state.alertMessage}
            //    </Alert>
            //);
        }
    };

    render() { }
}
