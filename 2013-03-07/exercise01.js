var idtmtx = function(n){
for (var i = 1; i <= n; i+=1) {
	var riga="";
	for (var j = 1; j <= n; j+=1){
		if (i === j){
			if (j === n)
				riga += 1 + "\t";
			else	
				riga += 1 + "," + "\t";
		} 
		else{
			if (j === n)
				riga += 0 + "\t";
			else	
				riga += 0 + "," + "\t";
		} 
		}	
	console.log(riga+"\n");
	}
}