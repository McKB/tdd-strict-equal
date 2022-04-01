const strictEqual = (varOne, varTwo) => {
    let result

    if (varOne == varTwo && (typeof varOne == typeof varTwo)) {
        result = true
    } else {
        result = false
    }

    return result
}

module.exports = strictEqual
