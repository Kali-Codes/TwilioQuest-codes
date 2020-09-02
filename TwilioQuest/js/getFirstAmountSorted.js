function getFirstAmountSorted(inputArray, number) {
inputArray = inputArray.sort();
inputArray = inputArray.splice(0, number);
return inputArray;
}
