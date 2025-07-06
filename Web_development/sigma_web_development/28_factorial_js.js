function facto(n) {
    let a = Array.from(Array(n+1).keys())
    a.shift()
    let c = a.reduce((a,b)=>
        {
            return a*b
        })
    return c

}
console.log(facto(6))


