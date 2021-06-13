 let liczbaCalk= "900"
 //let liczba której szukam (wynik) =  451- 4 - 5 - 1 = 441

function subDigits (liczbaCalk){
    if (liczbaCalk<0){
          console.log("Argument Error");
        }
    else {
    let odejmowanaLiczba = String(liczbaCalk).split('') .map(Number);
        {console.log(odejmowanaLiczba)}
    for (let i=0; i< odejmowanaLiczba.length; i++){
           liczbaCalk -= odejmowanaLiczba[i];}
         {console.log(liczbaCalk)};
        }
   return liczbaCalk
    }
 subDigits (liczbaCalk)


//dla subDigits(12) --> Zwraca:9
//dla subDigits(4000000) --> Zwraca: 3999996
// dla  subDigits(-12) -->Zwraca: 'Argument Error'
// dla subDigits(451) -->Zwraca: 441
//dla subDigits(0) --> Zwraca: 0
//Napisz funkcję „subDigits”, która jako argument przyjmuje liczbę całkowitą i zwraca wynik, który jest wprowadzoną liczbą po odjęciu od niej wartości jej cyfr.
//Na przykład: jeśli liczbą jest 12, funkcja zwraca  12 - 1 - 2 => 9.
//Jeśli liczba jest ujemna, funkcja zwraca komunikat „Argument Error”.