// Count Unique Numbers
//  [1,1,2,2,3,4,4,5,6,7,8,8]
// output ->8

function coutntUnique(array){
    if(array.length){
        let i=1;
        for(let j=1; j<array.length; j++){
            if (array[i]!==array[j]){
                i++;
                array[i]=array[j]
            }
        }
        return i++;
    }
    else
    {
        throw new Error("Array is Empty");
    }
};
const result= coutntUnique([1,1,2,2,3,4,4,5,6,7,8,8,8]);
console.log(result);