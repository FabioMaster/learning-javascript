var line = "";
for (var i = 1; i < 11; i++) {
	for (var j = 1; j < 11; j++) {
		if(j===10)
			line+= (j*i);
		else line+= (j*i+",\t");
	};
	console.log(line);
	if(i!==10)
	line = "";
};

console.log("\n");