function compareTriplets(array1,array2){
    let result=[];
    let array1Score=0;
    let array2Score=0;
    for(let i=0;i<=2;i++){
        if(array1[i]>array2[i]){
            array1Score++;
        }
        else if(array2[i]>array1[i]){
            array2Score++;
        }
        else{
            continue;
        }
    }
    result.push(array1Score);
    result.push(array2Score);
    return result;

}
compareTriplets([1,2,3],[3,2,1])
compareTriplets([5,6,7],[3,6,10])
compareTriplets([17,28,30],[99,16,8])
