//primitive types
var productName:string = "Laptop";
var price:number = 45000;
var isAvailable:boolean = true;
var quantity:number = 15;
var category:string = "Electronics";

//null & undefined
var discount:number | null = null;
var warranty:string | undefined = undefined;
var supplier:string | undefined = "Tech Supply Co"

//number operations
var length:number = 15, width:number = 10;
var area:number = length*width;
var perimeter:number = (length+width)*(length+width);

//arrays
var fruits:string[] = ["Apple", "Banana", "Orange", "Mango"];
var scores:number[] = [85, 90, 78, 92, 88];
var mixed: (string | number) []= ["John", 25, "Engineer", 50000] 


//tuples
var person: {name:string; age:number; status:boolean} = {name:"Alice", age:28, boolean:true}
var point: {x:number; y:number} = {x:100, y:200}
var product:{code:string; price:number; stockQuantity:number} = {code:"P001", price:2500, stockQuantity:50}

//object types
var employee: {name:string; age:number; position:string} = {name: "Michael", age:30, position:"Developer"}
var car: {brand:string; model:string; year:number; isElectric:boolean} = {brand:"Tesla", model:"Model 3", year:2023, isElectric:true}
var smartphone:{brand:string; model:string; price:number; storage:number; inStock:boolean} = {brand:"samsung", model:"galaxy s24", price:55000, storage:256, inStock:true }
