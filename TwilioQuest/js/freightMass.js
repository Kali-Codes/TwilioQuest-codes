function calculateMass(freightItems) {
let totalMass = 0;

for (var i in freightItems) {
	totalMass += freightItems[i].length;

}

return totalMass;
}
