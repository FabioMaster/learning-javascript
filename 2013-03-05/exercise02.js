for (var i = 1; i <= 10; i+=1) {
	var riga="";
	for (var j = 1; j <= 10; j+=1){
		if (i === j){
			if (j === 10)
				riga += 1 + "\t";
			else	
				riga += 1 + "," + "\t";
		} 
		else{
			if (j === 10)
				riga += 0 + "\t";
			else	
				riga += 0 + "," + "\t";
		} 
		}	
	console.log(riga+"\n");
	}