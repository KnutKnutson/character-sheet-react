import React from 'react';
import TextField from 'material-ui/lib/text-field';

class Username extends React.Component {
    constructor(props) {
        super(props);

    };

    //renderUsernameField = () => {
    //    let fieldName = 'username';
    //    this.state.validationErrors[fieldName] = [];
    //    if (!this.state[fieldName]) {
    //        this.state.validationErrors[fieldName].push(this.getText('login_username_error_required'));
    //    }
    //    let errors = this.hasBeenTouched(fieldName) ? this.state.validationErrors[fieldName].join(' ') : '';
    //    return (
    //        <TextField
    //            floatingLabelText={this.getText('email')}
    //            short={true}
    //            displayErrorInLabel={false}
    //            data-test="username-input"
    //            defaultValue={this.state[fieldName]}
    //            name={fieldName}
    //            errorText={errors}
    //            className="full-width-input"
    //            onChange={this.onChange}
    //            onBlur={this.onBlur}
    //            disabled={this.state.submitInFlight}/>
    //    );
    //};
}

export default Username;
