< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <!--    <meta name="viewport" content="width=device-width, ,user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">-->
    <!--	移动端所需-->
    <
    meta http - equiv = "X-UA-Compatible"
content = "ie=edge" >
    <
    title > 首页 < /title> <
    link rel = "stylesheet"
href = "../css/style.css" >
    <
    link rel = "stylesheet"
href = "../css/myBookmarks.css" >
    <
    /head>

<
body >
    <
    header > < /header> <
    main >
    <
    div class = "wrapper"
id = "main" >

    <
    /div>

<
/main> <
footer > < /footer> <
    /body> <
    script src = "../js/jquery-3.3.1.min.js" > < /script> <
    script src = "../js/myBookmarks.js" > < /script>

<
/html>urn span
}

function createButton(id) {
    var button = tag('button')
    button.textContent = '编辑'
    button.id = id
    button.onclick = function(xzkjcnxlkcjlk) {
        // xzkjcnxlkcjlk['target'] 就是用户点击的元素
        var button2 = xzkjcnxlkcjlk['target']
        var img2 = button2.previousSibling
        var key = button2['id'] // q w e r t
        var x = prompt('给我一个网址') // qq.com
        hash[key] = x // hash 变更
        img2.src = 'http://' + x + '/favicon.ico'
        img2.onerror = function(xxx) {
            xxx.target.src = '../nomore.svg'
        }
        localStorage.setItem('zzz', JSON.stringify(hash))
    }
    return button
}

function createImage(domain) {
    var img = tag('img')
    if (domain) {
        img.src = 'http://' + domain + '/favicon.ico'
    } else {
        img.src = '../nomore.svg'
    }
    img.onerror = function(xxx) {
        xxx.target.src = '../nomore.svg'
    }
    return img
}

function init() {
    var keys = {
        '0': {
            0: 'q',
            1: 'w',
            2: 'e',
            3: 'r',
            4: 't',
            5: 'y',
            6: 'u',
            7: 'i',
            8: 'o',
            9: 'p',
            length: 10
        },
        '1': {
            0: 'a',
            1: 's',
            2: 'd',
            3: 'f',
            4: 'g',
            5: 'h',
            6: 'j',
            7: 'k',
            8: 'l',
            length: 9
        },
        '2': {
            0: 'z',
            1: 'x',
            2: 'c',
            3: 'v',
            4: 'b',
            5: 'n',
            6: 'm',
            length: 7
        },
        'length': 3
    }
    var hash = {
            'q': 'qq.com',
            'w': 'weibo.com',
            'e': 'ele.me',
            'r': 'renren.com',
            't': 'tianya.com',
            'y': 'youtube.com',
            'u': 'uc.com',
            'i': 'iqiyi.com',
            'o': 'opera.com',
            'p': undefined,
            'a': 'acfun.tv',
            's': 'sohu.com',
            'z': 'zhihu.com',
            'm': 'www.mcdonalds.com.cn'
        }
        // 取出 localStorage 中的 zzz 对应的 hash
    var hashInLocalStorage = getFromLocalStorage('zzz')
    if (hashInLocalStorage) {
        hash = hashInLocalStorage
    }
    return {
        "keys": keys,
        "hash": hash
    }
}

function generateKeyboard(keys, hash) {
    for (var index = 0; index < keys['length']; index = index + 1) {
        var div = tag('div')
        div.className = 'row'
        main.appendChild(div)
        var row = keys[index] // 第一个数组  第二个数组  第三个数组
        for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {
            var span = createSpan(row[index2])
            var button = createButton(row[index2])

            var img = createImage(hash[row[index2]])

            var kbd = tag('kbd')
            kbd.className = 'key'

            kbd.appendChild(span)
            kbd.appendChild(img)
            kbd.appendChild(button)

            div.appendChild(kbd)
        }
    }
}

function listenToUser(hash) {
    document.onkeypress = function(xzkjcnxlkcjlk) {
        var key = xzkjcnxlkcjlk['key'] // q w e
        var website = hash[key]
            //location.href = 'http://'+website
        window.open('http://' + website, '_blank')
    }
}