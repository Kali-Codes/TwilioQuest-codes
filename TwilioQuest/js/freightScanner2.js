function scan(freightItems) {
let contrabandIndexes = [];

for (var i in freightItems) {
  if (freightItems[i] === 'contraband') {
    contrabandIndexes.push(Number(i));
  }
}
  return contrabandIndexes;
}


