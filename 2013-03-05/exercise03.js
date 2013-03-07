var line = "";
for (var i = 1; i < 11; i++) {
	for (var j = 1; j < 11; j++) {
		if (j===10){
			if(j===i)
				line+= "1";
			else line+= "0";
		}
		else if(j===i)
			line+= "1, \t";
		else line+= "0, \t";
	};
	console.log(line);
	if(i!==10)
	line = "";
};