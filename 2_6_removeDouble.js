const tablica = ["juice", 56, "water", "ice", "water", 1, 56, "ice", 1,  "cream", "juice"];

function removeDouble (tablica) {
  let unique = {};
  tablica.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  {console.log(Object.keys(unique))};
  return Object.keys(unique);
}
removeDouble(tablica); 

// Oto kilka przypadków testowych:
// Sekwencja testowa:  
// var stuff = ["suit", "clock", "butter", "suit"]
// removeDouble(stuff)
// console.log(stuff)
// Wynik: // [ 'clock', 'butter', 'suit' ]
// Sekwencja testowa:  
// var mixed = ["hello", "hello", 23, -3, 23, "hello"]
// removeDouble(mixed)
// console.log(mixed)
// Wynik: [ -3, 23, 'hello' ]
