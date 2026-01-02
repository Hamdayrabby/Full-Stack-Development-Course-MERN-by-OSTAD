function main (input) {
    /**
     * Write JavaScript code from here
     */
    let n=input.split(" ");
    let a=parseFloat(n[0]);
    let b=parseFloat(n[1]);
    let r=0.5*a*b*b
    console.log(a+" "+b);
    console.log(r);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});