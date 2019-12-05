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

const reduceToTotal= function(sourceArray, startingPoint){
  return sourceArray.reduce(function(total , e){return e+total;},startingPoint)
}
const reduceToAllTrue= function(sourceArray){
  let result= true;
  sourceArray.forEach(e=>{
    if(e==false){
      result = false;
    }
  });
  return result;
}
const reduceToAnyTrue= function(sourceArray){
  
}