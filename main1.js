//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class ExpressoMachine{
constructor (brand, cost, temp, grinder, brew, steam, grinding){
this.brand = brand
this.cost = cost
this.temp = temp
this.grinder = grinder

brew() {
console.log("let's get a brewin")
}
steam() {
    console.log("It's getting steamy in here")
}
grinding() {
    console.log("from ghetto to ghetto to backyard to yard")
}

}

let gaggia = new ExpressoMachine()