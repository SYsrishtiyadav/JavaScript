// Immediately Invoked Function Expressions(IIFE)

(function hello(){
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();
//hello()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('srishti')