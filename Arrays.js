const students=["nithin",'bairu']
console.log(students);
students.push('nithn')
console.log(students);


// In JS, Arrays are Hetero, you can push objects in arrays
const My=[1,"nithin", true]
console.log(My);
My.push({name:"I am Nithin"})
console.log(My);//[ 1, 'nithin', true, { name: 'I am Nithin' } ]
My.reverse()
console.log(My);
My.pop()//removes last element
console.log(My);