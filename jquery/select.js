//ID
$('#userName');
//class
$('.red.green');
//Tag
$('p');
//属性查找
var email = $('[name=email]');
var passwordInput = $('[type=password]');
var a = $('[items="A B"]');
var icon = $('[name^=icon]');
var names = $('[name$=with]');

var icons = $('[class^="icon-"]');
//组合查找
var emailInput = $('input[name=email]');
var tr = $('tr.red');

//多项选择器
var pdiv = $('p,div');
var p1 = $('p.red,p.green');

//层级选择器（Descendant Selector）
$('ul.lang li.lang-javascript');
$('div.testing li.lang-javascript');
$('form[name="upload"] input');
$('form.test p input');//选择在form中被p包含的input

//子选择器
$('ul.lang>li.lang-javascript');
$('div.testing>li.lang-javascript');

//过滤器(filter)
$('ul.lang li');
$('ul.lang li:first-child');
$('ul.lang li:last-child');
$('ul.lang li:nth-child(2)');//选取第n个元素，n从第1一个元素开始
$('ul.lang li:nth-child(even)');//选出序列号为偶数的元素
$('ul.lang li:nth-child(odd)');//选出序列号为奇数的元素

//form相关
$(':input');
$(':file');
$(':checkbox');
$(':radio');
$(':focus');
$(':enabled');
$(':disabled');

//查找过滤
var ul = $('ul.lang');
var dy = ul.find('.dy');
var swf = ul.find('#swift');
var hsk = ul.find('[name=hskell]');

var swf = $('#swift');
var parent = swf.parent();
var a = swf.parent('div.red');//????????????

//filter
var langs = $('ul.lang li');
var a = langs.filter('.dy');

var langs = $('ul.lang li');
lang.filter(function () {
    return this.innerHTML.indexOf('s') === 0;
});


var langs = $('ul.lang li');// 拿到JavaScript, Python, Swift, Scheme和Haskell
var arr = langs.map(function () {
    return this.innerHTML;
}).get(); // 用get()拿到包含string的Array：['JavaScript', 'Python', 'Swift', 'Scheme', 'Haskell']

var langs = $('ul.lang li');
var js = langs.first();
var haskell = langs.last();
var sub = langs.slice(2, 4);


var div = $('#test');
div.hasClass('highlight');
div.addClass('highlight');
div.removeClass('highlight');


////<div id="test-div">
////    <ul>
////        <li><span>JavaScript</span></li>
////        <li><span>Python</span></li>
////        <li><span>Swift</span></li>
////    </ul>
////</div>

var ul = $('test-div>ul');
ul.append('<li><span>hello</span></li>');

//append()把DOM添加到最后，prepend()则把DOM添加到最前。
var ps = document.createElement('li');
ps.innerHTML = '<li><span>hello</span></li>';
ul.append(ps);
ul.append($('#userName'));
ul.append(function (index, html) {
    return '<li><span>language-' + index + '</span></li>';
})

var li = $('#test-div>ul>li');
li.remove();