// // Pvz.1

// //kreipimasis i funkcija skliausteliu pagalba;

// // function sayHi() {
// //     console.log('Hi!');
// // }

// // const price = 1000;

// // const car = {
// //     drive: function () {
// //         console.log('Brrr');

// //     },
// //     sayHi: sayHi,
// //     //galima nurodyti ir priskirti reiksme is uz objekto;
// //     //butina padeti kableli gale po sayHi;

// //     price: 1000,
// //     //butina padeti kableli gale, be jo meta klaida consoleje;

// // }
// // car.drive() 
// // car.sayHi()
// // console.log(car.price);

// // Pvz.2
// // function sayHi() {
// //     console.log('Hi!');
// // }

// // const car = {
// //     //i metoda galima paduoti bet kokia reiksme;
// //     price: 1000,
// //     health: 100,
// //     drive: function () {
// //         console.log('Brrr');

// //     },
// //     crash: function (damage) {
// //         this.health -= damage;
// //         //siuo atveju health yra 100 is kurios galima atimti tiek kiek reikia  (damage/crash) pagal nurodyta salyga; pvz 100-10=90 ir tt.Zr.isloginta konsole;
// //         //su sia reiksme funkcijos viduje galma manipuliuoti;
// //     }



// // }
// // car.drive()
// // console.log(car.price);
// // console.log('Car health:', car.health);

// // car.crash(10);
// // //nurodant crash *METODA* duodam masinai 10% damage, tiek sumazeja jos verte;
// // console.log('Car health:', car.health);

// // car.crash(15);
// // //sumazinama masinos verte 15%;
// // console.log('Car health:', car.health);

// // 3.pvz. //kuriant zaidima;

// // const player = {
// //     health: 100,
// //     fight: function (damage) {
// //         this.health -= damage;
// //         //su THIS nurodome kas ivyksta su funkcija ar Player;
// //     }

// // }
// // const player2 = {
// //     health: 100,
// //     fight: function (damage) {
// //         this.health -= damage;
// //     }
// // }

// // player.fight(10);
// // player2.fight(10);


// // 4. pvz.

// const bankoSaskaita = {
//     viso: 0,
//     pridetiPinigu: function (kiekis) {
//         this.viso += kiekis;
//         //funkcija nurodo prideti pinigu i saskaita;
//         //Metodas: pridetiPinigu;
//         console.log(`Tu isidejai (${kiekis}) pinigu. Tau liko ${this.viso}`)
//     },

//     isimtiPinigu: function (kiekis) {
//         this.viso -= kiekis;
//         //funkcija nurodo nuimti7numinusuoti pinigus is saskaitos
//         //Metodas: isimtiPinigu;
//         console.log(`Tu issiemei (${kiekis})pinigu. Tau liko  ${this.viso}`)
//     },

//     issiimtiViska: function () {
//         console.log(`Tu issiemei ${this.viso} pinigu, tau liko 0 :/`);
//         this.viso = 0

//     }
// }

// bankoSaskaita.pridetiPinigu(10);
// // console.log('Viso:', bankoSaskaita.viso);

// bankoSaskaita.pridetiPinigu(100);
// // console.log('Viso:', bankoSaskaita.viso);

// bankoSaskaita.isimtiPinigu(6);
// // console.log('Viso:', bankoSaskaita.viso);

// bankoSaskaita.issiimtiViska();
// // console.log('Viso:', bankoSaskaita.viso);


// // 5.pvz.

// //Gavom alga
// bankoSaskaita.pridetiPinigu(1000);

// //Susikuriame parduotuve, susigalvojame kainas;

// const kainos = {
//     kebabas: 7,
//     alusNealkoholinis: 2,
//     bulvytes: 2.5
//     //kaina nurodoma su tasku, ne kableliu!;

// }

// //galima paduoti nuoroda i ogjekto reiksme(reference);

// bankoSaskaita.isimtiPinigu(kainos.kebabas);
// //susiranda kebabo kaina, kainose ir issima 7;
// //OBS.4 ir 5 pvz susije vienas su kitu!
// //funkcijoje galima naudoti ir naujus, ir senus kintamuosius salygos pradzioje;

