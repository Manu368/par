let n = 5;
let manu = ""
for(let i = 1; i<n; i++){
    for(let j = 0; j<i; j++){
        manu = manu + "* "
    }
    manu = manu + "\n"
}


for(let i = 1; i <= n; i++){
    for(let j = 0; j <= n-i; j++){
        manu = manu + "* "
    }
    manu = manu + "\n"
}
console.log(manu)