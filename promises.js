
var promise = new Promise(function (resolve, reject) {
    resolve("JavaScript Promises");
});
promise.then(function (successMessage) {
    console.log(successMessage);
},
    function (errorMessage) {
        console.log(errorMessage);
    })