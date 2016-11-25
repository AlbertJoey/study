var arr =[1,2,true,null,'hello',{name:'chengjun',sex:'password'}];
console.log(arr[5]);
console.log(arr.indexOf('hello'));
console.log(arr.indexOf(null));

//slice(截取)
var arr1= arr.slice(0,3);
console.log(arr1);
console.log(arr.slice(4));
var acopy = arr.slice();
console.log(acopy);
console.log(acopy===arr);// false ???

//push pop(尾追加删除)
arr.push('FF','AAAAA','BBB');
console.log(arr);
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);

//shift和unshift(头追加删除)
arr.shift('hello');
console.log(arr);
arr.unshift('hello world');
console.log(arr);

//sort(排序)
console.log(arr.sort())

//reverse(翻转)
console.log(arr.reverse());

//splice(从指定位置删除之后再添加)
var arr1 = ['Oracle','Miscrosoft','Apple','Alibaba','Yahoo','AOL'];
arr1.splice(2,2,'Apple1','Alibaba1');
console.log(arr1);//[ 'Oracle', 'Miscrosoft', 'Apple1', 'Alibaba1', 'Yahoo', 'AOL' ]
arr1.splice(2,2);
console.log(arr1);//[ 'Oracle', 'Miscrosoft', 'Yahoo', 'AOL' ]
arr1.splice(2,0,'Goole','FaceBook');
console.log(arr1);//[ 'Oracle', 'Miscrosoft', 'Goole', 'FaceBook', 'Yahoo', 'AOL' ]

//concat(连接)
var arr = [1,2,3];
var arr1 = ['A','B','C'];
var arr2 = arr.concat(arr1);
console.log(arr2);//[ 1, 2, 3, 'A', 'B', 'C' ]
var arr3 = [1,2,3,[4,5,6,[7,8,9]]];
console.log(arr1.concat(arr3));//[ 'A', 'B', 'C', 1, 2, 3, [ 4, 5, 6, [ 7, 8, 9 ] ] ]
console.log(arr1.concat(1,2,3,[4,5]));//[ 'A', 'B', 'C', 1, 2, 3, 4, 5 ]
 

//join(把当前的数组用指定的字符串连接起来)
var arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.join('-'));//1-2-3-4-5-6-7-8-9





