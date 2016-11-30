////<a id="test-link" href="#0">点我试试</a>
//
//var a = $('#test-link');
//
////绑定事件
//a.on('click', function () {
//    console.log('hello');
//});
//
//////Jquery绑定的事件主要有
//click：//鼠标单击事件
//dbclick://鼠标双击事件
//mouseenter：//鼠标进入触发
//mouseleave://鼠标移出触发
//mousemove://鼠标在DOM内部移动触发
//hover://鼠标进入和退出触发两个函数
//
//
//////键盘事件
//keydown:键盘按下时触发
//keyup：键盘松开时触发
//keypress:按键一次后触发
//
//////其他事件
//focus:当DOM获取焦点的时候触发
//blur:当DOM失去焦点的时候触发
//change:当<input><textarea><select>的内容发生改变时触发
//submit:当<form>提交时候触发
//ready:当页面被载入并且DOM树完成初始化候触发



$(document).on('ready', function () {
    $('#testForm').on('submit', function () {
        console.log('submit');
    });
});
$(document).ready(function () {
    $('#testForm').on('submit', function () {
        console.log('submit');
    });
});

$(function () {

});
//以上3个都是document对象的ready事件处理函数
$(function () {
    $('testMouseMoveDiv').movsemove(function (e) {
        $('testMoveSpan').text('pageX:' + e.pageX + 'pageY:' + e.pageY);
    })
})


//绑定与解除绑定

function hello() {
    console.log('hello');
}
a.click(hello);
setTimeout(function () {
    a.off('click', hello);
}, 10000);
a.off('click', function () {
    console.log('hello');
});
//notes:此处虽然函数是相同的但是他们是两个不同函数对象，off('click',function(){})无法取消一个已经绑定的匿名函数

//事件触发条件是由用户的操作引发的
var input = $('#test-input');
input.change(function () {
    console.log('input changed');
});
input.val('hello world');//将没有办法触发change事件
//如果我们希望可以触发change事件的话可以使用无参的change()方法
input.change();//可以触发change事件


//浏览器的安全限制

$(function () {
    window.open('/');
});//不能执行必须由用户的操作来控制

var button1 = $('#testButton1');
var button2 = $('#testButton2');

function testOpenWindow() {
    window.open('/');
}

button1.click(function () {
    testOpenWindow();
});
button2.click(function () {
    setTimeoutd(
        testOpenWindow//此处将不能被执行因为不是用户直接操作 
        , 10000);
})



////animate
var div = $('#test-div');
div.hide(3000);
div.show(3000);
var div1 = $('#test-slideUp');
div1.slideUp(3000);
div1.slideDown(3000);
var div2 = $('#test-fadeIn');
div2.fadeIn(3000);
div2.fadeOut(3000);


var div3 = $('#test-animate');
div.animate({
    opacity: 0.25,
    width: '256px',
    height: '256px'
}, 3000, function () {
    console.log('动画已经结束');
    $(this).css('opacity', '1.0').css('width', '128px').css('height', '128px');
})
