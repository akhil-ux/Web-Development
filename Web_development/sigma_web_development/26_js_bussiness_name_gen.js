let adjective =
{
    1: "crazy",
    2: "amazing",
    3: "fire"
}
let shop =
{
    1: "Engine",
    2: "food",
    3: "garments"
}
let final =
{
    1: "Bros",
    2: "Ltd",
    3: "Hub"


}
let randomm1 = Math.floor(Math.random() * 3) + 1
let randomm2 = Math.floor(Math.random() * 3) + 1
let randomm3 = Math.floor(Math.random() * 3) + 1
console.log(`${adjective[randomm1]} ${shop[randomm2]} ${final[randomm3]}`)