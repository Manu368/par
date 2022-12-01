let rows = 5;
let pat = ""
for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= i; j++){
        pat = pat + j
    }
    pat = pat + "\n"
}
console.log(pat)