# Abstract  简介
log for webView &amp; webApp

用于webView和webApp的log工具

A tool imitate the browser console on webView or webApp;

模拟浏览器的控制台的log功能，可用于webView或者webApp;

No depend other plugin of javascript（no jquery）;

不依赖其他js插件（如jquery等）

# example  例子
[example](https://martin-bai.github.io/msLog/example/index.html)

![QR Code](/example/QRCode.jpg)
（可以使用手机扫描二维码）

# use  使用
```
var msLog = new MagicSquareLog();

msLog.log(11111); 
// 11111

msLog.log([1,2,3]);
// [1,2,3]

msLog.error(11111, "I am the log", {name: "msLog"}, [1,2,3]); 
//11111 I am the log {"name":"msLog"} [1,2,3]

```

# API

| name          | type           | defaultParams | description |
| ------------- | -------------  | ------------- | ----------- |
| log           | function       | ""            | default log function |
| error         | function       | ""            | the color of text is red |

# License
[MIT](https://opensource.org/licenses/MIT)
