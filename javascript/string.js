//ASCII字符 和 Unicode字符

//alert多行效果
alert('a \n tt \n xx');
alert(`xx
yy
cc`);

//字符串是不可变的，对字符串索引赋值没有任何效果。
var name = 'chengjun';
name[0]='x';
alert(name);//chengjun

//转换大小写
var name = 'chengjun';
console.log(name.toUpperCase());
var upperName=name.toUpperCase();
console.log(upperName.toLowerCase());

//indexOf
var s  = 'hello world';
console.log(s.indexOf('world'));//6
console.log(s.indexOf('World'));//-1

//substring
var s = 'hello world';
console.log(s.substring(0,5));
console.log(s.substring(6));



