function add7(n){
    return n + 7
}

let mult = function(a,b) { return a * b };

let cap = (str) => { 
    let a = str.substring(0,1).toUpperCase() 
    let b = str.substring(1,str.length).toLowerCase()
    return a + b
};

let last = (str) => { return str.substring(str.length - 1)}

let result = add7(3)
console.log(result)

result = mult(2,3)
console.log(result)

result = cap("apple")
console.log(result)

result = last("apple")
console.log(result)