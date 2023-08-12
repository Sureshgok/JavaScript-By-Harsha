// console.log("hi")
// var x;
// console.log(x)  // undefined
// var name="scott";
// console.log(name)  // scott
// x=10;
// console.log(x) //10
// var a,b=10;
// a=20;
// c=a+b;
// console.log(c) //30
//
//
// //---------------------
// const PI=3.146
// console.log(PI)
// .................................................
// const numberofsecpermin=60
// const numberofminperhour=60
// var numberofsecperhour= numberofsecpermin*numberofminperhour//60*60=3600
// console.log(numberofsecperhour)
// // var a=10;
// // var b=3;
// // var c=10/3;
// // console.log(c);
// // d=c*3;
// // e=2**3;//its multiple by 3 times
// // console.log(d);
// // console.log(e);//output=2*2*2=8
// // ...................................................................................................
// var a="scotts";//concatination operator
// // age=20;
// // console.log("hey"+a+age)
// //.............................................................................................................................................................
// var marks,grade;//elseif statement
// marks=65;
// if(marks>=80)
// {
//   grade="A"
//   console.log(grade)
// }
// else if(marks>=60 && marks<89)
// {
//   grade="b"
//   console.log(grade)
// }
// else if (marks<=40 && marks>=35)
//  {
//  grade="c"
//  console.log(grade)
// }
// // // // //....................................................................................................
//  var i=1;//while loop
// while (i<=10)//print 1 to 10
// {
//  console.log(i)
//  i++
// }
// //............................................................................................
// //function in JavaScript_Functions
// // var x=10,y=20;
// // var z
// // function addition(x)
// // {
// //
// // }
// // console.log(addition())
// //
// // //.............................................................................................
// // var ctemp=98.4,ftemp;//temparature calculation using operators
// // ftemp=(ctemp*1.8)+32;
// // console.log(ftemp)
// //...........................................................
// var x;
// parseInt(prompt("enter a number"))
// if (x>0)
//  {
//   console.log("given num is positive:");
// }
// // // //.........................................................................................................................
// var n=[10,20,30,40]
// console.log(n[0])
// console.log(n[1])
// console.log(n[2])
// console.log(n[3])
// console.log(n.length)
// //...............................................................................................................................
// var x=10,y=20;//first functon program
// // function functionadd()
// // {
// //   z=x+y;
// //   return(z);
// //
// // }
// // console.log(functionadd());
// //.....................................................................................................................
// var simpleinterest=function si(p,t,r)
// {
//    let si= p*r*t/100
// //   return si;
// // }
// // console.log(simpleinterest(10000,2,12))
// //....................................................................................................................
// //function using inside the function
// let square= function(n)
// {
//   return n*n;
// }
// let cube=function(n)
// {
//   return square(n)*n
// }
// let result=cube(5)
// console.log(result);
// ................................................................................................
// arguments
// let bill,sum=0//printaruments lenth
// bill=function()
// {
//   for(i=0;i<arguments.length;i++)
//   {
//     console.log(arguments[i])
//   sum=sum+arguments[i];//total of the arguments
//
//   }
// }
// bill(18);
// // bill(10,20,220,30);
// // console.log(sum)//sum=total of arguments
// //....................................................
// let bill,sum=0//printaruments lenth
// bill=function()
// {
//   for(i=0;i<arguments.length;i++)
//   {
//     console.log(arguments[i])
//   sum=sum+arguments[i];//total of the arguments
//
//   }
// }
// console.log(bill(10));
// console.log(bill(10,20,220,30));
// console.log(sum)//sum=total of arguments
// // //................................................................
// // let n=5
// // let factorial=function(n)
// // {
// //     if(n==1){
// //     return 1
// //     }
// // else
// // {
// //     return factorial(n-1)*n
// // }
// // }
// // console.log(factorial(60))
// A=[1,2,3,4,5]
// // // console.log(A.slice(2,3))
// // function sayhello()//setInterval example
// // {
// //     console.log("hello")
// // }
// // function saybye()
// // {
// //     console.log("bye")
// // }
// // sayhello()
// // setInterval(sayhello,5*100)//it gives the time intervel for every function excution that is 5*1000 milliseconds after again excute.
// <html>
// <head>
// <title>
// jfdsfhjdsfi
// </title>
// </head>
// // // <body>
// // // <img src=car3.jpeg alt=img deleted>
// // // </body>
// // // </html>
// // var a,b,c;
// // function addition()
// // {
// // c=a+b;
// // return c
// // }
// // a=10;
// // b=10;
// // console.log(addition())
// var a="RAJAsuresh"
// var n=a.toLowerCase()
// console.log(n)
// function isArmstrong(number)//armstrongnum program
// {
//   const digits=number.toString().split('');
//   const n= digits.length;
//   let sum=0;
//   for(let digit of digits)
//   {
//     sum +=Math.pow(parseInt(digit),n)
//   }
//   return sum===number
// }
// const number=153
// if(isArmstrong(number))
// {
//   console.log('${number} is an armstrong number')
// }
// else
// {
//     console.log('${number} is not armstrong number')
// }
// // ///////////////////////////////////////////////////////////////
// // //arrays................................
// // var s=[1,3,5,6,7,9]
// // s[4]=258
// // s[8]=25
// // console.log(s)
//
// ////////////////////////////////////////////////////////////////////////////////////////////
// var s=[1,2,3,5,77,88,5]//display eaach element  using for loop
// console.log("display each element:")
// for(var i=0;i<s.length;i++)
// // // {
// // //   console.log(s[i])
// // // }
// // // crating array using objects
// // var s=[
// //   {studentname:"suresh",age:"22"},
// //   {studentname:"sai",age:"22"},
// //   {studentname:"nani",age:"26"},
// //   {studentname:"siri",age:"25"},
// //   {studentname:"basha",age:"24"},
// // ]
// // console.log("display each student:")
// // for(var i=0;i<s.length;i++)
// // {
// //   console.log(s[i])
// // }
// /////////////////////////////////////////////////////////////////////////
// //..........................arrays.................................
// //push and pop and shift,unshift methods
// var s=[
//   {studentname:"suresh",age:20},
//    {studentname:"sai",age:21},
//    {studentname:"ramesh",age:22},
//    {studentname:"teja",age:23},
//    {studentname:"basha",age:24}
//   ]
//   console.log(s);
//   console.log(s.push({studentname:"nani",age:22}))//add new element at end of an array
//   console.log(s);
//   console.log(s.unshift({studentname:"nani1",age:20},));//add new element at starting of an array
//   console.log(s);
//   console.log(s.pop())//delete last element of the arrays
//   console.log(s);
//   console.log(s.shift())//delete a element at starting of an array
//   console.log(s)
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// //splice method in arrays
// //splice can be used to remove from the arrays
// var s=[
//   {studentname:"suresh",age:20},
//    {studentname:"sai",age:21},
//    {studentname:"ramesh",age:22},
//    {studentname:"teja",age:23},
//    {studentname:"basha",age:24}
//   ]
//   // s.splice(2,3)//it delete the elements from index 2 to given range
//   // console.log(s);//it delete the elements 3 elements
//   s.splice(3,1, {studentname:"nani",age:28})// we can replace the element using splice used to range
//   console.log(s)
//   s.splice(3,0, {studentname:"charan",age:30})// we can add new element at any whare in the array using splice
//   console.log(s)
// // //////////////////////////////////////////////////////////////////////////////////
// // // concat method:- this methodcan be used to adding two arrays into single arrays
// // var s=[
// //   {studentname:"suresh",age:20},
// //    {studentname:"sai",age:21},
// //    {studentname:"ramesh",age:22},
// //    {studentname:"teja",age:23},
// //    {studentname:"basha",age:24}
// //   ]
// //   r=[
// //     {studentname:"chandu",age:21},
// //       {studentname:"charan",age:29},
// //         {studentname:"sasi",age:25},
// //           {studentname:"uday",age:20},
// //             {studentname:"mahesh",age:18},
// //
// //   ]
// //   g=s.concat(r)//arrray r can adding in array s and this can be saved in array
// // console.log(g);
// /////////////////////////////////////////////////////////////////////////////////
// //Every method:- this method can be used to return true, if all the elements are matching with given condition.
// var s=[
//   {id:1,studentname:"suresh",age:20},
//    {id:2,studentname:"sai",age:21},
//    {id:3,studentname:"ramesh",age:22},
//    {id:4,studentname:"teja",age:23},
//    {id:5,studentname:"basha",age:24}
//   ]
//    console.log(s.every((age)=>
//    {
//     return age.age>=19
//    }))
// // // ///////////////////////////////////////////////////////////
// // // // some method:- return true, if at least one element matches with the given condition
// // var s=[
// //   {id:1,studentname:"suresh",age:20},
// //    {id:2,studentname:"sai",age:21},
// //    {id:3,studentname:"ramesh",age:22},
// //    {id:4,studentname:"teja",age:23},
// //    {id:5,studentname:"basha",age:24}
// //   ]
// //    console.log(s.some((a)=>
// //    {
// //     return a.age>=22
// //    }))
// // // // // // // // //////////////////////////////////////////////////////////
// // //filter method:- return all elements that are matching with the given codition. if there is no matching element in the given array then display empty array.
// var s=[
//   {id:1,studentname:"suresh",age:20},
//    {id:2,studentname:"sai",age:21},
//    {id:3,studentname:"ramesh",age:22},
//    {id:4,studentname:"teja",age:23},
//    {id:5,studentname:"basha",age:24}
//   ]
//       console.log(s.filter((s)=>
//     {
//       return s.age>22
//     }))

