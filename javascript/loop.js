var xiaoming = {
    name :'xiaoming',
    age :12,
    sex:'man',
    city:'beijing'
}
for(var key in xiaoming){
    if(xiaoming.hasOwnProperty(key)){
        console.log('xiaoming has '+key+' true');
    }
}

var arr = ['A','B','C','D','E','F'];

for(var i in arr){
    console.log(i);
    console.log(arr[i]);
}