// bankoSaskaita.isimtiPinigu(kainos.alusNealkoholinis);
// //susiranda ir nuskaiciuoja alaus kaina nuo korteles;

// console.log('-------------------------------------------------------------------------------');

// //6.pvz.
// //funkcijoje galima panaudoti ir kt funkcija, masyva ,pvz, forEach;

// const produktuKainos = [
//     { pavadinimas: 'kebabas', kaina: 7 },
//     { pavadinimas: 'alusNealkoholinis', kaina: 2 },
//     { pavadinimas: 'bulvytes', kaina: 2.5 },
// ]

// // kainos.length //kainu SAVYBE; ju reiksmes nekvieciamos, nes buna konkrecios, nustatytos,jas is karto grazina;
// //forEach nurodo, isveda kiekvieno atskirai produkto kaina;
// produktuKainos.forEach(function (produktas) {
//     console.log(`Produktas: ${produktas.pavadinimas}, kainuoja: ${produktas.kaina}`);
// })

// //kainos METODAS, kuris yra kvieciamas i vidu paduodant funkcija!
// //funkcijos ARGUMENTAS yra kaina;

// console.log('---------------------------------------------------------------------------------');


// //7.pvz.
// const vienasProduktas = { pavadinimas: 'kebabas', kaina: 7 };
// function papasakokApieProdukta(produktas) {
//     console.log('produktas, produktas');
//     console.log(`Produktas: ${produktas.pavadinimas}, kainuoja: ${produktas.kaina}`);
// }
// //turime funkcija, kurios prasome papasakoti apie viena produkta;

// papasakokApieProdukta(vienasProduktas);

// //i f-ja arba metoda galima paduoti nuoroda, kitaip vadinama reference;
// //i f-ja (priklausomai kaip ta f-ja yra sukonstruota, galima paduoti iv. dalykus);


// //8.pvz. TEISINGAS SINTAKSES RASYMAS,EILISKUMAS//Pagal uzduoti konsoleje turime iskviesti Hi;

// 1.variantas:

// function greet() {
//     console.log('Hi');
//     //kad GREET islogintu konsoleje, reikia pakviesti f-ja (),taip kaip ji vadinasi, uz siu skliaustu{}
// }
// greet();

// 2.variantas://funkcija gali paimti kazkoki argumenta, reiksme pas save i vidu ir konsoleje tai atvaizduoti;

// function greetName(name) {
// console.log(`Hi ${name}`);    
// }

// greetName('Renaldas');

// 3. variantas:// funkcija kuri sudeda 2 skaicius; i f-ja galima paduoti daugiau nei 1 parametra;

// function sum(a, b) {
//     console.log(a + b);
// }
// sum(3, 4);


// --------------------------------------------------------------------
// function greetTwoNames(name1, name2) {
//     console.log(`Hi ${name1} and ${name2}`); 
// }

// greetTwoNames ('Renaldas', 'Mantas');
//i sita funkcija yra paduoti du argumentai, t.y. Renaldas ir Mantas;

// ------------------------------------

// const namai = {
//     zidinys: false,

// };
// console.log(namai.zidinys);
// //islogina konsoleje FALSE;

// //---------------------------------//

// console.log(car.price);//taip kvieciame savybes, atributai, pozymiai metodo, turintys reiksme (skaiciu, teksta, boolin reiksme true/false);
// console.log(car.drive());// taip kvieciamas metodas;

//--------------------------------------------------//
// Mano variantas:

// const namai = {
//     zidinys: true,
//     zidinysRusena: function () {
//         console.log('Zidinys uzkurtas');
//     }
// }
// console.log(namai.zidinysRusena());

// 9.pvz.

// Kryptys:
// S - siaure
// P - pietus
// V - vakarai
// R - rytai
//

