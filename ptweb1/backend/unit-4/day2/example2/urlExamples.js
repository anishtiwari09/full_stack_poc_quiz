const u= new URL("https://www.masai.school.com?q=1&q=2&q=3")
console.log(u.toString())
y=u.searchParams
console.log(y.getAll('q'))//

u.searchParams.append('page',2)
for([key,value] of y)
{
    console.log(key,value)
}
console.log(u.toString())