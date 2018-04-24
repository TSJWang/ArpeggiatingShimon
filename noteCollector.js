inlets = 2;
outlets = 1;

var nOuts = [];
var index = nOuts.indexOf
var i = 0;

/**when recieve midi message, update list**/
function msg_int(A, B)
{
	if (B>0){
		nOuts.push(A);		
	}
	if (B==0){
		nOuts.splice(nOuts.indexOf(A), 1);
	}
}



/*****for metro bang****/
function bang()
{
	if(nOuts.length > 1){	//handlint two notes
		post(nOuts + "\n");
		outlet(0, nOuts[i]);
		i++;
		if(i==nOuts.length){i=0;}
	}
	if(nOuts.length == 1){ // handling one note
		post(nOuts + "\n");
		outlet(0, nOuts);
		i=0;
	}
/***********okay this works with just two notes**********/
//theres a problem if you recieve (60.. 60,64)
//	if(nOuts.length >= 2){
//		post(nOuts + "\n");
//		outlet(0, nOuts[i]);
//		if (i==0){i=1;}
//		else if(i==1){i=0;}
//	}
	
/*************for some reason this doesnt work*****************/	
//	if(nOuts.length >= 1)
//	{
//		post("BANGED" + nOuts[i]+"\n");
//		//post(i + "\n");
//		outlet(0, nOuts[i]);
//	
//		i++;
//		if (i==nOuts.length){i=0;}
//	}
}
