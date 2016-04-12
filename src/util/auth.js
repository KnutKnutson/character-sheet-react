import Firebase from 'firebase';

export default class Auth {
    constructor() {
        this.firebase = new Firebase(config.firebase.url);
    }

    authDataCallback = (authData) => {
        if (authData) {
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
            console.log("User is logged out");
        }
    };

    authenticate = (callback) => {
        return this.firebase.getAuth();
    };

    login = () => {
        this.firebase.authWithPassword({
            email    : "bobtony@firebase.com",
            password : "correcthorsebatterystaple"
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });
    };

    createUser = () => {
        this.firebase.createUser({
            email    : "bobtony@firebase.com",
            password : "correcthorsebatterystaple"
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
        });
    };

    saveUser = () => {

    };

    deleteUser = () => {
        this.firebase.removeUser({
            email    : "bobtony@firebase.com",
            password : "correcthorsebatterystaple"
        }, function(error) {
            if (error === null) {
                console.log("User removed successfully");
            } else {
                console.log("Error removing user:", error);
            }
        });
    };

    changeEmail = () => {
        this.firebase.changeEmail({
            oldEmail : "bobtony@firebase.com",
            newEmail : "bobtony@google.com",
            password : "correcthorsebatterystaple"
        }, function(error) {
            if (error === null) {
                console.log("Email changed successfully");
            } else {
                console.log("Error changing email:", error);
            }
        });
    };

    changePassword = () => {
        this.firebase.changePassword({
            email       : "bobtony@firebase.com",
            oldPassword : "correcthorsebatterystaple",
            newPassword : "neatsupersecurenewpassword"
        }, function(error) {
            if (error === null) {
                console.log("Password changed successfully");
            } else {
                console.log("Error changing password:", error);
            }
        });
    }

    resetPassword = () => {
        this.firebase.resetPassword({
            email : "bobtony@firebase.com"
        }, function(error) {
            if (error === null) {
                console.log("Password reset email sent successfully");
            } else {
                console.log("Error sending password reset email:", error);
            }
        });
    }
}
