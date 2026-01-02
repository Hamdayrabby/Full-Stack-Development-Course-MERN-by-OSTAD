
//1
function calculateDifference(a,b)
{
    return a-b;
}

const r= calculateDifference(10,4);
console.log("The difference is: "+r);


//2
function isOdd(a)
{
    if(a%2==0)
    return false;
    else
    return false;
}

const r1= isOdd(4);
console.log("The ans is: "+r1);


//3
function findMin(arr)
{
    if(arr.length===0)
        return undefined;

    let min=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]<min)
            min=arr[i];
    }
    return min;
}
let arr=[4,7,2,9,1]
const min=findMin(arr);
console.log("Minimum number is: "+min);


//4
function filterEvenNumbers(arr)
{
    if(arr.length===0)
        return undefined;

    let c=0;
    let ar=[];
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            ar[c]=arr[i];
            c++;
        }
    }
    return ar;
}
let arr1=[4,7,2,9,1,6,9,8]
const newar=filterEvenNumbers(arr1);
console.log("Array of even is: ");
for(let i=0;i<newar.length;i++)
{
    console.log(newar[i]);
}


//5
function sortArrayDescending(arr) 
{
    const result = [];
  
    while (arr.length > 0) 
    {
      let max = arr[0];
      let maxIndex = 0;
  
      for (let i = 1; i < arr.length; i++) 
      {
        if (arr[i] > max) 
        {
          max = arr[i];
          maxIndex = i;
        }
      }
  
      arr.splice(maxIndex, 1);
  
      result.push(max);
    }
  
    return result;
  }
  let arr2=[4,7,2,9,1,6,9,8]
  const newar1=sortArrayDescending(arr2);
  console.log("Array in descending order: ");
  for(let i=0;i<newar1.length;i++)
  {
      console.log(newar1[i]);
  }

  //6
  function lowercaseFirstLetter(str) {
    if (str.length === 0) return ""; 
    return str[0].toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello World"));


//7
function findAverage(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(findAverage([2, 4, 6, 8]));


//8
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