const zmogeliukas = {
    vardas: 'Zmogeliukas',
    pozicijaX: 0,
    pozicijaY: 0,
    kryptis: 'S',

    //zemiau sukuriamas METODAS zmogeliukui eiti;

    eik: function (zingsniai) {
        console.log(`${this.vardas} eina ${this.kryptis} kryptimi ${zingsniai} zingsniu`)
        //su sia salyga konsole islogina: Zmogeliukas eina S kryptimi 10 zingsniu;
        if (this.kryptis === 'S') {
            this.pozicijaY += zingsniai;
        } else if (this.kryptis === 'P') {
            this.pozicijaY -= zingsniai;
        } else if (this.kryptis === 'V') {
            this.pozicijaX -= zingsniai;
        } else if (this.kryptis === 'R') {
            this.pozicijaX += zingsniai;
        }
    },
    //nurodomas kt METODAS 'ziurek';
    ziurek: function (kryptis) {
        this.kryptis = kryptis;
    }
}

console.log(zmogeliukas);
zmogeliukas.eik(10);
console.log(zmogeliukas);
zmogeliukas.eik(10);
console.log(zmogeliukas);
//po siu nurodymu konsoleje matyti, kad zmogeliukas eina 10+10(20) zingsniu S kryptimi;
zmogeliukas.ziurek('P');
//liepiama zmogeliukui ziureti i Pietus;
zmogeliukas.eik(10);
//vel liepiama zmogeliukui eiti 10 zingsniu;
zmogeliukas.ziurek('V');
zmogeliukas.eik(10);


//P.S. kuriant Metoda reikia nurodyti veiksma, funkcija, kuria jis atliks.

// NARSYKLEI SUTEIKIAMOS FUNKCIJOS:

//console.log () yra konsoles objekto metodas;
//alert() yra paprasta funkcija;
//dokument.write() yra metodas dok.objekto;
//myArray.join('') metodas masyvui;

// Metodais yra vadinamos funkcijos, kurios yra aprasytos objekto viduje; objektas +funkcija;
// Funkcija yra paprastai iskvieciama su paprastais skliausteliais;

// **************************************************************************************************************
// Lokalus kintamieji yra pasiekiami ir aprasomi f-jos viduje;

// Isoriniai kintamieji-jie gali buti pakvieciami i f-jos vidu;
//f-ja gali keisti isorinius kintamuosius;

// PVZ:
let metai = 2021;

function svestiNaujusMetus() {
    metai += 1;
    console.log(`Valio! , sutikome ${metai} metus`);
}

//iskvietus f-ja 'svestiNaujusMetus' 3 kartus, kiekviena karta pridedama po 1 metus pagal auksciau nurodyta formule metai +=1: gaunasi, 2022,2023,2024
svestiNaujusMetus();
// 2022
svestiNaujusMetus();
// 2023
svestiNaujusMetus();
// 2024

//is isores pasiekti f-jos kintamuju negalima;

function apkeiskRaidesVietomis(tekstas) {
    const pirmaRaide = tekstas[0];//lokalus kintamasis;
    const antraRaide = tekstas[1];//lokalus kintamasis;

    return antraRaide + pirmaRaide;
    //viskas kas uz return sakinio,nebebus vykdoma!!!
    console.log('hi');//nevykdoma;
}
console.log(apkeiskRaidesVietomis('ab'));
// pirmaRaide//negalime issikviesti, nes visos constantos, kurias deklaruojame lieka funkcijos viduje!

//PARAMETRAI
// F-jai galime paduoti duomenis i jos vidu.Jie vadinami Argumentais arba Parametrais;

//RETURN-f-jos grazina reiksme kodui kviecianciam f-ja;

const rezultatas = apkeiskRaidesVietomis('xy');
console.log('Rezultatas yra:', rezultatas);
apkeiskRaidesVietomis('bc');

//jei f*ja neturi return, jos reiksme pagal ntylejima bus UNDEFINED;

function printHello() {
    console.log('hello');
}

const rezultatas2 = printHello();
console.log('Rezultatas2 yra:', rezultatas2);//rezultatas yra undefined, printHello nieko negrazina;

//f-ja geriausia iskviesti su zodeliais: get, check, create ir tt.;

// ****************************************************************************
//FUNKCIJA KAIP KONSTRUKTORIUS

