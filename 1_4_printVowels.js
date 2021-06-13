const vowels = ["a", "e", "i'" ,"o", "u"];

function printVowels(myString){
    let v = "";
    for (let i = 0; i < myString.length; i++) {
        const literaTestu = myString[i];
        const isVowel = vowels.includes(literaTestu);
        if (isVowel) {
            v += literaTestu;
        }
    }
    console.log(v); 
}

//printVowels("hello how are you?")
//printVowels("krwtz")
printVowels("kangaroo")
//printVowels("cheeseburger")

//Napisz funkcję „printVowels”, która przyjmuje jako argument ciąg znaków i wyświetla jedynie zawarte w nim samogłoski.
//Samogłoski to „a”, „e”, „i”, „o”, „u”.
//Oto kilka przypadków testowych:
//Test:  printVowels("hello world")
//Wynik: eoo