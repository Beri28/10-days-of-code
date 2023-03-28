function dayOfProgrammer(year){
    if(year>=1919 && year<=2700){
        if(year%4==0 || year%400 ==0){
            return `12.09.${year}`
        }
        /*else if(year%400==0){
            return `12.09.${year}`
        }*/
        else{
            return `13.09.${year}`
        }
    }
    else if(year<=1917 && year>=1700){
        if(year%4==0){
            return `12.09.${year}`
        }
    }
    else if(year==1918){
        return `27.09.${year}`
    }
    else{console.log("Enter year in the range 1700 - 2700")}
}
console.log(dayOfProgrammer(1984))
console.log(dayOfProgrammer(2017))
console.log(dayOfProgrammer(2016))
console.log(dayOfProgrammer(1918))
console.log(dayOfProgrammer(2701))

