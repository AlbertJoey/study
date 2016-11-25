// \d 可以匹配一个数字，\w可以匹配一个数字或一个字母, .可以匹配任何字符
// 用*表示多个或者零个字符，用+表示至少一个字符，用?表示0个或一个字符，用{n}表示n个字符，用{n,m}表示n到m个字符
// [0-9a-zA-Z\_] 可以匹配一个数字、字母、下划线。
// [0-9a-zA-Z\_]+ 可以匹配至少由一个数字、字母或者下划线组成的字符串
// [a-zA-Z\_\$][0-9a-zA-Z\_\$]* 可以匹配由字母数字下划线$开头，后接任意个有数字字母下划线$组成的字符串，也就是javascript允许的变量名
// [a-zA-Z\_\$][0-9a-zA-Z\_\$]{1,19} 更加精准的限制了变量的长度是1-20个字符，(前面一个字符+后面最多19个字符)
// A|B 表示可以匹配A或者B
// ^  表示开头 \d^ 表示以数字开头
// $  表示结束 \d$ 表示以数字结尾

//var re = /^\d{3}\-\d{3,8}$/;
var re = new RegExp('^\\d{3}\\-\\d{3,8}$');
//console.log(re.test('010-12345'));//true
//console.log(re.test('010-1234x'));//false
//console.log(re.test('010 12345'));//false

// var re = new RegExp('^(\\d{3})-(\\d{3,8})$');
// console.log(re.exec('010-12345'));
console.log(re.test('010-123'));


  let firstCharReg = /^[_\$a-zA-Z]/;
  let reg = /^[_\$$a-zA-Z][_\$a-zA-Z0-9]*$/;
  console.log(firstCharReg.test('_'));
