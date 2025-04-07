function add(a,b){
    return a+b
}
console.log(add(1,2));
console.log(add("nithin ","Bairu"));
//argument object we can give unlimited parameters 
function argument(){
    console.log(arguments);
    console.log(arguments.length) //6
}
argument(1,2,3,4,5,6) 
//[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }

//spread operators
function addNumbers(...numbers){
    let ans=0
    for(let i=0;i<numbers.length;i++){
        ans+=numbers[i]
    }
    return ans
}
console.log(addNumbers(1,2,3,4,5,6));