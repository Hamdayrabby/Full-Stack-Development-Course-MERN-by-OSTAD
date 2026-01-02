 const fs=require('fs')


 //write/create a file

 async function writeFileSync() 
 {
    await fs.writeFileSync('example.html','<h1>Hello World!</h1>')
    console.log('Successfully written')
    
 }

 //File read
 async function readFileSync()
 {
    const data=await fs.readFileSync('TODO.txt','utf8')
    console.log(data);
 }

// (async()=>{
//     await readFileSync();
// })()

(
    async()=>{
        await writeFileSync();
    }
)()