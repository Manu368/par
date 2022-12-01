let num1 = 25;
let num2 = 50;
console.log("Prime Numbers in the range between " + `${num1}` + " to "  + `${num2}`)
for(let i = num1; i <= num2; i++) {
    let flag = 0;
    for(let j = 2; j < i ; j++){
        if(i%j == 0){
            flag = 1;
            break;
        }
    }
    if(i > 1 && flag == 0){
        console.log(i)
    }
}