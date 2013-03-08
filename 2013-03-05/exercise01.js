for (var i = 1; i <= 10; i+=1) {
	var riga="";
	for (var j = 1; j <= 10; j+=1){
		if (j!==10) 
			riga += i*j+ "," + "\t";
		else
			riga += i*j + "\t";
	}
	console.log(riga+"\n");
	}