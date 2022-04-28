function getRndInteger(min, max, choice) {
          	Number(end = 0)
	        Number(n1 = Math.floor(Math.random() * (max - min)) + min);
          	Number(n2 = choice);
	        console.log(n2);
          //Number(n2 = 1)
          if(n1 == n2){
    	      end = 2; // gleichstand
    	      return end;
          }
          if(n1 == 1 && n2 == 2){
    	      end = 3; // win
    	      return end;
          }
          if(n1 == 1 && n2 == 3){
    	      end = 1; // lose
    	      return end;
          }
          if(n1 == 2 && n2 == 1){
    	      end = 1; // lose
    	      return end;
          }
          if(n1 == 2 && n2 == 3){
    	      end = 3; // win
    	      return end;
          }
          if(n1 == 3 && n2 == 1){
    	      end = 3; // win
    	      return end;
          }
          if(n1 == 3 && n2 == 2){
    	      end = 1; // lose
    	      return end;
          }
    	console.log(getRndInteger(1,4) + " Ergebnis");
        console.log(n1 + " Gegner")
        console.log(n2 + " Wir")  
        }
        

