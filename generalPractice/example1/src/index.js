const { toMAC } = require('@network-utils/arp-lookup');
async function handleIncomingRequest( req, res ) {
   
let ip=req.connection.remoteAddress
    // do stomething with the MAC address...
  const mac=await toMAC(ip)
    console.log(mac)
}
let http=require("http")
let server=http.createServer(async(req,res)=>{
    handleIncomingRequest(req,res)
})
server.listen(5000,()=>{
    console.log('listnening')
})