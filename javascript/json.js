////序列化
var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    height: 175,
    grade: null,
    skills: ['javascript', 'java', 'python', 'lisp'],
    gender: true,
    'middle-school': '\"w3c\" Middle school'
}

console.log(JSON.stringify(xiaoming));
console.log(JSON.stringify(xiaoming, null, ' '));

function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
console.log(JSON.stringify(xiaoming, convert, ' '));
console.log(JSON.stringify(xiaoming, ['name', 'birth'], ' '));

var xiaohong = {
    name: 'xiaohong',
    "birth": 1991,
    height: 165,
    skills: ['php', 'ruby', '.net', 'nodejs'],
    "middle-school": '\"W3c\" Middle School',
    toJSON: () => {
        return {
            'Name': xiaohong.name,
            "Age": new Date().getFullYear() - xiaohong.birth
        }
    }
}
console.log(JSON.stringify(xiaohong));


////反序列化
console.log(JSON.parse("[1,2,3,true]"));
console.log(JSON.parse('{"name":"xiaoming","age":"11"}'));
console.log(JSON.parse(true));
console.log(JSON.parse(123.88));

var xiaoming = '{"name":"xiaoming","birth":"1990","height":"165"}';

console.log(JSON.parse(xiaoming, (key, value) => {
    if (key === 'name') {
        value += '同学';
    }
    return value;
}));