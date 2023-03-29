function plusMinus(arr){
    let l=arr.length;
    let plus=0;
    let minus=0;
    let zero=0;
    let pRatio,mRatio,zRatio;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            plus++;
        }
        else if(arr[i]<0){
            minus++;
        }
        else{
            zero++;
        }
    }
    pRatio=plus/l;
    mRatio=minus/l;
    zRatio=zero/l;
    console.log(pRatio.toFixed(6))
    console.log(mRatio.toFixed(6))
    console.log(zRatio.toFixed(6))
}
plusMinus([-4,3,-9,0,4,1])