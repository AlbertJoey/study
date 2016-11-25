////利用 map reduce 将一个字符串'13579' 转成 [1,3,5,7,9] 然后再利用 reduce转换成 Number类型 不使用内置的parseInt

function string2Int(s) {
    var arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
        //arr[i] = s[i];
    }
    var d = arr.map((x) => {
        return x - 0;
    }).reduce((x, y) => {
        return x * 10 + y;
    });
    console.log(d);
}
string2Int('34');
string2Int('1245678');

////请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。
function normalize(arr) {
    var d = arr.map((x) => {
        return x.toLowerCase();
    }).map((x) => {
        let r = x[0].toUpperCase();
        x = x.substring(1);
        x = r + x;
        return x;
    });
    return d;
}
console.log(normalize(['admin', 'xIxaoIJ']));


var arr = ['1','2','3'];
console.log(arr.map(parseInt))//[ 1, NaN, NaN ]
console.log(arr.map(Number));//[ 1, 2, 3 ]
//解释：看了好多评论 觉得解释的都不够详细，新手很难能看懂，我也来浅谈一下最后一题小明的疑惑，要解决这个问题，首先我们得先了解一下map和priseInt函数，map函数需要接3个参数，
//currentValue    第一个参数，数组中当前被传递的元素。
//index   第二个参数，数组中当前被传递的元素的索引。
//array   第三个参数，调用 map 方法的数组。
//
//parseInt()函数可解析一个字符串，并返回一个整数。
//语法parseInt(string, radix)；
//string    必需。要被解析的字符串。
//radix    可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
//如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
//如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。
//
//在知道了这两个函数的语法之后，再来看看小明的写法。
//
//var arr = ['1', '2', '3'];
//var r;
//r = arr.map(parseInt);
//
//因为map()接收三个参数，parseInt()接收两个参数，所以map的第三个参数被parseInt忽略了，这个不难理解，但是要注意了，map的第二个参数并没有被忽略。现在来分析下程序，假如现在执行arr的第一个元素，即'1';对应到map参数可知，此时传入map的第一个参数即为被传递的元素'1';第二个参数即为其索引0；这两个参数被传入parseInt中，即parseInt('1', 0);对应到上述parsent的参数规则可知，此时结果为1；
//同理，parseInt('2',1) //radix小于2 返回NaN
//parseInt('3',2) //3是非法的二进制数，返回NaN
//
//最后提醒一下：不要把radix和index搞混淆了!!!