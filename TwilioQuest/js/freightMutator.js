function mutate(freightItems) {
let mutatedItems = [];
  mutatedItems = freightItems.map(item => item.toUpperCase());
return mutatedItems;
}


