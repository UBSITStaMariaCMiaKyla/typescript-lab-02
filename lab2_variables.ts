// Laboratory Activity 2: TypeScript Variable Types//
// Section 1: Primitive Types
var age:number = 19;
console.log(age)

var isEnrolled:boolean = true;
console.log(isEnrolled)

var studentId:number = 20232386;
console.log(studentId)

var courseName:string = "Application Development 1";
console.log(courseName)

// Section 2: Null and Undefined
var middleName:string = "Celestino";
console.log(middleName)

var graduationYear:undefined;
console.log(graduationYear)

var emailAddress:string | null = "20232386@studentId.ubaguio.edu";
console.log(emailAddress)

// Section 3: Number Operations
var num1:number = 25, num2:number = 17;
console.log(num1, num2)

var sum:number = num1 + num2;
console.log("sum of 25 + 17 = ", sum)

// Section 4: Arrays
var favoriteColors:string[] = ["Dark Black", "Light White", "Light Black"];
console.log(favoriteColors)

var testScores:number[] = [0, 1, 12, 99, 100];
console.log(testScores)

var mixedArray:(string | number)[] = ["Altea Rawr", 8, "Miya", 7];
console.log(mixedArray)

// Section 5: Tuples
var mytuple:[string, number, boolean] = ["Tea", 12, false];
console.log(mytuple)

// Section 6: Object Types

var student: {name:string; id:number; isActive:boolean} = {name: "Teitei", id: 20187187, isActive: true}
console.log(student)

var book: {title:string ; author:string; pages:number; isAvailable:boolean;} = {title: "Harry Potter", author: "JK Rowling", pages: 1000, isAvailable: true}
console.log(book)

var course:{courseCode:string ; courseName:string; units:number; instructor:string} = {courseCode:"APPDEV1", courseName:"BSIT", unit:"2", instructor:"Hydi Toyeng"}
console.log(course)






