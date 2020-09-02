const a = process.argv[2];
const b = process.argv[3];


if (a.toLowerCase() < b.toLowerCase()) {
	console.log(-1);
} else if (a.toLowerCase() > b.toLowerCase()) {
	console.log(1); 
} else if (a.toLowerCase() === b.toLowerCase()) {
	console.log(0);
} else {


}

