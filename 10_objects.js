// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Srishti",
    mySym: "myKey1",
    age: 20,
    location: "India",
    email: "srishti@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}
//console.log(JsUser.email)
//console.log(JsUser[email])
//console.log(JsUser["full name"])
//console.log(typeof JsUser.mySym)

JsUser.email = "srishti@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "srishti@chatgpt.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console,log(JsUser.greetingTwo());


