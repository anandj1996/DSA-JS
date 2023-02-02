// [2,7,11,15]
function twosum(array,target){
    for(let i=0;i<array.length;i++){
       for(let j=i+1;j<array.length;j++){
        if(i+j==target){
            console.log(i,j);
        }else{     
            console.log("wrong method");
        }
       }
}
return array[i],array[j]
};
array=[2,7,11,15]
target=9