// ////////////////////////////////////////////////////////////////////////////
// // find method:- return first matching element among the element that are matching with the given condition.it gives only one first matching value.
// var s=[
//   {id:1,studentname:"suresh",age:20},
//    {id:2,studentname:"sai",age:21},
//    {id:3,studentname:"ramesh",age:22},
//    {id:4,studentname:"teja",age:23},
//    {id:5,studentname:"basha",age:24}
//   ]
// //   console.log(s.find((a)=>
// //   {
// //     return a.age>23
// //   }
// // ))
// ////////////////////////////////////////////////////
// //findIndex():- return index of the first matching element that matching with the given condition.
// var s=[
//   {id:1,studentname:"suresh",age:20},
//    {id:2,studentname:"sai",age:21},
//    {id:3,studentname:"ramesh",age:22},
//    {id:4,studentname:"teja",age:23},
//    {id:5,studentname:"basha",age:24}
//   ]
//   console.log(s.findIndex((a)=>
// {
//    return a.age>=22//it give element index with the given condition
// }))
// /////////////////////////////////////////////////////////////////////////////////////
// // //includes():- execute the function once for each element of the arrays
// //
// // var r={id:3,studentname:"ramesh",age:22}
// // var s=[
// //   {id:1,studentname:"suresh",age:20},
// //    {id:2,studentname:"sai",age:21},
// //    {id:3,studentname:"ramesh",age:22},
// //    {id:4,studentname:"teja",age:23},
// //    {id:5,studentname:"basha",age:24},
// //    r
// //   ]
// //    var result=s.includes(r)
// //    console.log(result);
// ///////////////////////////////////
// //map:- execute the function once for each element in the array.
// //creat a new array with the return values
// var s=[
//   {id:1,studentname:"suresh",age:200},
//    {id:2,studentname:"sai",age:210},
//    {id:3,studentname:"ramesh",age:220},
//    {id:4,studentname:"teja",age:230},
//    {id:5,studentname:"basha",age:240},
//  ]
//  console.log(s);
//    var newage=s.map((a)=>//here using which object can be updated
//
//    {
//      a.age +=a.age*100/10;
//     return a
//    })
//    console.log(newage);
// /////////////////////////////////////////
// sort method():- this method can be used to sorting the elements from the assendin order and desending order.
// in this we can use 0,1,
// var s=[1,4,3,7,8,3,5]
//  sortedS=s.sort((a,b)=>
//  {
//    return a-b
//  }
// )
// console.log(sortedS);
// //////////////////////////////////////////////////////////////
// //data types.............................
// var a=10;
// var b=String(a);
// console.log(a);
// console.log(b);//"10" is a string
// console.log(typeof b);//String
// console.log(typeof a);//number
// ////////////////////////////////////////////////////////////////////
// toString():- this function can be used to convert num into string .
// // var a=10
// // var b= toString(a);
// // console.log(typeof b);// 10 is cover into string formate
// /////////////////////////////////
// var a="10"
// var b=10
// console.log(a==b);//here values only checked
// console.log(a===b);//here values and data types also checked.
// number()function:- this functonis used to convert string to number
// var a="101"
// b=Number(a)
// console.log(typeof b);// string "101",is converted into number
// // //////////////////////////////////////////////////////////////////////////////
// // //parseInt():- used to convert a string to number.its similar to number function  but its support decimal values also.
//  var a="101.8"
// var c="abvc100"
// var e= "1515jchdkjshj"
// var d=parseInt(c)
// var h=parseInt(e)
// var b=parseInt(a)
// console.log(b)//after decimal values are negleted
// console.log(typeof b);
// console.log(typeof d)
// console.log(typeof h);
// console.log(d);// it gives NaN datatype
// console.log(h);//it give only num and alpha numeric can be negelected.
// // // // /////////////////////////////
// // var a= "By using our Services you are agreeing to these terms"
// // var b=a.split(" ")
// // var c=a.trim()
// // console.log(b);
// // console.log((c));
// /////////////////////////////////////////
// //get time method
// var a= new Date()
// var b=a.getTime()//it gives the milliseconds of time from 1970 to till now
// console.log(b);
// // /////////////////////////////////////////////////
// // var a= new Date()
// // var h=a.toLocaleDateString()
// //  var b=a.getDate()
// // var c=a.getMonth()
// // var d=a.getYear()
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);
// // console.log(h)
// /////////////////////////////////////////////////////////////////
// //objects:-object is collection of properties and methods.
// //property is a variable it can be stored inside the object.
//   var s={
//     Name:"suresh",
//     age:function(){
//       return "15"
//     }
//   }
//   console.log(s)
//   console.log(s.Name);// its gives the Name
//   console.log(s.age());
// // //   //it gives the age function value that is 15
// // ////////////////////////////////////
// // //this():-this keyword is pre defined keyword in the js.
// // // the this() key word inside a method represent a default empty object.
// // // this() keyword access all the memebers(propertiesand methods)
// //  var s={
// //    Name:"suresh",//property
// //    age: function()//method calling function
// //    {
// //      console.log(this)
// //     return "Name is ${this.Name}+ age is {this.age}"// this keyword calls the current object
// //    }
// //  }
// // // console.log(s);
// //  console.log(s.age());//15suresh
// ////////////////////////////////////////////
// var s={
//   Name:"suresh",
//   LastName:"goka",
// //   age:22,
// //   fullname:function()
// //   {
// //  return this.Name+this.LastName
// // }
// // }
// //  console.log(s.fullname())
// ///////////////////////////////////////////////////////////////////
// var person={
//   Name:"suresh",
//   LastName:"goka",
//   age:22,
//   salary:25000,
//   experience:2,
//   getfullname:function()
//   {
//     return `${this.Name} ${this.LastName}`
//   },
//   promotion:function()
//   {
//     if(person.experience<2)
//     {
//       iseligible=true;
//        return this.salary= this.salary+this.salary*50/100
//     }
//     else
//     {
//       iseligible=false;
//        return this.salary= this.salary+this.salary*20/100
//
//     }
//   }
// }
//
// console.log(person.getfullname());
// console.log(person.promotion());
// ///////////////////////////////////////////////////////////
// // function call():- the call functioncan be uded to apply the arrguments in out side the function.it gives the arrguments individually.
// var student1={
//   name:"suresh",
//   age:"22"
// };
// var student2={
//   name:":sai",
//   age:"21"
// }
//    let updateage=function( year){
//    this.age+= year}
//  updateage.call(student2,2)
//  console.log(student2.age);
//
// // // /////////////////////////////////////////////////////////////
// // // function apply():- the call method can be used to apply() a function with a given this values and arrguments provide in an array.and supply the object for this keyword along with the arguments.
// // var student1={
// //   name:"suresh",
// //   section:"A"
// // };
// var student2={
// //   name:":sai",
// //   age:"B"
// // }
// //  function  totalmarks(sub1,sub2,sub3)
// //
// //  {
// //    totalmarks=sub1+sub2+sub3;
// //
//    let message=`hey ${this.name},your marks is: ${totalmarks}`
//
//  console.log(message)
// }
//   totalmarks.call(student1,75,85,75 );
//
// ///////////////////////////////
// // function bind():- this is altrrnative method for call( ) method. it creat a new function always.it will not excute the function immediately.
// var student1={
// //   name:"suresh",
// //   section:"A"
// // };
// // var student2={
// //   name:":sai",
// //   age:"B"
// // }
// //  function  totalmarks(sub1,sub2,sub3)
// //
// //  {
// //    totalmarks=sub1+sub2+sub3;
// //
// //    let message=`hey ${this.name},your marks is: ${totalmarks}`
// //
// //  console.log(message)
// // }
// //   var student1cal=totalmarks.bind(student1)
// //   student1cal(70,80,90)
// ///////////////////////////////////////////////////////////////////////
// //arrow function:- arrow function are altrrnative syntax for creating the function. in the arrow function arrguments are cannot be changed regularly.
// var add=((a,b)=>
// {
//   return a+b
// });
// // // // console.log(add(10,20));
// ///////////////////////////////////////////////
// // for in loop:- in the for in loop() you can read all properties from object.
// // the loop block will be executeonce per  each of the loop.
// var student={
//   name:"suresh",
//   age:20,
//   branch:"cs"
// };
// for(let std in student)
// {
//   console.log(std,student[std]);//here std gives only the property name and student[std] gives values of the property.
//
// // // }
// // //////////////////////////
// // for in loop example
//  var student1={
//    name:"suresh",
//    age:22,
//    bloodgroup: "o+ve",
//    town:"ktvm"
//
//  }
//  var student2={
//    name:"sai",
//    age:21,
//    bloodgroup: "o+ve",
//    town:"ktvm"
//  }
//  for(var std1 in student1)
//  {
//    console.log(student1[std1]);
//  }
// //////////////////////////////////////////////////////////////////////////
//  // destructuring object:- it assign each property value into respective variables.
//  // other variable is accesing the with these property which are not accesssed in the destructuring.
//
//  var person={
//    firstname:"suresh",
//    lastname:"goka",
//    age:20,
//    email:"sureshgoka@gmail.com",
//    city:"kethavaram",
//    country:"india"
//
//  }
//   var {
//     firstname:fn,lastname:ln,age,email:email,...other
//   }=person// other variable can be declered with 3dots(...other)
//
//   console.log(fn);
//   console.log(ln);
//   console.log(age);
//   console.log(email);
//   console.log(other);//other can be access the remaining values in object (uncalled values).
// //destructuring function parameter():-when you supply an object while calling a function each property values will be assigned into the the respective parameter.
//   var fun1=function({
//     studentname:sn,email:em,...others
//   })
//   {
//     console.log("fun1",sn,em);
//     console.log(others);
//   }
//   var student1={
//     studentname:"suresh",age:22,email:"sureshgoka@gmail.com",phone:123456,city:"kethavaram"
//   }
//   fun1(student1)
////////////////////////////////////////////////////////
//inheritance:- inheritanceis concept where the child object is created based on the existing parent object.
// in the inheritance we use the keyword  ".__proto__".
//  var person={
//    personname:"suresh",age:22
//  }
// var student={
//   rollno:22,
//   marks:85
// }
// student.__proto__=person;
// console.log(student.personname)//.personname give the parent personname.
////////////////////
// inheritance example:- login true or false for the manager
  // var user={
  //   username:"",
  //   password:""
  // }
  // var manager={
  //   username:"",
  //   password:"",
  //   login: function()
  //   {
  //     if(this.username=="system" && this.password=="12345")
  //     {
  //       return true
  //     }
  //     else {
  //       {
  //         return false
  //       }
  //     }
  //   }
  // }
  //  var manger={}
  //  manager.__proto__=user
  //  manager.username="system"
  //  manager.password="123456"
  //  manager.login()
  //  console.log(manager.login());
