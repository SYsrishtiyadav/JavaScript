function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.lo(`score is ${this.score}`);
}

const hello = new createUser("hello", 25)
const hii = createUser("hii", 250)

hello.printMe()