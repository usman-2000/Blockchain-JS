// let,const,var

// var============= is not a blockscope , reinitializable hota hai , re-assigning(yes),  hoisting(yes)

// let============== is a block scope, reinitializeable nahi hai is mn , re-assigning(yes)

// const's ============== value doesn't change, also a blockscope , No reinitializaable, re-assigning(No),  hoisting(No),  hoisting(No)


// hoisting : apna scope chor kr document k top pr chala jata hai or global bann jata hai(accessable from everywhere)


// ==================  var

// if(true){
//     var a ="abc"
// }
// console.log(a)
// var a = "abc"
// var a = 123
// console.log(a)
// // yahan pr hoisting kr rahay, value ni mily gi but variable declare ho chuka hai
// console.log(a)
// var a = "abc"


// ====================   let


// if(true){
//     let a ="abc"
// }
// console.log(a)
// let a = "abc"
// let a = 123
// console.log(a)

// console.log(b)
// let b = "abc"

// ====================   const


// if(true){
//     const a ="abc"
// }
// console.log(a)
// const a = "abc"
// const a = 123
// console.log(a)

// console.log(c)
// const c = "abc"


// ==================   Hoisting a Function
// function keyword sy banaye huwe function of var keyword sy banaye huwe variables hoist ho jatay hain

// abc()
// function abc(){
//     console.log("abc")
// }


// yahan pr function khud hoist ho jata hai

// function abc(){
//     var a = "abc"
// }
// console.log(a)




// ============ OBJECTS

//  collection of information store krty hain

// let std1 = {
//     name: "Ali",
//     age: 18,
//     contact: 1231231
// }

// console.log(std1)
// console.log(std1.name)
// console.log(std1.age)
// console.log(std1.contact)

// std1.inst ="SAIMS"
// console.log(std1)

// std1.name = "ABC"
// console.log(std1)

// delete std1.age
// console.log(std1)




// ============== Template Literals ==============



// let a = 30
// console.log("person: "+ a)

// //yahan py hm iski jaga template literals use krty hain

// console.log(`person is ${a}`)
// console.log(`the square root of ${a} is ${a**a}`)

// let a = 2;
// let b = 3;

// console.log(`the multiplication of ${a} and ${b} is ${a*b} `)

// let fname = " USman"
// let lname = "Rahim"
// let age = 18

// console.log(`My name is ${fname} ${lname}. I am ${age} years old. Thankyou`)



// =================== Ternary Operators =============

// use is if else condition , react mn bhht use hota hai

// if(true){
//     console.log("True Cond")
// }else{
//     console.log("FALSE Cond")
// }

// true ? console.log("True Cond") : console.log("FALSE cond")


// 10 !=10 ? console.log("True Cond") : console.log("FALSE cond")

// let age = 11;
// let studentCard = true

// age == 18 ? console.log("Allow") : studentCard == true ? console.log(" Allow on Student Card") : console.log("Not Allowed")

// let value1 = 20;
// let value2 = 30;
// let operator = "*"

// let value1 = +prompt("Value 1","enter val 1");
// let value2 = +prompt("Value 2");
// let operator = prompt("Operator?")

// operator == "+" ? console.log(value1+ value2) : operator == "*" ? console.log(value1* value2) :
// operator =="/" ? console.log(value1/value2) : console.log("not defined")


// var name = prompt("Enter Name here..")

// name == "Usman" ? console.log("Allowed"): console.log("Not Allowed");





//  ====================  SPREAD OPERATORS



// we are going to merge this. We use spread operators for this. spread operator andr ki sari values laa kr de deta hai


// let obj1 = {
//     name : "USman",
//     age:18
// }

// let obj2 = {
//     inst: "Rahim",
//     marks: 80,
//     ...obj1
// }

// let obj3 = {
//     ...obj2
// }
// console.log(obj2)
// console.log(obj3)


// let a = [1,2,3]
// let b = ["a","b","c", ...a]
// console.log(b)



// let student = {
//     Name: "Usman Rahim",
//     Age : 22,
//     Class: "BSSE Sec A",
//     CGPA : 3.4
// }

// let moreInfo = {
//     UniversityName : "University Of Karachi",
//     DepartmentName : "UBIT"
// }

// let studentInformation = {
//     ...student,
//     ...moreInfo
// }

// console.log(studentInformation)


// let Array1 = ["ABC","DEF",22];
// let Array2 = ["Ioiioajsoiaioshfa", ...Array1]

// console.log(Array2)





// =================== Destructuring ========





// let a = ["a","b","c","d"]

// let b = a[2]
// let c = a[3]
// let d = a[0]

// hr aik index ki value alag hai , bar bar alag variable banana parta hai to usky liye easy way yeh hai

// let [firstval,secVal,thirsdVal] = a
// console.log(secVal)

// let [,,thirdVal] = a
// console.log(thirsdVal)

// function abc(){
//     return ["a","b","c","d"]
// }

// let [,,,frth] = abc();
// console.log(frth)

// function cba(a){
//     return [a]
// }
// let [fist] =cba("abc")
// console.log(fist)



// let values = [12,32,55,66,7,87,5];
// let [first,second,third,fourth,fifth,sixth,seven] = values;

// console.log(second);
// console.log(fifth)
// console.log(seven)

// function valueGetter(){
//     return[21,3,4,53,43]
// }

