let a =prompt("enter first num")
let b =prompt("enter second num")
if(isNaN(a) || isNaN(b))
{
    throw SyntaxError("This is not allowed")
}
try {
    console.log(sum)
} catch (error ) {
    console.log("error is done!!!")
}
finally
{
    console.log("THiK")
}
let sum = parseInt(a)+parseInt(b)
console.log(alert(sum))