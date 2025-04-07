// Higher Order Functions and Callback Functions
function add(a,b, cb){
    let result= a+b
    cb(result)
}
add(1,2,function(val){
    console.log(val);
})
add(1,2,(val)=>{
    console.log(val);
})



// returning a function from function
function add1(a,b, cb){
    let result= a+b
    // cb(result)
    return () => console.log(result);
}
let result=add1(1,2,()=>{})
result()