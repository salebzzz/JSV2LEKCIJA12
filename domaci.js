

function login(username, password)
{
       if(username.toLowerCase() === "admin" && password.toLowerCase() === "admin")
       {
           return true;
       }
       return false;
}

let result = login('adMin', 'admiN');
console.log(result)