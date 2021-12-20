"use strict";
exports.__esModule = true;
exports.ArrayComponent = void 0;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.arrayMultiply = function (myArray) {
        var array_number = [];
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 == 0 || myArray[i] % 10 == 0) {
                array_number.push(myArray[i]);
            }
        }
        return array_number;
    };
    ArrayComponent.prototype.arraySeparate = function (myArray) {
        var array_string = [];
        for (var i = 0; i < myArray.length; i++) {
            if (typeof (myArray[i]) === "string") {
                array_string.push(myArray[i]);
            }
        }
        return array_string;
    };
    ArrayComponent.prototype.arraySplit = function (str) {
        var array_number = str.map(function (e) { return parseInt(e); });
        var prime = [];
        for (var i = 0; i < array_number.length; i++) {
            var flag = 0;
            for (var j = 2; j < array_number[i]; j++) {
                if (array_number[i] % j == 0) {
                    flag = 1;
                }
            }
            if (flag == 0) {
                prime.push(array_number[i]);
                // console.log(array_number[i])
            }
        }
        return prime;
        // return array_number
    };
    ArrayComponent.prototype.arraySort = function (myArray) {
        myArray.sort(function (a, b) { return a - b; });
        return myArray;
    };
    ArrayComponent.prototype.arrayReplace = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 === 0) {
                myArray[i] = 5;
            }
        }
        return myArray;
    };
    return ArrayComponent;
}());
exports.ArrayComponent = ArrayComponent;
var myArray = [34, 45, 60, 23, 13, 25, 70];
var myArray_mixed = [34, "A", 45, 60, 23, "B", 13, 25, 70];
var array = new ArrayComponent();
console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray_mixed));
console.log(array.arraySplit(myArray.map(function (e) { return e.toString(); })));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
