

### 关于是否选择Angular2
 - [我为什么选择Angular 2](http://www.infoq.com/cn/articles/why-choose-angular2)


### Angular2资源链接
 - [Angular2.0官方网站](https://angular.io/)

### 构建angular2源代码

根据官网的配置方法:angular.io/README.md ->  Development Setup，Mac平台下可以顺利构建，同时构建angular.io。
Windows平台上遇到一个版本坑，参考这个[issue thread](https://github.com/npm/npm/issues/14042)应该可以解决。
我自己懒得填就直接使用Mac了。

### angular.io观感

[angular.io](https://angular.io/)是Angular2的官方网站。这个网站当然是基于Angular2的架构而且也是开源的，
包含Angular2的全部文档。angular.io结构和设计非常精美，可以算项目文档网站的典范。
值得注意的是，angular.io中的文章内容是用的.jade格式，angular.io repo中并没有代码将jade编译成html。 而是使用基于harp的服务器做自动转换，直接向前端提供html页面。