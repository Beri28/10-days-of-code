/*
Birthday Cake Candles
*/
function birthCakeCandles(Candles){
    let counter=0;
    let biggest=Candles[0];
    for(let i=1;i<+Candles.length;i++){
        if(biggest>Candles[i]){
            continue;
        }
        else if (biggest<Candles[i]){
            biggest=Candles[i];
        }
    }
    for(let i=0;i<Candles.length;i++){
        if(Candles[i]==biggest){
            counter++;
        }
    }
    console.log(biggest);
    console.log(counter)
    return counter;
    
}
birthCakeCandles([3,2,1,5])
birthCakeCandles([1,2,3,10,21,4,6,7,21,0])
