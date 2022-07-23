let c=0
setInterval(() => {
    console.log(c++)
}, 1000);
process.on('SIGINT',()=>{
    console.log('\nexist')
    process.exit()
})