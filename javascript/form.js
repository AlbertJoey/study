////<!-- HTML -->
////<form id="test-form" onsubmit="return checkForm()">
////    <input type="text" name="test">
////    <button type="submit">Submit</button>
////</form>

function checkForm() {
    var form = document.getElementById('test-form');
    return true;
}
//提交表单内容是按照name进行提交的
<form id='login-form' method='post' onSubmit="return checkForm1()">
    <input type="text" id="userName" name="userName" />
    <input type="password" id="input-password" />
    <input type="hidden" id="md5-password" name="password" />
    <button type="submit" />
</form>

function checkForm1() {
    var input_password = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
    md5_pwd.value = toMD5(input_password);
    return true;
}

// $.ajaxFileUpload({
//     'url': 'www.baidu.com',
//     dataType: 'json',
//     type: 'post',
//     fileElementId: 'comminFileID',
//     secureuri: true,
//     data: {
//         'fileId':1
//     },
//     success: function (data) { },
//     error: function (data) { }
// });


//js ajax

function success(text) {
    var textArea = document.getElementById('test-response-text');
    textArea.value = text;
}
function fail(text) {
    var textArea = document.getElementById('test-response-text')
    textArea.value = text;
}

var request = new XMLHttpRequest();

//如果是低版本的IE则使用下面的
//var request = new ActiveXObject('Microsoft.XMLHTTP'); // 新建Microsoft.XMLHTTP对象

request.onreadystatechange = function () {
    if (request.readyState === 4) {
        if (request.status === 200) {
            return success(request.responseText);
        }
        else {
            return fail(request.status);
        }
    }
    else {
        //http正在请求中……
    }
}
request.open('GET', 'api/categories');
request.send();

////JavaScript在发送AJAX请求时，URL的域名必须和当前页面完全一致。 (同源策略)


function test(resolve, reject) {
    var timeout = Math.random() * 2;
    console.log('set timeout to :' + timeOut + 'seconds');
    setTimeout(function () {
        if (timeout < 1) {
            console.log('call resolve() ……');
            resolve('200 ok');
        }
        else {
            console.log('call reject() ……');
            reject('timeout in' + timeout + 'seconds');
        }
    }, timeout * 1000);
}

var p1 = new Promise(test);
var p2 = p1.then(function (result) {
    console.log('Success');
});
var p3 = p2.catch(function (result) {
    console.log('fail');
});

var p = new Promise(test).then(function (result) {
    console.log('Success');
}).catch(function (result) {
    console.log('Fail');
});

var p4 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P4');
});
var p5 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P5');
});
Promise.all([p4, p5]).then(function (results) {
    console.log(results);
});

Promise.race([p4, p5]).then(function (result) {
    console.log(result);
});


function multiply(input) {
    return new Promise((resolve, reject) => {
        console.log('calculating' + input + 'x' + input + '……');
        setTimeout(resolve, 500, input * input);
    });
}
function add(input) {
    return new Promise((resolve, reject) => {
        console.log('calculating' + input + '+' + input + '……');
        setTimeout(resolve, 600, input + input);
    });
}
var p = new Promise(function (resolve, reject) {
    console.log('start new promise ……');
    resolve(123);
});
p.then(multiply)
    .then(add)
    .then(multiply)
    .then(add)
    .then(multiply)
    .then((results) => {
        console.log(results);
    });




function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new promise((resolve, reject) => {
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                }
                else {
                    reject(request.status);
                }
            }
        }
        request.open(method, url);
        request.send();
    });
}

var p = ajax('GET', '/api/categories');

p.then((text) => {
    console.log(text);
}).catch((status) => {
    console.log(status);
});
