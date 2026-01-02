

//callback function
function add(a,b,c)
{
    return c(a,b);
}

function multiply(a,b)
{
    return a*b;
}

const result = add(2,3,multiply);
console.log(result); // 6