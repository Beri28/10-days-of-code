function arraySum(ar){
    let sum=0;
    for(let i=0;i<ar.length;i++){
        sum +=ar[i];
    }
    return sum;
}
console.log(arraySum([1,2,3]));