function palindrom(p) {

var provera=true;

for( i = 0; i < p.length; i++) { 
	
	if (p[i]!==p[p.length-i-1])

		provera=false;
}
	return provera;
}
var p ='ana'

if (palindrom(p)) {

	console.log(p + ' jeste palindrom');
}

else {
	console.log(p + ' nije palindrom');
}
