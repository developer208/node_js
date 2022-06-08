const vm= require('http');
// http module handles request and response in node .
 vm.createServer(
     (req,resp)=>{
         resp.write("<h1>hello this is vedang<h1>");
         resp.end();


     }
 ).listen(4567);
 