const prizeCounter = a => {
    let u = new Set(), o = {'R':500, 'B':300, 'G':200}, t = 0
    for(let i=-1;++i<a.length;){
        if(!u.has(a[i])){
            t += 100
            x = a.slice(i,i+3)
            if((x.length === 3) && new Set(x).size === 1){
                u = new Set([a[i]])
                t += o[a[i]] + 200
                i += 2
            }
        }
    }
    return t
}

console.log(prizeCounter(['R', 'R', 'R', 'G', 'B', 'R', 'B', 'B', 'B', 'R']))