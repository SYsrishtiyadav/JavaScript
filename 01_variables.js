const accountId = 144553
let accountEmail = "srishti@google.com"
var accountPassword = "12345"
accountEmail = "Jaipur"
let accountState; // undefined

//accountId = 2 // not allowed

accountEmail = "ab@ac.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log (accountId);

/* Prefer not to use var
because of issue in block scope and function scope
*/

console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])