//Map
var m = new Map([['xiaoming',100],['xiaohong',99],['xiaoxiao',98]]);
console.log(m.get('xiaohong'));
m.delete('xiaoming');
m.set('xiao1',100);
console.log(m);
//Set 一组key的集合
var s  = new Set([1,2,3,4]);
s.add('3');
console.log(s);

