console.log('Hello');
//alert('Who');
let v="init";
var a='d';
console.log(v);
console.log(a);

let firstName='Abc';
let FirstName='xyZ';

const interest=0.95+'0.0091';
//interest=.89;
console.log(interest);

console.log('primitive type');
let colour = 'white';
let age = 12;
let isMinor = true;
let matitalStatus = undefined;
let selectedColour = null;
let n = Symbol;
console.log(n);
console.log(typeof n);
console.log(typeof selectedColour);

console.log('reference type');
let abc = {};
let obj = {
    name:'Raj',
    DOB: '12/1/99'
}
console.log(obj.name);
obj.name='Kumar';
obj['name']='Hari';
console.log(obj.name);
let prop = 'name';
obj[prop] = 'runtime';
console.log(obj.name);

let arr = [];
console.log(arr);
console.log(typeof arr);
arr[1]='Manoj';
console.log(arr);
console.log(arr[0]);


function greet() {
    console.log('Hello');
}
greet();

function add(a,b) {
    return a + ' ' + b;
}
//let ans = ;
console.log(add(1));
//let x = ;
console.log(add(1,'a'));
//let y = ;
console.log(add(1,2));