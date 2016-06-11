"use strict";
var Welcome = (function () {
    function Welcome() {
        this.heading = 'Welcome to the Aurelia Navigation App!';
        this.firstName = 'John';
        this.lastName = 'Doe';
    }
    Object.defineProperty(Welcome.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Welcome.prototype.submit = function () {
        alert("Welcome, " + this.fullName + "!");
    };
    return Welcome;
}());
exports.Welcome = Welcome;
