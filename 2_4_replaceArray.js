 console.log(replaceArray(["Hey", "Baby", "where", "are", "hi!", "hipsters"]));

 function replaceArray(tablicaSlow){
   const  noweSlowo = [];
   for (let i=0; i<tablicaSlow.length; i++){
       const slowa = tablicaSlow[i];
        if (slowa.charAt (0) == "h" || slowa.charAt (0) == "H"){
            noweSlowo.push(slowa.toUpperCase());
        } else {
             noweSlowo.push(slowa);
              }
          }
  return noweSlowo
   }
//replaceArray (["banana", "suit", "hammer"])

// //Test:  replaceArray(["Hello", "there"])
// Zwraca:
// [ 'HELLO', 'there' ]
 
// Test:  replaceArray(["Hey!", "hey..."])
// Zwraca:
// [ 'HEY!', 'HEY...' ]