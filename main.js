function maxSumOfTwoRangesIn(a){
    let n = a.length, p = Array(n+1).fill(0)
    for(let i = -1;++i<n;)p[i+1] = p[i] + a[i]
    let l = Array(n).fill(-Infinity), r = Array(n).fill(-Infinity)
    let m = l[0] = a[0]
    for(let i = 0;++i<n;){
        m = Math.max(a[i], m+a[i])
        l[i] = Math.max(m,l[i-1])
    }
    m = r[n-1] = a[n-1]
    for(let i=n-1;--i>=0;){
        m = Math.max(a[i],m+a[i])
        r[i] = Math.max(m,r[i+1])
    }
    let q = -Infinity
    for(let i = -1;++i<n-1;)q=Math.max(q,l[i]+r[i+1])
    return q
}

console.log(maxSumOfTwoRangesIn([-5,9,-5,10,20]))