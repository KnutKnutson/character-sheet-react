import Firebase from 'firebase';

class Auth {
    constructor() {
        this.firebase = new Firebase(config.firebase.url);
        this.authData = this.firebase.getAuth();
    }

    authDataCallback = (authData) => {
        if (authData) {
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
            console.log("User is logged out");
        }
    };

    authenticate = () => {
        this.authData = this.firebase.getAuth();
        return this.authData;
    };

    login = (email, password, callback) => {
        let saveUser = this.saveUser;
        this.firebase.authWithPassword({
            email    : email, //"bobtony@firebase.com",
            password : password //"correcthorsebatterystaple"
        }, function(error, authData) {
            if (error) {
                //console.log("Login Failed!", error);
            } else {
                //console.log("Authenticated successfully with payload:", authData);
                saveUser(authData.uid, email);
            }
            callback(error, authData);
        });
    };

    logout = () => {
        this.firebase.unauth();
    };

    createUser = (email, password, callback) => {
        console.log('email: ', email, 'password: ', password);
        let login = this.login;
        this.firebase.createUser({
            email    : email, //"bobtony@firebase.com",
            password : password //"correcthorsebatterystaple"
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
                callback(error, userData);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
                login(email, password, callback);
            }
        });
    };

    saveUser = (uid, email) => {
        this.firebase.child('users').child(uid).set({
            email: email
        });
    };

    deleteUser = (email, password) => {
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

    changeEmail = (oldEmail, newEmail, pass) => {
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

    changePassword = (email, oldPass, newPass) => {
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
    };

    resetPassword = (email) => {
        this.firebase.resetPassword({
            email : "bobtony@firebase.com"
        }, function(error) {
            if (error === null) {
                console.log("Password reset email sent successfully");
            } else {
                console.log("Error sending password reset email:", error);
            }
        });
    };
}
var auth = new Auth();
export default auth;
