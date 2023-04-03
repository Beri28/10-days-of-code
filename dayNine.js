function catAndMouse(x,y,z){
    let diff1=z-x;
    diff1=Math.abs(diff1);
    let diff2=z-y;
    diff2=Math.abs(diff2);
    if(diff1>diff2){
        return 'Cat B'
    }
    else if(diff1<diff2){
        return 'Cat A'
    }
    else{
        return 'Mouse C'
    }
}
console.log(catAndMouse(1,2,3))
console.log(catAndMouse(1,3,2))
