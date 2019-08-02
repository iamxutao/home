demo1.ontouchstart = function(dsda) {
    // var name = prompt("请输入您的名字", "Bill Gates")
    console.log(dsda) //10
}




console.log("11111111111111111")


function Person(name) {
    var _age;


    function setAge(n) {
        _age = n;

    }

    function getAge() {

        return _age;

    }
    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    };
}

var p1 = Person('张三');
p1.setAge(25);
p1.getAge() // 25