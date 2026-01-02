console.log("Hello World")
console.log("The sum of 40 and 30 is: ")
console.log(40+30)
var message= "Hello,\n GFG";//"\n" to create a new line
console.log(message);
let text="javascript is the best!"
console.log(text)
let n=23
let b=true
if(b)
    console.log(n)
console.log(typeof message)//tells the variable type. here it is a string
console.log(typeof n)// here it is a number
console.log(typeof b)
let user=null
console.log(user)
console.log(typeof user)
let un
console.log(un)
console.log(typeof un)
const person={
    name: "Auni",
    age: 25,
    education: "BSC in CSE"
};
console.log(person)
console.log(typeof person)
let array=[1,222,333,4]
console.log(array)
let m="I am "
let s=" years old"
let ag=25
let ms=m+ag+s // string concatanation regular way
console.log(ms)
let name = "Auni"
let ms1=`my name is ${name} and I am ${ag} years old.`
console.log(ms1)
let username = "Prakash";
let age = 99;
let multilineMessage = `My name is ${username}.
I am ${age} years old.
I love to code, eat, and sing.`;
console.log(multilineMessage);

let messag = `My name is ${username} and I am ${age} years old.`;
console.log(messag);
const x=12
const y=3

console.log(x*y)
console.log(x-y)
console.log(x/y)
console.log(x+y)
console.log((x)%(y+2))

console.log(x**2)
console.log(y**3)

let s1="1"
let s2="2"
let s3="3"


console.log(s1+s2+s3)// string catanation
const N="4"
const Sn= Number(N)// converting string to number
console.log(typeof N)

if(isNaN(N))// check whether it is converted to number
    console.log(Sn+46)
else
console.log("Not converted\n")

const Ag= String(age)//convert number to string
console.log(typeof Ag)

/*
Any non-empty string is true.
An empty string is false.
The number 0 is false.
Any other number is true.
*/
const B="HI"
let BB=Boolean(B)
console.log(BB)



const prompt= require('readline-sync');// input


const S=prompt.question('Enter Your first name: ');//taking input
const M=prompt.question('Enter Your second name: ');

console.log(S+M)//showing the string

const numb=parseInt(prompt.question('Enter a number: '));
const numb1=parseInt(prompt.question('Enter another number: '));

console.log(numb+numb1);