// let [first,second,third,fourth,fifth] = valueGetter()
// console.log(third);


// function hehe(a){
//     return [a]
// }

// let [first] = hehe("abc")
// let [second] = hehe("def")

// console.log(first)
// console.log(second)




// OBjects mn naam apni mrzi sy nahi de skty

// let obj1 = {
//     name: "Usman",
//     age:18

// }

// let{name,age} = obj1

// console.log(name,age)
// console.log(name)


// let obj2 = {
//     name:"Usman Rahim",
//     FatherName:"Abdul Rahim",
//     age:22,
//     Class:"Intermediate",
// }

// let {name,FatherName,age,Class} = obj2;
// console.log(name,age)
// console.log(name+" | "+FatherName)

//  =================  FUNCTIONS ============




// function abc(){
//     console.log("abc")
// }
// abc()

// let a = (c) =>{
//     console.log(c)
// }

// a(123)


// let sum = (a,b) =>{
//     console.log(a+b)
// }
// sum(12,2)

// let multiply = (a,b,c)=>{
//     console.log(a*b*c)

// }
// multiply(2,2,3)


// agar single parameter de rahay hain to rpound bracket bhi hata sakty hain

// let a = c =>{
//     console.log(c)

// }
// a(2131)

// let b = () =>{
//     return "abc"
// }

// let d = b();
// console.log(d)


// let mean = a =>{
//     console.log(a)
// }
// mean(1231)


// let beta = () =>{
//     return 12+12+12;
// }
// let add = beta()
// console.log(add)
// console.log(beta())


// agar single cheez return krani hai to usky liye kch bhi na likho

// let a = (b) => b

// let d = a("asda")
// console.log(d)


// let single = (a,b) => a+b;
// console.log(single(2,2))

// let double = (a,e,d,r) => a+e+d+r;
// console.log(double(2,2,2,2))


// let b = a => a;

// let a = (e) =>{
//     console.log(e)
// }
// a(b("sadasd"))
// //yahan pr a high order hai or b callback function hai


// let variable = first => first;
// let first = e => console.log(e);

// first(variable("Hello World"))


// let a = () =>{
//     console.log("main");
//     return () =>{
//         console.log("nested")
//     }
// }

// let b = a()
// b()

// a()()


// let main =() =>{
//     console.log("Main")
//     return () =>{
//         console.log("Nested")
//     }
// }

// main()()






// =================ARRAY FUNCTION





// map
// filter   ---- filter returns all indexes jis jis mn condition true hojayegi
// find --- find one specific thing
// findIndex
// some
// foreach






// let a = [
//     {
//         name:"Usman",
//         age:22,
//         id:1,
//         category:"A"
//     },
    
//     {
//         name:"Rizwan",
//         age:22,
//         id:2,
//         category:"A"
//     },
    
//     {
//         name:"Sami",
//         age:22,
//         id:3,
//         category:"B"
//     },
    
//     {
//         name:"Hassaan",
//         age:22,
//         id:4,
//         category:"C"
//     }
// ]

// a.map((e)=>{
//     console.log(e)
// })

// let b = a.map((e)=>{
//     console.log(e)
//     return e
// })

// console.log(b)

// a.filter(x=>{
//     console.log(x)
// })

// let b = a.filter(x=>{
//     if(x.category == "A"){
//         return x;
//     }
// })
// console.log(b)

// let b = a.filter(x=>x.category=="A")
// console.log(b)



// a.forEach(x=>{
//     x.inst = "URK"
//     // delete x.name; //just checking
// })
// console.log(a)

// let obj = a.find(x=>x.name == "Sami")
// console.log(obj)

// let status = a.some(x=>x.isChecked)
// console.log(status)

// let ind = a.findIndex(x=>x.id == 3)
// console.log(ind)





// -----------------------------------------------


// let a = [
//     {
//         BookName:"Learn English in 20 Days",
//         AuthorName:"William Basheera",
//         BookID:1,
//         language:"English",
//         category:"A"
//     },
//     {
//         BookName:"Hello Programming",
//         AuthorName:"Mike Tyson",
//         BookID:2,
//         language:"English",
//         category:"B"
//     },
//     {
//         BookName:"Hello Programming",
//         AuthorName:"Mike Tyson",
//         BookID:3,
//         language:"English",
//         category:"A"
//     }
// ]

// a.map((e)=>{
//     console.log(e)
// })
// a.map(()=>{
//     console.log(`The name of the book is ${a[0].BookName} and the author is ${a[0].AuthorName}`)
// })



// a.filter(x=>{
//     console.log(x)
// })

// let b = a.filter(x=>{
//     if(x.BookID==2){
//         console.log(x.BookName,x.AuthorName)
//     }
// })

// let c = a.filter(x=>x.BookID==1)
// console.log(c)


// a.forEach(x=>{
//     x.institute="URK ENTERPRISES"
// })
// console.log(a)

// let names = a.find(x=>x.BookName == "Hello Programming")
// console.log(names)

// let status = a.some(x=>x.category=="A")
// console.log(status)

// let status1 = a.some(x=>x.BookID==4)
// console.log(status1)


// let ind1 = a.findIndex(x=>x.BookID==1)
// console.log(ind1)

// let ind2 = a.findIndex(x=>x.BookID==2)
// console.log(ind2)

// let ind3 = a.findIndex(x=>x.BookID==5)
// console.log(ind3)