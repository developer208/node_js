const arr=[2,4,6,5,1,3,7,3,3];
// interview question
// The filter() method creates a new array with all elements that pass the test implemented by the provided function. 
let result=arr.filter((item)=>{
    return item>3;

})
console.warn(result);