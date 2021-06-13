const stringImie = "James Antonio Rodrigo"
let stringNazwisko = "Bond Kowalski"

function displayName (stringImie, stringNazwisko){
    const tablicaImie = stringImie.split(" ");
    const tablicaImieBez = tablicaImie.shift()
    const tablicaNazwisko = stringNazwisko.split(" ");
    const tablicaNazwiskoBez = tablicaNazwisko.shift()
    //jezeli w zbiorze jest wiecej niz 1 , to wez tylko pierwsze 
    console.log("My name is " + tablicaNazwiskoBez + ". " +  tablicaImieBez +" " + tablicaNazwiskoBez)
}
displayName (stringImie, stringNazwisko)