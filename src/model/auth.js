import csFirebase from './firebase';

class Auth {
    constructor() {
        this.auth = csFirebase.app().auth();
        this.user = {};
    }

    bind = (component) => {
        var parent = this;
        this.auth.onAuthStateChanged(function(user) {
            if (user) {
                parent.user = user;
                // TODO: only save user if new.
                parent.saveUser(user.uid, user.email);
            } else {
                parent.user = {};
            }
            component.setState({
                loggedIn: user !== null,
                user: parent.user
            });
        });
    };

    authDataCallback = (authData) => {
        if (authData) {
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
            console.log("User is logged out");
        }
    };

    login = (email, password, callback) => {
        //let callback = callback;
        this.auth.signInWithEmailAndPassword(
            email,   //"bobtony@firebase.com",
            password //"correcthorsebatterystaple"
        ).then(function() {
            callback(null, true);
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            callback(errorMessage);
        });
    };

    logout = () => {
        this.auth.signOut().then(function() {
            // Sign-out successful.
        }, function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    };

    createUser = (email, password, callback) => {
        //console.log('email: ', email, 'password: ', password);
        let parent = this;
        this.auth.createUserWithEmailAndPassword(
            email, //"bobtony@firebase.com",
            password //"correcthorsebatterystaple"
        ).then(function() {
            // on successful signup the user is logged in automatically. The auth will update with the new user.
            callback(null, true);
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            callback(errorMessage);
        });
    };

    saveUser = (uid, email) => {
        csFirebase.app().database().ref('/users/' + uid).set({
            email: email
        });
    };

    deleteUser = (email, password) => {
        //this.firebase.removeUser({
        //    email    : "bobtony@firebase.com",
        //    password : "correcthorsebatterystaple"
        //}, function(error) {
        //    if (error === null) {
        //        console.log("User removed successfully");
        //    } else {
        //        console.log("Error removing user:", error);
        //    }
        //});
    };

    changeEmail = (oldEmail, newEmail, pass) => {
        //this.firebase.changeEmail({
        //    oldEmail : "bobtony@firebase.com",
        //    newEmail : "bobtony@google.com",
        //    password : "correcthorsebatterystaple"
        //}, function(error) {
        //    if (error === null) {
        //        console.log("Email changed successfully");
        //    } else {
        //        console.log("Error changing email:", error);
        //    }
        //});
    };

    changePassword = (email, oldPass, newPass) => {
        //this.firebase.changePassword({
        //    email       : "bobtony@firebase.com",
        //    oldPassword : "correcthorsebatterystaple",
        //    newPassword : "neatsupersecurenewpassword"
        //}, function(error) {
        //    if (error === null) {
        //        console.log("Password changed successfully");
        //    } else {
        //        console.log("Error changing password:", error);
        //    }
        //});
    };

    resetPassword = (email) => {
        //this.firebase.resetPassword({
        //    email : "bobtony@firebase.com"
        //}, function(error) {
        //    if (error === null) {
        //        console.log("Password reset email sent successfully");
        //    } else {
        //        console.log("Error sending password reset email:", error);
        //    }
        //});
    };
}
var auth = new Auth();
export default auth;
