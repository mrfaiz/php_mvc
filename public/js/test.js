/*for(let i =0;i<3;i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
}
*/

function f1(){
    console.log(1);
}

 function f2(callback){
     console.log(2);
     callback();
 }

 //f2(f1);

 var myArray = [{id:1,name:'Faiz'},{id:3,name:'Hello'},{id:2,name:'Aest'}];

 myArray.sort((var1,var2)=>{
   return  (var1.name > var2.name)? -1: 1;
 });

 //console.log(myArray);

 (function(){
     c = 5;
     {
        var a = b =3;
    }
    //console.log(`inside function1 ${a}`);
 })();
 //console.log(b);
 //console.log(c);
 //console.log(a);

 var obj = {
     foo:"bar",
     func: function(){
         var self = this;
         console.log("outer func this.foo "+ this.foo);
         console.log("outer func self.foo "+ self.foo);
         (function (){
            console.log("inner func this.foo "+ this.foo);
            console.log("inner func self.foo "+ self.foo);    
         })();
     }
 }
 //obj.func();

 //console.log(Number.isNaN('3'));

//console.log(0.1 + 0.2);
//console.log(0.1+0.2 == 0.3);

//console.log(Math.ceil(2.23));

function isPalindrome(str){
    str = str.replace('/\W/g','').toLowerCase();
    return (str === str.split('').reverse().join(''));
}

//console.log("palindrome => "+ isPalindrome('levels'));

//var abc = 'abcd';
//console.log(abc.split('').reverse().join(''));

d = {};
['A','B'].forEach(function(k){
    d[k]=1;
});
//console.log(d);

var arr1="john".split('');

var arr2 = arr1.reverse();

var arr3 ="jones".split('');

arr2.push(arr3);

//console.log(arr1);
//console.log(arr2);

var v=1;
var v2=v;
v2=5;

//console.log(v+" "+v2);

/*console.log(1+"2"+"2");

console.log(1+ +"2");
console.log("A" - "B" + "2");
console.log(+"1"+"1"+"2");
console.log("A" - "B" + 2);

console.log(1+ -"1" + "2");*/

/*console.log(0||1);
console.log(1||2);
console.log(2&&1);
*/

//console.log(true === '1');

var a ={}, b={key:'b'}, c={key:'c'};

a[b] = 123;
a[c] = 456;

//console.log(a);

var length = 10;
function fn(){
    console.log(this.length);
}

var obj = {
    length:5,
    method: function(fn){
        fn();
        arguments[0]();
    }
};

//obj.method(fn,1);

/*(function(){
    try{
        throw new Error();
    }catch(x){
        var x=1,y=2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
*/

var obj  = {a:1,b:2};
var obj2 = Object.assign({},obj);
obj2.a=4;

//console.log(obj);
//console.log(obj2);

var arra = [3,4,5,6];
arra=[2,...arra];
arra=[...arra,7];
//console.log(arra);

var a =[1,2,3];
a[10] =10;
//console.log(a[6]);


//console.log(typeof 1);
//console.log(typeof typeof 1);

var b=1;
function outer(){
var b =2;
    function inner(){
        b++;
        var b =3;
        console.log(b);        
    }
    inner();
}
//outer();

/*for (name of ["nkgokul", "BrendanEich", "gaearon"]) {
    userDetails = await fetch("https://api.github.com/users/" + 'name');
    userDetailsJSON = await userDetails.json();
    console.log("userDetailsJSON", userDetailsJSON);
  }
*/

//console.log(Date.now());

var startNow = Date.now();

function getExecuteAt(){
    return Date.now() - startNow;
}

async function fetchUserDetails(){
    i = 0;
    var list = ["mrfaiz","nkgokul", "BrendanEich", "gaearon"];
    for(name of list){
        i++;
        console.log(`Starting API call no ${i} for ${name} at ${getExecuteAt()}`);
        let userDetails = await fetch("https://api.github.com/users/"+name);
        let userDetailsJson = await userDetails.json();
        console.log(`Ended API call no ${i} at ${getExecuteAt()}`);
        document.getElementById("demo").innerHTML = userDetailsJson['name'];
      //  console.log(name+"=> "+userDetailsJson);
    }
}

//fetchUserDetails();

let myprom = new Promise((resolve,reject)=>{

});

console.log([] + []);

const x = 'constructor';
console.log(x[x](06));