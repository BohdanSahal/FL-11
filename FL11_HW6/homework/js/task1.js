let A1,A2,B1,B2,C1,C2 = 0;
let C,XA,XB = 0;
let arr = prompt('Enter your numbers (dots position separate by comma): A1,A2,B1,B2,C1,C2').split(',');

A1=parseInt(arr[0]); 
A2=parseInt(arr[1]);
B1=parseInt(arr[2]);
B2=parseInt(arr[3]);
C1=parseInt(arr[4]);
C2=parseInt(arr[5]);

if ( C1 ===(A1+B1)/2 ) {
		if (C2 ===(A2+B2)/2) {
		    console.log('true');
		}   else{
		    console.log('false');
		}
} else {
	console.log('false');
}