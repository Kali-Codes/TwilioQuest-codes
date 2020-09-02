function scan(freightItems) {
let contrabandCount = 0;

for(var i in freightItems) {
  if (freightItems[i] == 'contraband') {
    contrabandCount++;
    //console.log()
  }
}
  return contrabandCount;
}

