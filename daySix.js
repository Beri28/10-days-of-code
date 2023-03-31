function staircase(n){
    let array1=[];
    let word='';
    for(let i=0;i<n;i++){
        word+=' ';
    }

    array1=word.split('')

    for(let i=0;i<n;i++){
        array1.shift()
        array1.push('#');
        console.log(array1.join(''))
    }
}

staircase(6);
staircase(3);
