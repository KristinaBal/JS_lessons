// čia rašykite užduoties kodą
const button = document.querySelector(`.button`);

button.innerHTML = "<div>mygtukas</div>"; // ideda htlm elementa
// button.getElementsByClassName.backgroundColor = "blue";
// button.getElementsByClassName.color = "grey";

const paragraph = document.querySelectorAll(`.container p`);
const antrasParagrafas = paragraph[1];
antrasParagrafas.innerHTML = "Naujas tekstas";

const paragraphNew = document.createElement("p");// be nieko pasiimame tago pavadinima; 
const paragraph1 = document.querySelector(`.content`);//su tasku pasiimame pagal klases pavadinima;

paragraphNew.innerText = "Pridetas"//ideda i elementa teksta;
paragraph1.append(paragraphNew);//ideda elementa i elementa;

const element = document.querySelector("#image");// su # pasiimame id;
console.log(element);


element.addEventListener("click", changeImage);//iskvieciama f-ja pavadinimu changeImage, paspaudus mygtuka click;
function changeImage() {
    console.log(111);
    element.setAttribute("src", 'https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif')//setAttribute pekeicia atributa, viska kas, nera klase ar Id;
}

console.log(paragraphNew);
const paragraphAll = document.querySelectorAll("p");//paima visus vienodo tipo (klase, id, div, elemento pavad, paragr ir tt) elementus;
console.log(paragraphAll);

for (let i = 0; i < paragraphAll.length; i++) {
    console.log(paragraphAll[i]);
    paragraphAll[i].style.color = "white";
    paragraphAll[i].style.backgroundColor = "blue";

    paragraphAll[i].addEventListener("mouseover", ()=>{ //arrow function suveikia uzvedus pelyte, "mouseover";
        paragraphAll[i].style.backgroundColor = "black";//su style keiciame elemento stiliu;
    })
}


button.addEventListener("mouseover", function () {// bevarde f-ja, pakeicianti teksta, pavadinima (.textContent);
    console.log(111);
    button.textContent = 'Pakeistas pavadinimas';
});


