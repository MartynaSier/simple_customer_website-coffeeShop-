
function averageMinMax (tablica){
    //czym jest moja tablica --> let tablica = [-8, 1, 2, 3]; --> zbiór dowolnych liczb calkowitych
    let wynikMin = Math.min.apply(Math, tablica);
       {console.log("Min: " + wynikMin)};   // 1
    let wynikMax = Math.max.apply(Math, tablica);
       {console.log("Max: "+ wynikMax)}; // 9
    // average to  = sum/elmt.length;
    let suma =  tablica.reduce((a, b) => a + b, 0);
      //  {console.log(suma)};
     let wynikAve = suma/tablica.length;
          // {console.log(wynikAve)} ;
           {console.log("Average: " + Math.floor(wynikAve))};
}
averageMinMax ([-8, -2, 1, 2, 3, 7, 9, ]);

// Napisz funkcję „averageMinMax”, która jako argument przyjmuje tablicę liczb całkowitych, a następnie wyświetla wartość minimalną, maksymalną i średnią wszystkich liczb.
// Przypomnienie: średnia zbioru liczb całkowitych jest ich sumą podzieloną przez ich liczbę. Wynik powinien być zaokrąglony w dół metodą „floor”.
// Oto kilka przypadków testowych:
// Test:  averageMinMax([-42, 0, 42])   Wynik:  /    Min: -42    /    Max: 42   / Average: 0
// Test:  averageMinMax([30, 20, 100])    Wynik:          /   Min: 20      /   Max: 100  /   Average: 50
// Test:  averageMinMax([-23, -4, -12])   Wynik:   / Min: -23 / Max: -4/ Average: -13
