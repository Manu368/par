let num = 5;
let pyr = ""
for(let i = 1; i <= num; i++){
    for(let j = 1; j <= num-i+1 ; j++){
        pyr = pyr + "" +  parseInt(num-j-i+2)
    }
    pyr = pyr + "\n"
}
console.log(pyr)