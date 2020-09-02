function scanAndFilter(freightItems, forbiddenString) {
let filteredItems = [];

for (var i in freightItems) {
  if (freightItems[i] !== forbiddenString) {
    filteredItems.push(freightItems[i]);
  }
}

return filteredItems;
}

