// 1.uzd.

//  let countries = [
//     ["Peru", 31826018,1285216],
//     ["Filipinai", 103796832, 300000],
//     ["Portugalija", 10260000, 92212],
//     ["Lietuva", 2814696, 65300],
//     ["Meksika", 130222815, 1972550],

// ];
//    for(let item of countries){
//        const salis= item[0];
//        const gyventojai = (item[1]/1000000).toFixed(2);
//        const plotas =item [2];
//        const plotasGyventojui =
//    };

// 

// 2.uzd.

// let doors = {
//     color: 'brown',
//     isOpen: false,
//     close: function(){
//         if (doors.isOpen ===true){
//             return  'Doors are open';
//         } else {
//             doors.isOpen =true;
//             return 'I am opening the doors';
//         }
//     }
// }

// 2.uzd.1

// console.log('doors');
// const doors = {
//     color: 'blue',
//     isOpen: true,
//     open: function () {
//         if (doors.isOpen) {
//             return 'doors are open';
//         } else {
//             doors.isOpen = true;
//     }
// },
// close: function(){
//     if (doors.isOpen === false){
//         return 'doors are closed';
//     }else{
//         doors.isOpen = false;
//     }
// }
// }


// console.log(doors.color);
// console.log(doors.open());
// console.log(doors.close());
// console.log(doors.isOpen);

// ??????????????????????????????????????????????????????????????????????????????
// ----------------------------------------------------
// 3.uzduotis

let savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },

    withdraw: function removeMoney(amount) {
        let verifyBalance = savingsAccount.balance - amount;
        //pvz.verifyBalance= 1000-500 = 400;
        console.log(verifyBalance);
        //console.log galima iterpti bet kur pries if, 
        //norint patikrinti turima balansa; zr.ataskaita google console 78 eilute;
        if (amount > 0 && verifyBalance >= 0) { 
            //dviguba && reiskia--> IR
            savingsAccount.balance -= amount;
        }else{
            //kai virsutine salyga netenkina, vykdyk tai, kas nurodyta zemiau, t.y. rasyk sia zinute: Obs....;
            console.log(`Obs. you can not withdraw that much ($${amount})`)
            //zinute rodoma konsoleje, su galimu max amount, butina naudoti ``,() ir $, norint gauti norima rezultata, zinute;
        }
    },
    printAccountSummary: function printAccountSummary() {

        return `Welcome! \n Your account is currently ${savingsAccount.balance} 
    and your interest rate is ${savingsAccount.interestRatePercent}%`

    }
}
console.log(savingsAccount.printAccountSummary());//saskaitos suvestine, ataskaita
console.log(savingsAccount.balance);
savingsAccount.withdraw(100);//atima 100 nuo saskaitos
console.log(savingsAccount.balance);
savingsAccount.withdraw(1000);
console.log(savingsAccount.balance);

// ------------------------------------------------------------------------

// let savingsAccount = {
//     balance: 1000,
//     interestRatePercent: 1,

//     deposit: function addMoney(amount) {
//         if (amount > 0) {
//             savingsAccount.balance += amount;
//         }
//     },

//     withdraw: function removeMoney(amount) {
//         let verifyBalance = savingsAccount.balance - amount;
//         if (amount > 0 && verifyBalance >= 0) {
//             savingsAccount.balance -= amount;
//         }
//     },
//     printAccountSummary: function printAccountSummary() {

//         return `Welcome!\nYour account is currently ${savingsAccount.balance}
//     and your interest rate is ${savingsAccount.interestRatePercent}%`

//     }
// }
// savingsAccount.withdraw(100)
// console.log(savingsAccount.printAccountSummary())
// savingsAccount.deposit(200)
// console.log(savingsAccount.printAccountSummary())

// ---------------------------------------------------------------------------------------
// const cars = [
//     { type: "BMW", price: '30.000' },
//     { type: "MERCEDES", price: '35.000' },
//     { type: "HONDA", price: '18.000' },
//     { type: "VOLVO", price: '25.000' }
// ];
// cars.forEach((element) => { console.log(element.price); })

// cars.forEach((element) => {
//     let e = `cars ${element.type[0]}${element.type.slice(1).toLowerCase()}`
//     console.log(e);
// })
