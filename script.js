// Napraviti funkciju "calculateTax" (izracunaj porez)
// amount: 500, tax: 20
// 500 20% = 500 + 100 = 600
// 100 15% = 115

function calculateTax(amount, tax = 0.15) // opcionalni parametar

{
    return amount+(amount*tax);
}

    calculateTax(500, 0.2); // 0.2 = 20%

    calculateTax(100); // calculateTax(100, 0.15);





function getFullName(firstName, lastName, middleName= '', nickname = 'S')
{
    return firstName+" "+middleName+" "+lastName+" "+nickname;
}

 let toma = getFullName("Tomislav", "Nikolic", "Marko");
 let brane = getFullName("Sasa","Osmanovic");
    console.log(toma, brane);



 let smokesTax= calculateTax(500,0.1);
 smokesTax = smokesTax*5;
 console.log(smokesTax);