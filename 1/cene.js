
var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];

 for( i = 0; i < cene.length; i++) {

 	if (cene[i]<50)
 	{
 		cene[i]=cene[i]+0.18*cene[i];
 		}

 	if (cene[i]>=50)
 	{
 		cene[i]=cene[i]+0.08*cene[i];
 		}
 	}

 	console.log(cene);