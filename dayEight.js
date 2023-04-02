// Array reverse
function reverseArray(a){
    let newArray=[];
    for(let i=a.length-1;i>=0;i--){
        newArray.push(a[i])
    }
    return newArray
}
console.log(reverseArray([1,2,3]))
console.log(reverseArray([1,4,3,2]))
