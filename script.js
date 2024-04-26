1,Print odd numbers in an array(anonymous function)
var odd=function(arr)
{
    var temp=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            temp.push(arr[i])
        }
    }
    return temp;
}
var arr=userInput[0].split("").map(Number);
console.log(odd(arr))

1,Print odd numbers in an array(IIFE)
(function(arr)
{
    var temp=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            temp.push(arr[i])
        }
    }
    console.log(temp)
})
(arr=userInput[0].split("").map(Number));

2,Convert all the strings to title caps in a string array(anonymous function)
var strings=function(str)
{
var res=str.toUpperCase()
return res;
}
var str=userInput[0];
console.log(strings(str));

2,Convert all the strings to title caps in a string array(IIFE function)
(function(str)
{
var res=str.toUpperCase()
console.log(res);
})
(str=userInput[0]);


3,Sum of all numbers in an array(anonymous function)
var res=function(arr)
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
        
    }
    return sum;
}
var arr=userInput[0].split("").map(Number);
console.log(res(arr));

3,Sum of all numbers in an array(IIFE function)
(function(arr)
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
        
    }
    console.log(`Sum of the array is ${sum}`);
})
(arr=userInput[0].split("").map(Number));

4,Return all the prime numbers in an array(anonymous function)
var res=function(arr)
{
for(var i=0;i<arr.length;i++)
{
 var prime=true;
  for(var j=2;j<=arr[i];j++)
  {
    if(arr[i]%j==0 && arr[i]!=j)
    {
      prime=false;
      break;
    }
  }

  if(prime)
    {
     console.log(`${arr[i]} is prime`);
    }
}
return;
}
var arr=userInput[0].split("").map(Number)
console.log(res(arr))

4,Return all the prime numbers in an array(IIFE function)
(function(arr)
{
for(var i=0;i<arr.length;i++)
{
 var prime=true;
  for(var j=2;j<=arr[i];j++)
  {
    if(arr[i]%j==0 && arr[i]!=j)
    {
      prime=false;
      break;
    }
  }

  if(prime)
    {
     console.log(`${arr[i]} is prime`);
    }
}
console.log(res(arr))
})
(arr=userInput[0].split("").map(Number))

5,Return all the palindromes in an array(anonymous function)
var res=function(str)
{
    var rev="";
    for(var i=str.length-1;i>=0;i--)
    {
       rev+=str[i];  
    }
    if(rev==str)
    {
       return true;
    } 
    else
    {
        return false;
    }
}
var str=userInput[0];
console.log(res(str))

5,Return all the palindromes in an array(IIFE function)
(function(str)
{
    var rev="";
    for(var i=str.length-1;i>=0;i--)
    {
       rev+=str[i];  
    }
    if(rev==str)
    {
       return true;
    } 
    else
    {
        return false;
    }
    
console.log(str)
})
(str=userInput[0]);

6,Return median of two sorted arrays of the same size(anonymous function)
var foo=function(arr1,arr2)
{
    var arr3=arr1.concat(arr2)
    console.log(arr3)
    var n=arr3.length
    console.log(n)
    if(n%2==0)
    {
      var x=(n+1)/2
    }
    else
    {
      var a=n/2
      var b=(n+1)/2
      var x=(a+b)/2
    }
    return x;
}
  console.log(foo([1,2,3,4,5],[6,7,8,9,10]))

6,Return median of two sorted arrays of the same size(IIFE function)
(function(arr1,arr2)
{
    var arr3=arr1.concat(arr2)
    console.log(arr3)
    var n=arr3.length
    console.log(n)
    if(n%2==0)
    {
      var x=(n+1)/2
    }
    else
    {
      var a=n/2
      var b=(n+1)/2
      x=(a+b)/2
    }
console.log(x);
})
([1,2,3,4,5],[6,7,8,9,10])

7,Remove duplicates from an array(anonymous function)
var arr1=[1,2,1,3,1,1,4,5,6,7,9,8,3];
var obj={}
var min_acc=1;
function foo(arr){
  for(var i=0;i<arr.length;i++){
    var ele=arr[i];
    if(obj[ele]){
      obj[ele]++
  }
    else{
      obj[ele]=1
    }
  }
  
  for (var prop in obj){
    console.log(prop);
  }
}
foo(arr1);

7,Remove duplicates from an array(IIFE function)
(function(arr)
{
    var obj={}
    var min_acc=1;
  for(var i=0;i<arr.length;i++)
  {
    var ele=arr[i];
    if(obj[ele])
    {
      obj[ele]++
  }
    else
    {
      obj[ele]=1
    }
  }
  
  for (var prop in obj)
  {
    console.log(prop);
  }
})
([1,2,1,3,1,1,4,5,6,7,9,8,3]);


8,Rotate an array by k times(anonymous function)
var res=function(arr,k)
{
    for(var i=0;i<k;i++)
    {
      arr.unshift(arr.pop());
    }
    return arr;
 }
console.log(res([1,2,3,4,5],2))

8,Rotate an array by k times(IIFE function)
(function(arr,k)
{
    for(var i=0;i<k;i++)
    {
      arr.unshift(arr.pop());
    }
    console.log(arr);
 })
  ([1,2,3,4,5],2)

					ARROW FUNCTIONS

1,Print odd numbers in an array(arrow function)
var odd=(arr)=>{
    var temp=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            temp.push(arr[i])
        }
    }
    return temp;
}
var arr=userInput[0].split("").map(Number);
console.log(odd(arr))

2,Convert all the strings to title caps in a string array(arrow function)
var strings=(str)=>
{
var res=str.toUpperCase()
return res;
}
var str=userInput[0];
console.log(strings(str));

3,Sum of all numbers in an array(arrow function)
var res=(arr)=>
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
        
    }
    return sum;
}
var arr=userInput[0].split("").map(Number);
console.log(res(arr));

4,Return all the prime numbers in an array(arrow function)
var res=(arr)=>
{
for(var i=0;i<arr.length;i++)
{
 var prime=true;
  for(var j=2;j<=arr[i];j++)
  {
    if(arr[i]%j==0 && arr[i]!=j)
    {
      prime=false;
      break;
    }
  }

  if(prime)
    {
     console.log(`${arr[i]} is prime`);
    }
}
return;
}
var arr=userInput[0].split("").map(Number)
console.log(res(arr))

5,Return all the palindromes in an array(arrow function)
var res=(str)=>
{
    var rev="";
    for(var i=str.length-1;i>=0;i--)
    {
       rev+=str[i];  
    }
    if(rev==str)
    {
       return true;
    } 
    else
    {
        return false;
    }
}
var str=userInput[0];
console.log(res(str))