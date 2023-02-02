const arr=[8,2,5,1,6,3]

const InsSort = (arr) =>{
    for(let i=1;arr.length;i++){
        let curr=arr[i];
        let j=i-1;
        while(j>= 0 && arr[j]>curr){
            arr[j+1] = arr[j]; j--;
        }
        arr[j+1]=curr;
    }
    return arr;
}
const res= InsSort(arr)
console.log(res);