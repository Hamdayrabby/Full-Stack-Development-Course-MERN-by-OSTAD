const http = require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.write('Home page');
//         res.end();
//     }
//     if(req.url==="/login"){
//         res.write('Login page');
//         res.end();
//     }
//     if(req.url==="/contact"){
//         res.write('Contact page');
//         res.end();
//     }
// });

const server=http.createServer((req,res)=>{
    let method =req.method;
    // if(method === 'GET'){
    //     res.end('GET request');
    //     //console.log(res.statusCode);
    // }  

    // if(method === 'POST'){
    //     res.write('POST request');
    //     res.end();
    //     console.log(`This is for post ${res.statusCode}`);
    
    // }

    // res.statusCode=401;
    // res.end('Hello world');

    res.statusCode=201;
    res.setHeader('Hamday-Rabby','this is a custom header');
    res.end('Hello world');
    req.url;
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});