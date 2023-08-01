function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction(cb) {
    const fn = x => x
    return fn
}

function returnsAnAnonymousFunction(cb) {
    return (function (cb) {})
}
