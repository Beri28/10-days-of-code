/*
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.
*/
function compareTriplets(a,b){
    let result=[];
    let array1Score=0;
    let array2Score=0;
    for(let i=0;i<=2;i++){
        if(a[i]>b[i]){
            array1Score++;
        }
        else if(b[i]>a[i]){
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
