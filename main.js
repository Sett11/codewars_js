String.prototype.contains = function(str, ignoreCase = false) {
    if(str==='?')return false
    return !ignoreCase ? this.toLowerCase().match(str.toLowerCase()) !== null : this.match(str) !== null
}

console.log('hello123'.contains('123'))
console.log('hello123'.contains('123', false))
console.log('hello'.contains('123'))