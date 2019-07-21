let div = document.createElement("div");
div.className = "demo"
document.body.appendChild(div);
var dragging = false;
var lastY
var lastX
div.onmousedown = function(e) {
    // console.log("原始位置")
    // console.log(e.clientX, e.clientY)
    lastX = e.clientX
    lastY = e.clientY
    dragging = true;
}
document.body.onmousemove = function(e) {
    if (dragging === true) {
        // console.log(e) 查看鼠标事件
        //console.log(top, left)
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div.style.top) || 0
        var left = parseInt(div.style.left) || 0
            //重置初始top和left的值
        var resultX = left + deltaX
        var resultY = top + deltaY

        if (resultX < 0) {
            resultX = 0
        }
        if (resultY < 0) {
            resultY = 0
        }
        div.style.left = resultX + "px"
        div.style.top = resultY + "px"
        lastX = e.clientX
        lastY = e.clientY

    }
}
document.onmouseup = function() {
    dragging = false;
}