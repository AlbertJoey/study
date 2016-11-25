document.getElementById();
document.getElementsByTagName();
document.getElementsByClassName();


var test = document.getElementById('test');
var trs = document.getElementById('test').getElementsByTagName('tr');
var reds = document.getElementById('test-div').getElementsByClassName('tr');

var cs = test.children;
var first = test.firstElementChild;
var last = test.lastElementChild;