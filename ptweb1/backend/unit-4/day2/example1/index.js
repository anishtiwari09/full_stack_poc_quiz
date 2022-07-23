//path module
const path=require('path')
/* console.log(path)

//global level

/* console.log(__filename)//file path(current)
//
/* console.log(__dirname)//directory (current) */
console.log(path.basename(__filename))//last portion of path (generally file name)
console.log(path.dirname(__filename)) // (directory path)
//console.log(path.dirname('./'))
console.log(path.extname(__filename))
console.log(path.parse(__filename))
console.log(path.parse(__dirname))

//join path

console.log(path.join(__dirname,'text','htmls.html'))
