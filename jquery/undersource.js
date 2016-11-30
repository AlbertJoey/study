////第三方类库 undersource
_.map([1, 2, 3], (x) => x * x);//[1,4,9]
_.map({ a: 1, b: 2, c: 3 }, (v, k) => {
    return k + '=' + v;
})//['a=1','b=2','c=3']

_.ervery([1, 2, 3, 4, -1], (x) => x > 0);//false
_.some([1, 2, 3, -2], (x) => x > 0);//true

var arr = [1, 2, 3, 4, 5];
_.max(arr);//5
_.min(arr);//1

//group by
var sources = [45, 65, 67, 88, 23, 90, 34, 87, 100];
var groups = _.groupBy(sources, (x) => {
    if (x < 60) {
        return 'C';
    }
    else if (x >= 60 && x < 80) {
        return 'B';
    }
    else {
        return 'A';
    }
});

/// shuffle(随机打乱数组) / sample(随机选取一个或者多个元素)
_.shuffle([1, 2, 3, 4, 5, 6]);

_.sample([1, 2, 3, 4, 5, 66, 5]);//[1,2,66]

//undersource array 操作

var arr1 = [1, 3, 3, 4, 5, 6, 7, 8];
_.first(arr1);
_.last(arr1);

//flatten
_.flatten([1, [2, 3, [4, 5]]]);//[1,2,3,4,5]


//zip unzip 
var names = ['xiaoxiao', 'xiaohong', 'xiaoming'];
var sources1 = [98, 97, 96];
var nameAndSource = _.zip(names, sources1);//[['xiaoxiao',98],['xiaohong',97],['xiaoming',96]];
var UnNameAndSource = _.unzip(nameAndSource);//[['xiaoxiao','xiaohong','xiaoming'],[98,97,96]];

var userSource = _.object(names, sources1); //{'xiaoxiao':98,'xiaohong':97,'xiaoming':96}

//range() 快速生成一个序列

var arr3 = _.range(10);//[0,1,2,3,4,5,6,7,8,9];
var arr4 = _.range(1, 11);//[1,2,3,4,5,6,7,8,9,10];

///bind()
var log = _.bind(console.log, console);
log('hello world');

///partial() 偏函数 固定第一个参数
var pow2N = _.partial(Math.pow, 2);
pow2N(3); // 8
pow2N(5); // 32
pow2N(10); // 1024

//偏函数固定第二个参数
var cube = _.partial(Math.pow, _, 3);
cube(3); // 27
cube(5); // 125
cube(10); // 1000


////memoize
var factorial = _.memoize(function (n) {
    console.log('start calculate ' + n + '!...');
    var s = 1, i = n;
    while (i > 1) {
        s = s * i;
        i--;
    }
    console.log(n + '! = ' + s);
    return s;
});

factorial(10);//进行调用运算
factorial(10);//直接走缓存

//once  只执行一次
var register = _.once(function () {
    alert('Register ok!');
});
// 测试效果:
register();//执行
register();//不执行
register();//不执行

//delay 延迟执行
_.delay(log, 2000, 'hello world');
var log = _.bind(console.log, console);