const Car = function (brand, price, productionYear) {//sita salyga galima naudoti keleta kartu skirtingoms masinoms;
    this.brand = brand;
    this.price = price;
    this.productionYear = productionYear;
    this.calculateAge = function () {
        const currentYear = 2021;
        return currentYear - this.productionYear;

    }
}

const bmw = new Car('BMW', 30000, 2005);
const audi = new Car('Audi', 2000, 1998);

console.log(bmw);
console.log(bmw.calculateAge());//paskaiciuoja ir konsoleje parodo masinos amziu;
console.log(audi);
console.log(audi.calculateAge());
console.log('audi brand is:', audi.brand);

//THIS - nuoroda i scope; globalus objektas, turintiss visokiu narsykliu savyje;

console.log(this);//global scope;

const doors = {
    isOpen: false,
    price: 200,
    color: 'red',
    getThis: function () {
        console.log(this);
    }
}
doors.getThis();//jis yra nuoroda i konteksta, scopa
///----------------------------------------------------------------//
function someFunction() {
    console.log(this);
}

someFunction();

//----------------------------------------------------------------//
function someFunction() {
    const obj = {
        name: 'Flower',
        getName: function () {
            console.log(this.name);
        }
    }
    return obj;
}
const flower = someFunction();
flower.getName()

//-------------------------------------------------------------------------//
// KLASES turi konstruktoriu, ji deklaruojame;naujas budas rasyti brezinius, patogesnis

class Vehicle {
    constructor(brand, price, productionYear) {
        this.brand = brand;
        this.price = price;
        this.productionYear = productionYear;
    }
}
const bike = new Vehicle('MTB', 2100, 2021);
console.log(bike);
//-------------------------------------------------------------------------------------//

class Shape {
    constructor(color) {
        this.color = color;
    }
}

sayColor() {
    console.log('This is my color:', this.color);

}

class Triangle extends Shape {    //triangle paveldi shape class bruozus;
    getAngleCount() {
        return 3;
    }

}
const myNewTriangle = new Triangle('Red');

console.log(myNewTriangle.color);
console.log(myNewTriangle.getAngleCount());
myNewTriangle.sayColor();


const myNewShape = new Shape('Blue');
console.log(myNewShape.color);
//console.log (myNewShape.getAngleCount());


//pavyzdys------------------------------------------------//

class HousHold {
    persons = [];
    cars = []
    houses = []

    addPerson() {
        this.persons.push(person)
    }

}
const client = new HousHold();
client.addPerson({name: 'tomas', personalCode: 1234})
client.addPerson({name: 'renata', personalCode: 2234})

const obj = {

}

//pavyzdys------------------------------------------//

const Lietuva = {
    miestai :[
        'vilnius',
        'kaunas',
        'klaipeda',
        'panevezys',
        'siauliai'
    ],
plotas: 65000,
gyventojai: 2795000,
emigruok: function(){
    console.log(':/emigruoja gyventojai')
    this.gyventojai -= 10000;

}
class Country {

    construktor (name, area, population, cities) {
        this.name = name;
        this.area = area;
        this.population = population;
        this.cities = cities;
    }

    leave (){
        console.log(':/emigruoja gyventojai')
if (this.population < 100000){
    console.log(`There is not enough people to leave a country`);
    return;
}
        this.population -= 100000;//si salyga nebesivykdys po return;
    }
}

const LietuvosMiestai = ['vilnius', 'kaunas', 'klaipeda','panevezys','siauliai']

const Lietuva = new Country ('Lietuva', 65000, 2795000, LietuvosMiestai)

}

console.log('Lietuvoje gyventoju:', Lietuva.population);
Lietuva.leave();
console.log('Lietuvoje gyventoju:', Lietuva.population);

const Latvija = new Country ( 'Latvija', 0, 0, []);
console.log('Latvijoje gyventoju:', Latvija.population);
console.log(Latvija);
Latvija.leave();


// console.log('Lietuvoje gyventoju:', Lietuva.gyventojai);
// Lietuva.emigruok();
// console.log('Lietuvoje gyventoju:', Lietuva.gyventojai);