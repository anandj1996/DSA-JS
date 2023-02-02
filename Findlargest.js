// Count largest sum of Consecutive Digits.
// [1,2,3,4,3,5,4,6,7,8]


// conditions
// num>array -> error message
// 10-4+1 => 7 


function findlargest(array,num){
    if(num>array){
        throw new error("num is not greater then array");
    }else{
        let max=0;
        for(let i=0;i<array.length-num+1;i++){
            let tmp=0;
            for(let j=0;j<num;j++){
                tmp+=array[i+j];
            }
            if(tmp>max){
                max=tmp
            }
        } //for(let i=0;i<array.length-num+1;i++){
            return max;
        } //}else{
    } //function findlargest(array,num)
const result= findlargest([1,2,3,4,3,5,4,6,7,8],4);
console.log("result",result);