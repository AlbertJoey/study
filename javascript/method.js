var xiaoming = {
   name: 'xiaoming',
   birth: 1990,
   age: function () {
       var d = new Date().getFullYear();
       return d - this.birth;
   }
}
console.log(xiaoming.age());

var xiaohong = {
   name: 'xiaohong',
   birth: 1991,
   age: getAge
}
function getAge() {
   var d = new Date().getFullYear();
   console.log('age is :' + (d - this.birth));
   return d - this.birth;
}
xiaohong.age();
getAge.apply(xiaohong, []);


//Apply and call
console.log(Math.max(3, 4, 5, 2));
console.log(Math.max.apply(null, [3, 4, 5, 1]));
console.log(Math.max.call(null, 1, 2, 3, 4, 5));

//装饰器
var count = 0;
var oldParseInt = parseInt;

window.parseInt = () => {
   count += 1;
   return oldParseInt.apply(null, arguments);
}
console.log(parseInt('10'));
console.log(parseInt('20'));
console.log(count);


var data = {
   name: 'chengjun',
   jihe: "规则1\n规则2"
}
var a = data.jihe.replace(/\n/, 'helloworld');
console.log(a);
console.log(data.jihe.replace(/\n/, 'aaaaaaaaaa'));
console.log(data.jihe);

//Higher-order function 高阶函数
function add(x, y, f) {
   return f(x) + f(y);
}
console.log(add(1, -1, Math.abs()));

//map 高阶函数
var f = function (x) {
   return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.map(f));
console.log(arr.map(String));
var b = arr.reduce((x, y) => { return x + y; });
console.log(b);
var c = [1, 3, 5, 7, 9];
var d = c.reduce((x, y) => { return x * 10 + y; });
console.log(d);
var e = c.reduce((x, y) => { return x * y });
console.log(e);

//filter高阶过滤函数

var arr = [, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var d = arr.filter((x) => {
   return x % 2 === 0;
});
console.log(d);

var arr1 = ['', null, 'a', 2, undefined];
var e = arr1.filter((x) => {
   return x && x.trim();
});
console.log(e);


//sort 排序的高阶函数
var arr3 = [1, 20, 3, 5];
console.log(arr3.sort());
var f = arr3.sort((x, y) => {
    if (x > y) { return 1 };
    if (x < y) { return -1 };
    return 0;
})
console.log(f);
//notes：sort()方法会对array直接进行操作放回的结果仍然是Array
var a = ['a', 'b', 'c'];
var a2 = a.sort();
console.log(a === a2);

