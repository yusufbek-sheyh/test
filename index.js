// var info = alert("Assalom aleykum .!")
// var info = alert("Assalom aleykum .! najot talim oquv markaziga huw kelibsiz")
// var isName = prompt("Ismingiz", "yusufbek");

// var surName = prompt("Familiyangiz", "Nuriddinov");
// var fatherName = prompt("ochestva", "....");
// var hobby = prompt("hobiyiz "  , " football")
// var isAge = prompt("Yoshingiz", "15");
// var isAdress = prompt("adres", "Tashkent");
// var areStudent = prompt("oquvchimisiz ?", "Ha");
// var isMarried = prompt("marriend ?", "Yo'q");
// var telNumber = prompt("Telefon raqamingiz", "+9989");






// console.log("isName" + "surName");

// var result = "Assalomu aleykum " + isName + " " + surName + " " + fatherName + " "  + hobby + " " +  + isAge + " " + isAdress + " " + areStudent + " " +  isMarried + " " +  telNumber  

// console.log(result);




// alert(result)



//uy iwi samalyot biletti


// alert ( "uzbekistan samalyoti" )

//  //bilet narhlari
//   var allSm = 9612468650;
//   var Bilet = 5421580;
//   var Hotel = 2710790;
//   var Museum = 1480098;

// var result = (  Bilet +  Hotel +  Museum  );


// var money = prompt ("pulin kiriting" )

// if ( result <= money ) {
//     console.log ( "oq yol")
// }else {
//     console.log ("azgina sabr")
// }


//samalyot biletti tugaddi




///tepada oldingi uy iwiyam bor //


var TextHeader = document.querySelector (".main__text")
var elText = document.querySelector (".header__text-input")
var elselect = document.querySelector(".main__select") ;
var elBtn = document.querySelector(".header__form") ;

elBtn.addEventListener ("submit", function (evt) {
evt.preventDefault();
console.log(elText.value);
console.log (elselect.value);

var result

    if (elselect.value  === "USD") {

        result = elText.value * 10,840

        console.log (  result )

        TextHeader.textContent = result


    } else if (elselect.value === "EVRO") {

        result = elText.value * 12,144

        console.log (result)
        TextHeader.textContent = result

    } else if ( elselect.value === "RUBL") {
        result = elText.value * 129,75

        console.log (result)
        TextHeader.textContent = result
    }

})



///tepada oldingi uy iwiyam bor kamentariyada
 //




















