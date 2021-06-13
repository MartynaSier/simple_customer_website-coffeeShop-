
function pyramid (podstawa){
   console.log( " ".repeat(4) + "#".repeat(podstawa - 8 ));
   console.log( " ".repeat(3) + "#".repeat(podstawa - 6 ));
   console.log( " ".repeat(2) + "#".repeat(podstawa - 4 ));
   console.log( " ".repeat(1) + "#".repeat(podstawa - 2 ));
   console.log("#".repeat(podstawa))
    
}
pyramid (9)



// #########
//console.log(" ".repeat(4)+ "#".repeat(podstawa));
//console.log(" ".repeat(3)+ "#".repeat(podstawa+2));
//console.log(" ".repeat(2)+ "#".repeat(podstawa+4));
//console.log(" ".repeat(1)+ "#".repeat(podstawa+6));
//console.log("#".repeat(podstawa+8));