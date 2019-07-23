function chaeck() {
    //用户名非空验证
    function checkUserName() {
        var name = document.myform.txtUser; //在这里我认为： name 代表的name 为 txtUser 的文本框
        if (name.value.length == 0) {
            alert("请输入用户名");
            name.focus();
            return false;
        } else { return true; }
    }
    //密码非空验证+确认验证
    function checkPass() {
        var pass = document.myform.txtPass;
        var rpass = document.myform.txtRPass;
        if (pass.value == "") {
            alert("密码不能为空");
            pass.focus();
            return false;
        } else if (pass.value.length < 4 || pass.value.length > 16) {
            alert("密码的长度必须在4-16个字符");
            pass.select();
            return false;
        } else if (rpass.value != pass.value) {
            alert("确认密码与密码输入不一致");
            rpass.select();
            return false;
        } else { return true; }
    }
}




function AlertModal(title) {
    $("body,html").css("overflow", "hidden")

    let dom = `<div class="xutao">
        ${title}
    </div>`;

    $("body").append(dom)

}

function CloseAlert() {
    $("body,html").css("overflow", "auto");

    $("body .xutao").remove()


}