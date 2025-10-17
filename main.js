Array.prototype.first = function() {
    return this[0]
}

Array.prototype.last = function() {
    return this[this.length - 1]
}

console.log([1,2,3,4,5].first())
console.log([1,2,3,4,5].last())