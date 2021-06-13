
function evenIndexes (slowo){
    const mojaTablica = slowo.split("");
    let mojeTablice = mojaTablica.filter((wartosc, index) => {
            return index % 2 === 0;
                      })
                      console.log(mojeTablice);
        }

evenIndexes("You're weird")


// Test:  evenIndexes("lol")
// Zwraca:
// [ 'l', 'l' ]
 
// Test:  evenIndexes("You're weird")
// Zwraca:
// [ 'Y', 'u', 'r', ' ', 'e', 'r' ]
 
// Test:  evenIndexes("")
// Zwraca:
// [ ]
