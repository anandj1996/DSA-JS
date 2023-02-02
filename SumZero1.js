// Checking sum Zero - Problem 1
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4,4]

const getSumPairZero = (array) => {
    for(let number of array){
        console.log("Outerloop");
        for(let j=1;j<array.length;j++){
            console.log("Inner loop");
            if(number+array[j] === 0){
                return[number , array[j]];
            }
        }
    }
}
const result= getSumPairZero([-1,0,1,2,-1,-4]);
console.log(result);