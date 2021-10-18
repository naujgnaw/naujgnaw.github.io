---
tag: notebook
---
<head>

<script type="text/javascript">
    function atoast(){           
        if (window.Notification) {
            var ua = navigator.userAgent.toLowerCase();
            console.log(ua);
            if (ua.indexOf('safari') != -1) {
                if (ua.indexOf('chrome') > -1) {
                    // Chrome
                    Notification.requestPermission().then(function (permission) {
                        if (permission == "granted") {
                            var notification = new Notification('Hello Notification',{body:"I hope that all the browser will support this function!"});
                            notification;
                            console.log('awesome')

                            notification.onclick = function () {

                                console.log('点击');
                                notification.close();
                            };
                        } else {
                            Notification.requestPermission();
                            console.log('没有权限,用户拒绝:Notification');
                        }
                    }).catch(function(err) {
                        console.error(err);
                    });
                } else {
                    // Safari
                    console.log('safari');
                    Notification.requestPermission(function (permission) {
                        if (permission == "granted") {
                            var notification = new Notification('桌面推送', {
                                body: '这是我的第一条桌面推送'
                            });

                            notification.onclick = function () {

                                console.log('点击');
                                notification.close();
                            };
                        } else {
                            Notification.requestPermission();
                            console.log('没有权限,用户拒绝:Notification');
                        }
                    })
                }
            }
        } else {
            console.log('不支持Notification');
        }
        console.log('ok');
    }
</script>
</head>
<body>

<button id='start-now' onclick="atoast()">开启今日提醒</button>

</body>
