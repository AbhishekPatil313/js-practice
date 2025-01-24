console.log("hello")
console.table(["hello","hi","this"]);
const arr=[12,34,4,3,2];    
/* not to use var for declaration of variable   */

console.log(typeof("hello"));
console.log(typeof(undefined));
console.log(typeof(null));

let data;

if(data){
    console.log("the data was undefined");
}

let n = 1235;
while(n>0){
    let digit = Math.floor(n%10);
    console.log(digit)
    n=n/10;
}
