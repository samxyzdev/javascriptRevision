const accountId = 14453;
let accountEmail = "sameer@google.com";
var accountPassword = "12345";
accountCity = "Bikaner";

// accountId = 2; // not allowed

accountEmail = "hc@hc.com";
accountPassword = "12121212";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var 
becuase of issue in blick scipre and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
