//let myTablica = ["All", "I", "want", "for", "christmas", "is", "you"]

function concatArray (myTablica) {
    for (let i=0; i<myTablica.length; i++) {
        myTablica[i]};
   // console.log( myTablica [i])};
    //return arr.split(",")
    const str = myTablica.join(' ')+'.';
     console.log(str);
}
concatArray (["Kiedy", "powiem", "sobie", "dość"])

 
//Test:  concatArray(["Hello", "this", "is", "dog"]) Zwraca 'Hello this is dog.'
//Test:  concatArray(["All", "I", "want", "for", "christmas", "is", "you"])  Zwraca: 'All I want for christmas is you.'
//Test  concatArray (["Kiedy", "powiem", "sobie", "dość"])