/////////////////////////////////////////////////////////
// // new keyword:- new keyword can be used to create new objects and supplie to a constractor function as "this" object& return the same object at the end of function.
//  var student=function(stdname,age,id)
//  {
//    student.stdname= stdname,
//    student.age=age,
//    student.id=22,
//    student.getdetails=function()
//    {
//
//      return this.student;
//    }
//    return student;
//  }
//  var stduent1=new student("suresh",22,25)
//   console.log(stduent1);
//....................................................
// var person= {
//               personName:"suresh",
//               birthday:
//               function birthday()
//               {
//                   console.log(this.personName)
//                   return "happy birthday"
//
//               }
//           }
//
//           console.log(person.birthday( ))
//........................................
// var n=22
//  function square(num)
//  {
//    let a=num*num
//    return a
//  }
//  var square1= square(n);
//  var square2=square(10)
//  console.log(square);
//  console.log(square2);
////////////////////////////////////////////////////////////
// var a=[1,3,4,6]
//  var b=a.pop()
//  var c=a.reverse()
//  var d=c.reverse()
// var e=a.map()
//
// console.log(b);
// console.log(a);
// console.log(c);
// console.log(d);
// console.log(e);
////////////////////////////
// var a=["suresh"]
// console.log(a);
// var b=a.reverse()
// console.log(b);
////////////////////
// reverseof number method 1
// var a=123456
// var b=0
//   while(a!==0)
//   {
//     c=a%10;
//     b=b*10+c;
//     a=Math.floor(a/10)
//
//   }
//   console.log(b);
/////////////////////////
//reverseof number method 2
 // var a=123456789
 //  var b=parseInt(a.toString().split("").reverse().join(""));
 //  console.log(b);
 ////////////////////
////////////////////
// var a="my name is suresh"
// var b=a.split("").reverse().join("")
//  console.log(b);
//  var c=b.split(" ");
//  console.log(c.reverse().join(" "));
/////////////////////////////////////////////
//desending order of array
// var s=[1,5,2,6,3,7,9,8]
// s.sort((a,b)=>
// {
// return b-a
// })
// console.log(s);
/////////////////////////
//desending order of string
// var s=["s","u","r","e","s","h"]
// var k=s.sort((a,b)=>
// {
//    return b.localeCompare(a)
// })
// console.log(k);
////////////////////////////////
//find even numbers in an array
// var s=[1,2,5,4,6,8,9]
// var r=s.filter((s)=>{
//   return s%2
// })
// console.log(r);
//
/////////////////////////
var s=[1,2,5,4,6,8,9]
 var r=s.map((s)=>{
  return s/2
}
)
console.log(r);
