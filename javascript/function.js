 //arguments 指向当前函数的调用者传入的所有参数
 function foo(x){
     console.log(x);
     for(var i=0;i<arguments.length;i++){
         console.log(arguments[i]);
     }
 }
 foo(1,2,3,4);
 //rest 参数获取定义参数以外的参数
 function foo1(a,b,...rest){
     console.log(a);
     console.log(b);
     console.log(rest);
 }
 foo1(1,2,3,{name:'xiaoxiao'});
 function foo() {
     var x = 1;
     function bar() {
         var y = x + 1;
         console.log(y);//内部函数可以调用外部函数的变量
     }
     console.log(y);//此处报错
 }
 foo();
 'use strict'
 function foo() {
     var x = 1;
     function bar() {
         var x = 'a';
         console.log('bar() x is: ' + x);
     }
     bar();
     console.log('foo() x is :' + x);
 }
 foo();
 //全局作用域
 var  course = 'learn javascript';
 console.log(course);
 console.log(window.course);
 function foo(){
     for(var i = 0;i<100;i++){
     }
     i+=100;
     console.log(i);
 }
 foo();
 function foo() {
     for (let i = 0; i < 100; i++) {
     }
     i += 100;
     console.log(i);
 }
 foo();
//闭包   Closure
//求和函数
 function sum(arr) {
     return arr.reduce((x, y) => {
         return x + y;
     });
 }
 var s = sum([1, 2, 3, 4, 5, 6]);
 //但是，如果不需要立刻求和，而是在后面的代码中，根据需要再计算怎么办？可以不返回求和的结果，而是返回求和的函数！
 function lazy_sum(arr) {
     var sum = () => {
         return arr.reduce((x, y) => {
             return x + y;
         });
     }
     return sum;
 }
 var d = lazy_sum([1, 2, 3, 4, 5]);
 var e = lazy_sum([1, 2, 3, 4, 5]);
 var a = d();//15
 console.log(d===e);//false  ???
 function count() {
     var arr = [];
     for (var i = 0; i <= 3; i++) {
         arr.push(() => {
             return i * i;
         });
     }
     return arr;
 }
 var results = count();
 var f1 = results[1];
 var f2 = results[2];
 var f3 = results[3];
 console.log(f1()); //16
 console.log(f2()); //16
 console.log(f3()); //16
//返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量
 var a = ((x) => {
     return x * x;
 })(5);
 console.log(a);


//封装
function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: () => {
            x += 1;
            return x;
        }
    }
}
var c = create_counter();
console.log(c.inc());
console.log(c.inc());
console.log(c.inc());