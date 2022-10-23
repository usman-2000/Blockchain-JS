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
// let operator = "+"

// operator == "+" ? console.log(value1+value2) : operator == "*" ? console.log(value1*value12) :
// operator =="/" ? console.log(value1/value2) : console.log("not defined")




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



// OBjects mn naam apni mrzi sy nahi de skty

// let obj1 = {
//     name: "Usman",
//     age:18

// }

// let{name,age} = obj1

// console.log(name,age)
// console.log(name)




//  =================  FUNCTIONS ============




// function abc(){
//     console.log("abc")
// }
// abc()

// let a = (c) =>{
//     console.log(c)
// }

// a(123)


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

// agar single cheez return krani hai to usky liye kch bhi na likho

// let a = (b) => b

// let d = a("asda")
// console.log(d)



// let b = a => a;

// let a = (e) =>{
//     console.log(e)
// }
// a(b("sadasd"))
// //yahan pr a high order hai or b callback function hai



// let a = () =>{
//     console.log("main");
//     return () =>{
//         console.log("nested")
//     }
// }

// let b = a()
// b()

// a()()




// =================ARRAY FUNCTION

// map
// filter   ---- filter returns all indexes jis jis mn condition true hojayegi
// find
// findIndex
// some
// foreach


let a = [
    {
        name:"Usman",
        age:22,
        id:1,
        category:"A"
    },
    
    {
        name:"Rizwan",
        age:22,
        id:2,
        category:"A"
    },
    
    {
        name:"Sami",
        age:22,
        id:3,
        category:"B"
    },
    
    {
        name:"Hassaan",
        age:22,
        id:4,
        category:"C"
    }
]

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



a.forEach(x=>{
    x.inst = "URK"
    // delete x.name; //just checking
})
console.log(a)

let obj = a.find(x=>x.name == "Sami")
console.log(obj)

let status = a.some(x=>x.isChecked)
console.log(status)

let ind = a.findIndex(x=>x.id == 3)
console.log(ind)