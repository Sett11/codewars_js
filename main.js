function countAndSort(a) {
    let n = a.length, p = ~~(n / 2), r = {}
    for(let i = -1; ++i < n;){
        for(let j = -1; ++j < n;){
            if(a[i][j] !== '*'){
                let t = a[i][j].toLowerCase(), x = Math.abs(p - i), y = Math.abs(p - j)
                if(r[t] === undefined)r[t] = [0, 0]
                r[t][0] += Math.min(p-x+1,p-y+1) * (a[i][j]===t?1:2)
                r[t][1] += 1 + (a[i][j] !== t)
            }
        }
    }
    return Object.entries(r).sort((a, b) => (a[1][0]-b[1][0]) || (b[1][1] - a[1][1]) || a[0].localeCompare(b[0])).map(e=>e[0])
}

console.log(countAndSort([
         "z**",
         "a**",
         "**z"
      ]))