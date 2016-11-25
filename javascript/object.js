// var xiaoming = {
//     name:'xiaoming',
//     age:12,
//     sex:'man',
//     birth:1990,
//     score:null
// }

// //in(判断属性是否属于一个对象)
// console.log('name' in xiaoming);//true
// console.log('grade' in xiaoming);//false
// console.log('toString' in xiaoming);//true 此处是继承而来

// //hasOwnProperty(自身属性)
// console.log(xiaoming.hasOwnProperty('name'));//true
// console.log(xiaoming.hasOwnProperty('toString'));//false

//  console.log(typeof 123);//number
//  console.log(typeof NaN);//number
//  console.log(typeof 'str');//string
//  console.log(typeof true);//boolean
//  console.log(typeof undefined);//undefined
//  console.log(typeof null);//object
//  console.log(typeof Math.abs);//function
//  console.log(typeof []);//object
//  console.log(typeof {});//object

//console.log(123..toString());
//console.log((123).toString());

////面向对象编程

//var student = {
//    name: 'rabot',
//    height: 1.1,
//    run: function () {
//        console.log(this.name + ' is running');
//    }
//}
//var xiaoming = {
//    name: "xiaoming"
//}
//var bird = {
//    fly: function () {
//        console.log(this.name + ' is flying……');
//    }
//}
////xiaoming.__proto__ = student;
////xiaoming.__proto__ = bird;
////xiaoming.fly();
////xiaoming.run()
//
//function createStudent(name) {
//    var s = Object.create(student);
//    s.name = name;
//    return s;
//}
//
//var xiaoxiao = createStudent('xiaoxiao');
//xiaoxiao.run();
//console.log(xiaoxiao.__proto__ === student);

// function Student(name) {
//     this.name = name,
//         this.hello = function () {
//             console.log('hello ' + this.name + '!!');
//         }
//     return this;
// }
// var xiaoming = new Student('xiaoming');
// // console.log(xiaoming.name);
// // xiaoming.hello();
// console.log(xiaoming.constructor === Student.prototype.constructor);
// console.log(Student.prototype.constructor === Student);
// console.log(Object.getPrototypeOf(xiaoming) === Student.prototype);
// console.log(xiaoming instanceof Student);
// console.log(xiaoming.constructor ===Student);
// console.log(xiaoming.__proto__);


// function Student1(name) {
//     this.name = name;
// }
// Student1.prototype.hello = function () {
//     console.log('hello' + this.name + '! !');
// }
// var xiaohua = new Student1('xiaohua');
// console.log(xiaohua.name);
// xiaohua.hello();

function Student2(props) {
    this.name = props.name || '匿名';
    this.grade = props.grade || -1;
}
Student2.prototype.hello = function () {
    console.log('hello ' + this.name + ' !!');
}
function createStudent2(props) {
    return new Student2(props || {});
}

var xiaoming = createStudent2({ name: 'xiaoming', skills: ['javascript', 'java', 'ruby', 'python'] });
var xiaohong = createStudent2({ name: 'xiaohong', skills: ['php', 'react', 'angularjs'] });
console.log(xiaoming.name);
xiaoming.hello();
xiaohong.hello();
