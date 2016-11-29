document.getElementById();
document.getElementsByTagName();
document.getElementsByClassName();


var test = document.getElementById('test');
var trs = document.getElementById('test').getElementsByTagName('tr');
var reds = document.getElementById('test-div').getElementsByClassName('tr');

var cs = test.children;
var first = test.firstElementChild;
var last = test.lastElementChild;


var p = document.getElementById('p-id');
p.style.color = '#fff';
p.style.fontSize = '20px';
p.style.paddingTop = '2em';


////<!-- HTML结构 -->
////<p id="js">JavaScript</p>
////<div id="list">
////    <p id="java">Java</p>
////    <p id="python">Python</p>
////    <p id="scheme">Scheme</p>
////</div>

var js = document.getElementById('js');
var list = document.getElementById('list');
list.appendChild(js);


var d = document.createElement('style');
d.attributes('type', 'text/css');
d.innerHTML = 'p {color:red}';
document.getElementById('head')[0].appendChild(d);


////<!-- HTML结构 -->
////<div id="list">
////    <p id="java">Java</p>
////    <p id="python">Python</p>
////    <p id="scheme">Scheme</p>
////</div>

var list = document.getElementById('list');
var ref = document.getElementById('python');
var haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'haskell';
list.insertBefore(haskell, ref);

//删除一个节点
var self = document.getelementbyid('to-be-removed');

var parent = self.parentElement;

var removed = parent.removeChild(self);
