// function to find the sum of array elements
// Function takes in an array of integers as parameter
// And returns sum of its elements as an integer

function arraySum(ar){
    let sum=0;
    for(let i=0;i<ar.length;i++){
        sum +=ar[i];
    }
    return sum;
}
console.log(arraySum([1,2,3]));
