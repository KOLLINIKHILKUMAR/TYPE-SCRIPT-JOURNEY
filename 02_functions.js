"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("Nikhil");
signUpUser("Nikhil", "Nikhil@lco.dev", false);
loginUser("h", "h@h.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return false;
}
var getHello = function (s) { return "arrow function"; };
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) { return "hero is ".concat(hero); });
function consoleError(errmsg) { console.log(errmsg); }
function handleError(errmsg) { throw new Error(errmsg); }
