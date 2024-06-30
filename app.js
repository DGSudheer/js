console.log('Hello');

const emp = {
    name: 'abc',
    age: 22,
    salary: 200,
    getSalary() {
        console.log(`${this.name} has salary ${this.salary}`);
    }
};

let hello = () => {
    console.log('hi');
}

let square = n => {
    console.log(`${n*n}`);
}

let sum = (a,b) => {
    console.log(a+b);
}

let cube = n => n*n*n;

let pow = (n,i) => (n**i);


//setTimeout(() => {console.log('Hello');} , 4000 );

//SetTimeInterval();

let i = setInterval(()=>{console.log('logging');},2000);
setTimeout(()=>{clearTimeout(i)},11000);



//

//let arr = [1,2,3,4,5,6,7,8,9,0];
let arr = [-1,0];
let r = arr.reduce((res,el)=>{
    if(res>el){
        return res;
    }
    else{
        return el;
    }
});
console.log(r);
















// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// for(let j=1;j<16;j++){
//     if(j%2===1){
//     console.log(j);}
// }

// let s = prompt('Guess the movie');
// while(s!='KGF' && s!='quit'){
//     s = prompt('Guess the movie');
//     alert("Oh you didn't guess!");
// }
// alert('You guessed it right!');