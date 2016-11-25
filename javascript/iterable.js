//ES6标准：array map set  都属于iterable类型

var a = [1,2,3,4];
var s = new Set(['A','B','C']);
var m = new Map([[1,'x'],[2,'y'],[3,'z']]);

for(var x of a){
   console.log(x);
}
for(var x of s){
   console.log(x);
}
for(var x of m){
   console.log(x[0]+':'+x[1]);
}


//foreach 循环迭代
var a = ['A','B','C'];
a.forEach(function(element,index,a){
   console.log(element);
   console.log(index);
   console.log(a);
});

a.forEach((e,i,a)=>{
    console.log(e);
    console.log(i);
    console.log(a);
});

var m  = new Map([['xiaoxiao',1],['xiaohong',2],['xiaoming',3]]);

m.forEach(function(element,index,m){
   console.log(element);
   console.log(index);
   console.log(m);
});
m.forEach((e,i,m)=>{
   console.log(e);
   console.log(i);
   console.log(m);
});