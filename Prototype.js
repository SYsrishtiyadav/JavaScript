//let myName = "srishti"
//let mychannel = "hello"

//console.log(myName.truelength);

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.srishti = function(){
    console.log(`srishti is present in all objects`);
}

Array.prototype.heySristi = function(){
    console.log(`Srishti says hello`)
}

//heroPower.srishti()
//myHero.srishti()
//myHero.heySrishti()
//heroPower.heySrishti()

//inheritance

const User = {
    name: "hello",
    email: "hello@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "JsAurCode"

String.prototype.trueLength = function(){
    console.log('${this}');
    //console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"srishti".trueLength()
"iceHii".trueLength()