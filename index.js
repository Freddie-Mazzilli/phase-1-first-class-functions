function receivesAFunction(callbackFunction) {
    callbackFunction()
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('Hi')
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('Hi')
    }
}