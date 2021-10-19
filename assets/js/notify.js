function lestoasts(){
    var xmlDoc=document.implementation.createDocument("","",null);
    xmlDoc.async="false";
    xmlDoc.load("/assets/xml/ploppi.xml");
}
function atoast(){           
    if (window.Notification) {
        var ua = navigator.userAgent.toLowerCase();
        console.log(ua);
        if (ua.indexOf('safari') != -1) {
            if (ua.indexOf('chrome') > -1) {
                // Chrome
                Notification.requestPermission().then(function (permission) {
                    if (permission == "granted") {
                        var notification = new Notification('Hi',{body:"怎么样，很酷吧。哈哈\n你可以用 Safari 试试", icon: "/favicon.ico"});
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
                        var notification = new Notification('哟，Safari 啊', {
                            body: '用苹果？50w是吧！'
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
    lestoasts();
}