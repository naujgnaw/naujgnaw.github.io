---
tag: sandbox
title: Notification system
---

<head><script src="/assets/js/notify.js"></script></head>
<body>
<h1>Backstory</h1>
i've
recently been trying out the toast system <br>
要做一个提醒系统，输入的内容可以随机进行提醒。人们说“人生苦短，我用python”，所以<br>
用了 python 。<br>
但是 python 跟 Windows 的 toast 兼容很差。用了一些 win10toast, winrt 之类的模板都不能做到在 toast 里面输入文字或者接收按钮信息。为什么要这些？主要是 python 的界面不好看，也懒得学 tkinter。调了两三天没有调出来， StackOverflow 的大佬也没有现成答案。<br>
后来，用了 js 。发现貌似本地的 html 不支持 toast 。所以就想用这个 repos 试试看。但 js 只有 notification，没有 toast。我想：css 我还是会的，即使用这个页面作为输入界面，也不算难看。然后储存到本地，下次再上传就能接续上。<br><br><h2>您猜怎么着？</h2><br>
github pages 是静态页面，不支持 post 方法。。。
<br>白费了四五天的时间，就只得到现在下面的这个按钮。<br>
<button id='start-now' onclick="atoast()">开启今日提醒</button>
<br>很好。
<h1>TODO</h1>
做一个 uwp 应用，赚很多钱。哈哈
<br>
<br>
<h1>后续</h1>
我转专业了
<br>
大概是跟面试官提了这件事，或者是我英语比较好，或者是我比较王之自信，或者是学积分
<br>
反正如你所见 我现在也是cs的学生啦。哈哈。
<br>
<br>
怎么感觉突然没有了动力。。。
</body>

