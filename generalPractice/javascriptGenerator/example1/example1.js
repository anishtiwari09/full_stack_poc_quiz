function* generators(){
    yield 'hello world'
   
}
let temp =generators()
// console.log(Object.keys(temp))
for(let i of generators()){}

// console.log(temp.next())
// console.log(temp.next())
// console.log([...temp])
function* generators2()
{
    for (let i=0;i<20;i++)
    yield i
}
let temp2=generators2()
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log(temp2.next())
console.log('end',[...generators2()])