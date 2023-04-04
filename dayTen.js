//Problem statement: Number Line jumps
function kangaroo(x1,v1,x2,v2){
    let kd1=x1;
    let kd2=x2;
    let decision='NO';
    for(let i=0;i<10000;i++){
        kd1=kd1+v1;
        kd2=kd2+v2;
        if(kd1==kd2){
            decision='YES';
            break;
        }
    }
    console.log(decision)
    return decision;
}
kangaroo(0,3,4,2)
kangaroo(2,1,1,2)
kangaroo(0,2,5,3)

