$.ajax('url', { dataType: 'json' }).done((data) => {
    console.log('success');
}).fail((data) => {
    console.log('fail');
}).always(() => {
    console.log('成功失败都会走这里');
})


//// extends 
$.fn.highlight1 = () => {
    this.css('backgroundColor', '#fff').css('color', '#d85030');
    return this;
}
$('span.h1').highlight1();
$('p a.h1').highlight1();
////带参数的扩展
$.fn.highhlight2 = (options) => {
    var bgcolor = options && options.backgroudColor || '#fff';
    var color = options && options.color || '#d85030';
    this.css('backgroundColor', bgcolor);
    this.css('color', color);
    return this;
}

var opts = $.extend({}, {
    backgroudColor: '#fff',
    color: '#d8030'
}, options);


////最终版
$.fn.highlight = (options) => {
    var opts = $.extend({}, $.fn.defaults, options);
    this.css('backgroudColor', opts.backgroudColor).css('color', opts.color);
    return this;
}
$.fn.defaults.backgroudColor = '#ffff';
$.fn.defaults.color = '#d85030';

////最终，我们得出编写一个jQuery插件的原则：
////
////给$.fn绑定函数，实现插件的代码逻辑；
////插件函数最后要return this;以支持链式调用；
////插件函数要有默认值，绑定在$.fn.<pluginName>.defaults上；
////用户在调用时可传入设定值以便覆盖默认值。


////针对特定元素的扩展

$.fn.external = () => {
    return this.filter('a').each(() => {
        var a = $(this);
        var url = a.attr('href');
        if (url && url.indexOf('https://') === 0 && url.indexOf('http://') === 0) {
            a.attr('href', '#f0')
                .removeAttr('target')
                .append('<i class = "aaa"></i>')
                .click(() => {
                    if (confirm('你确定跳转么？')) {
                        window.open(url);
                    }
                });
        }
    });
}
$('#main f1').external();