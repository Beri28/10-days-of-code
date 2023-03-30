/*
Link to question
https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=false
*/
const valleys=(steps,path)=>{
	path=path.toUpperCase()
 	let height=0;
 	let u=1;
 	let d=-1;
 	let valleys=0;
 	let seaLevel=0;
 	let currentStep=0;
 	for(let i=0;i<path.length;i++){
 		 if(path[i]=='D'){
 			if(height==seaLevel){
 				valleys++;
 			}
 			height=height+d
 		}
 		else if(path[i]=='U'){
 			height=height+u
 		}

 		
 		
 	}
 	console.log(valleys)
}
valleys(8,"UDDDUDUU")
valleys(3,"DDUUUUDD")
valleys(12,"DDUUDDUUUUDD")
