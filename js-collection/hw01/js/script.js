// TASK 1
(() => {
  for(i = 1; i < 11; i++){
    i % 3 === 0? console.log("FizBuz"): i % 2 === 1 ? console.log("Buz") : console.log("Fiz");;;
  }
  // OR

  for (i = 0; i < 10; i++){
    if ( i === 0) continue;
    else if (i % 2 === 0) console.log('"Fiz');
    else if (i % 2 === 1 && i % 3 === 0) console.log("FizBuzz");
    else if (i % 2 === 1) console.log("Buzz");
  }
})();
////////////////////////////////

// TASK 2

(() => {
  let factorialTen = 1;
  for( i = 1; i <= 10; i++){
    factorialTen *= i;
  }
  console.log("Factorial of 10 is: " + factorialTen);
}) ();

////////////////////////////////

// TASK 3

(() =>{
  const sheetsInReamPaper = 500;
  const consumptionPerWeek = 1200;
  const weeksAmount = 8;
  let totalNumOfPapers =  weeksAmount * consumptionPerWeek;
  let totalStacksToPrepare = 0;
  while (totalNumOfPapers > 0){
    if (totalNumOfPapers > 499){
      totalStacksToPrepare++;
      totalNumOfPapers = totalNumOfPapers - sheetsInReamPaper;
    } else if ( totalNumOfPapers <= 499){
      totalStacksToPrepare++;
      break;
    } else break
  };
console.log("Quantity of stacks to prepare: " + totalStacksToPrepare);
return totalStacksToPrepare;
}) ();

/////////////////////////////////

// TASK 4

(() => {
  const roomsOnFloor = 3;
  const maxFloors = 9;
  const roomNumber = 456;

  function porchFloorFounder(roomNumber) {
    let porch = 0;
    let floor = 1;
    const roomsInPorch = roomsOnFloor * maxFloors;
    for (let i = 1; i < roomNumber; i++) {
      if (i % roomsInPorch === 1)
        porch++;
      if (i % roomsOnFloor === 0)
        floor++;
      if (i % roomsInPorch === 0)
        floor = 1;
    }
    console.log("Porch №:" + porch, "floor №:" + floor);

  }
  porchFloorFounder(roomNumber);
}) ();

//////////////////////////////////

// TASK 5
(()=>{
const medianNumber = 6;
const symbolDash = "-";
const symbolHash = "#";
let padStart = medianNumber;
let padEnd = medianNumber;
let treeBasement = medianNumber + medianNumber - 1

for(let i = 1; i <= medianNumber; ++i){

  let treeLine = "";

  for( let k = 1; k <= treeBasement; k++){
    if (k < padStart || k > padEnd) treeLine += symbolDash;
    else treeLine += symbolHash;
  }

  padStart--
  padEnd++

  console.log(treeLine);
};
})();
