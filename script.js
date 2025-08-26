function findLargest(a, b, c) {

	let arr=[a,b,c];

	let big=arr[0];
for(let i=0;i<=arr.length-1;i++){
	if(arr[i]>big){
big=arr[i];
	}
}

	return big;
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
