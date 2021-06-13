"Kam"
"Pap"
"Noz"

function rockPaperScissors (FirtsPlayerMove, SecondPlayerMove) {
    if ((FirtsPlayerMove =="Kam" &&  SecondPlayerMove == "Noz")||
       (FirtsPlayerMove =="Pap" &&  SecondPlayerMove == "Kam")||
       (FirtsPlayerMove =="Noz" &&  SecondPlayerMove == "Pap")) {
        return 'First player wins' }
    else if (FirtsPlayerMove==SecondPlayerMove) {
        return 'Draw'}
    else {
        return 'Second player wins'
    }
       }
rockPaperScissors ("Kam", "Noz")
rockPaperScissors ("Pap", "Pap")
rockPaperScissors ("Kam", "Pap")
rockPaperScissors ("Pap", "Noz")
rockPaperScissors ("Noz", "Kam")
rockPaperScissors ("Kam", "Kam")
rockPaperScissors ("Pap", "Kam")
rockPaperScissors ("Noz", "Pap")
