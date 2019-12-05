// Your code here
const mapToNegativize = function(sourceArray){
  let arr = sourceArray.map(e=>-e);
  return arr;
}
const mapToNoChange = function(sourceArray){
   let arr = sourceArray.map(e=>e);
  return arr;
}
const mapToDouble = function(sourceArray){
   let arr = sourceArray.map(e=>2*e);
  return arr;
}
const mapToSquare = function(sourceArray){
   let arr = sourceArray.map(e=>4*e);
  return arr;
}