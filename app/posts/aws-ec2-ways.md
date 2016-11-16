

在中国大陆，我们需要翻墙，一般是利用Amazon EC2，一种是基于Shadowsocks，另一种基于openvpn。
实际上在EC2上面可以同时配置这两种方式，从而在客户端可以根据不同的操作系统选择更方便的工具。

## 基于shadowsocks

可以直接参考这一篇博文，[利用Shadowsocks和AWS免费翻墙](http://9dic.com/2016/01/29/%E5%88%A9%E7%94%A8Shadowsocks%E5%92%8CAWS%E5%85%8D%E8%B4%B9%E7%BF%BB%E5%A2%99/)
值得注意的是，[shadowsocks client](https://shadowsocks.org/en/download/clients.html)支持多种平台，
其中Mac OSX上的App非常好用，非常方便。我觉得是Mac上翻(你)墙(懂)上(得)网的最佳方式。

## 基于openvpn

可以先参考这一篇博文，[How to make your own free VPN with AWS](https://www.comparitech.com/blog/vpn-privacy/how-to-make-your-own-free-vpn-using-amazon-web-services/)。openvpn方式我还没有实测，
但感觉windows平台下使用vpn的方式会更好。