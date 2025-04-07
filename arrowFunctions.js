//arguments are not in arrow functions
//...number ---> spread operators are allowed in arrow functions

const add=(a,b)=>{
    return a+b
}
console.log(add(1,2));

const addNumbers=(...numbers)=>{
    let ans=0
    for(let i=0;i<numbers.length;i++){
        ans+=numbers[i]
    }
    return ans
}
console.log(addNumbers(1,2,3,45,5,6,7));

// Hoisting is call a function even defining
// method after call also

callFunction()
function callFunction(){
    console.log("name1");
}

// This keyword
const obj={
    value:20,
    myFunction:function(){
        console.log(this.value);//output:20
    },
};
obj.myFunction();
// this keyword in arrow function will refer to window
const obj1={
    value:20,
    myFunction:()=>{
        console.log(this);//output:{} it refers to window or global obj
        console.log(this.value);//output:undefined
    },
};
obj1.myFunction();