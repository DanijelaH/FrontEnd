//Primer za alert:
//alert("heloo");

// Dohvatanje elementa preko id-a
var userElement = document.getElementById("user");

//console.log(userElement);
console.log("Korisnik (id=user) je:" + userElement.innerHTML);

// Dohvatanje elementa pomocu klase

console.log("Element sa klasom desc:");
var descElements = document.getElementsByClassName("desc");

//console.log("student 1:");
//console.log(descElements[0].innerHTML);
//console.log("student 2:");
//console.log(descElements[1]);
//console.log("student 3:");
//console.log(descElements[2]);


//Izmena vrednosti elementa
userElement.innerHTML = "Danijela";
console.log("Korisnik (id=user) je:" + userElement.innerHTML);

descElements[0].innerHTML = "Marija";
descElements[1].innerHTML = "Milica";
descElements[2].innerHTML = "Maja";

console.log("studenti su: "
        + descElements[0].innerHTML + ", "
        + descElements[1].innerHTML + ", "
        + descElements[2].innerHTML + "."
        );

//Provera da li je korisnik punoletan



function ageVerification() {
//    alert (ageInput);
    var ageInput = document.getElementById("age").value;

    var massageBoxElement = document.getElementById("massage-box");

    if (ageInput >= 18) {

        massageBoxElement.innerHTML = "Korisnik je punoletan";
    } else {
        massageBoxElement.innerHTML = "Korisnik nije punoletan";
    }
}

