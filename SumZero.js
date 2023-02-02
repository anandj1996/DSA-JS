// Checking sum Zero - Problem 1
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4,4] -> output

const FindSumPair = (array) => {
    let left=0;
    let right=array.length-1;

    while(left < right){
        sum = array[left]+array[right];
        if (sum===0){
            return[array[left],array[right]];
        }
        else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
  } //while (left < right)

const result=FindSumPair([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);
// Another solution