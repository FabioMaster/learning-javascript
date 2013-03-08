var gen =  function (n){
	a = [];
	for (var i =  1; i <= n; i++) {
		a.push(i);
	}
	a.filter(function(element){
	return element %2 ===0;
})
a.map(function(element){
	return element*2;
})
a.filter(function(element){
	return element %4===0;
})
a.reduce(function(a,b){
	return a+b;
})
	return a;
}