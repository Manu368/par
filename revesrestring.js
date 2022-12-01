let num = 56789;
let manu = 0;
while(num != 0){
manu = (manu*10) + (num%10)
num = parseInt(num/10)

}
console.log(manu)