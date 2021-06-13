let word = "Supercalifragilisticexpialidocious"

function abbrev (word) {
   if (word.length < 3)
    console.log( word.charAt(0) + word.charAt(1) + "   " + word.length)
  else console.log(word.charAt(0) + word.charAt(1) + word.charAt(2) + " " + word.length);

 return word.charAt(0) + word.charAt(1) +  word.charAt(2) + word.length;}
  abbrev(word)
    
//word 2 = "I am your father"
//word 3 = "Supercalifragilisticexpialidocious"
//word 4 = "Yo"
//Jeśli ciąg ma mniej niż 3 znaki, skrót zostaje wypełniony spacjami. (Przyjrzyj się przykładom!//
