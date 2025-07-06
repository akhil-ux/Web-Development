class firstclass {
    constructor(name) {
        this.name = "akhil"
        console.log("obj is created...")
    }
    fun2() {
        console.log("function 2 is called")
    }
    fun3() {
        console.log("function 3 is called")
    }
}
let a = new firstclass()
console.log(a.name)
a.fun2()    