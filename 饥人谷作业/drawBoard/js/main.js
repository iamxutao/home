var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');

autoSetCanvasSize(yyy)

listenToMouse(yyy)

var eraserEnabled = false
eraser.onclick = function() {
    eraserEnabled = true
    actions.className = 'actions x'

}
brush.onclick = function() {
    eraserEnabled = false
    actions.className = 'actions'
}


/******/

function autoSetCanvasSize(canvas) {
    setCanvasSize()

    window.onresize = function() {
        setCanvasSize()
    }

    function setCanvasSize() {
        var pageWidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight

        canvas.width = pageWidth
        canvas.height = pageHeight

        // 在canvas绘制前填充白色背景

        clear.onclick = function() {
            context.clearRect(0, 0, canvas.width, canvas.height)
            context.fillStyle = "#fff";
            context.fillRect(0, 0, canvas.width, canvas.height);
        }


    }
}

function drawCircle(x, y, radius) {
    context.beginPath()
    context.fillStyle = 'black'
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill()
}

function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black'
    context.moveTo(x1, y1) // 起点
    context.lineWidth = 5
    context.lineTo(x2, y2) // 终点
    context.stroke()
    context.closePath()
}

function listenToMouse(canvas) {


    var using = false
    var lastPoint = {
        x: undefined,
        y: undefined
    }
    canvas.onmousedown = function(aaa) {
        var x = aaa.clientX
        var y = aaa.clientY
        using = true
        if (eraserEnabled) {
            context.clearRect(x - 5, y - 5, 10, 10)
        } else {
            lastPoint = {
                "x": x,
                "y": y
            }
        }
    }
    canvas.onmousemove = function(aaa) {
        var x = aaa.clientX
        var y = aaa.clientY

        if (!using) { return }

        if (eraserEnabled) {
            context.clearRect(x - 5, y - 5, 10, 10)
        } else {
            var newPoint = {
                "x": x,
                "y": y
            }
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint = newPoint
        }

    }
    canvas.onmouseup = function(aaa) {
        using = false
    }
}

//下载
download.onclick = function() {
    var url = yyy.toDataURL("image/png");
    console.log(url)
    var a = document.createElement("a")
    document.body.appendChild(a)
    a.href = url
    a.download = "xxx"
    a.click()

}