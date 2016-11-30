
## ECMAScript 6 关键概念


## 装饰器
 - [ECMAScript 6 入门：装饰器](http://www.kancloud.cn/digest/ecmascript6/217015)
 - [使用ECMAScript的Decorators](http://blog.fantasy.codes/javascript/2016/09/05/use-js-decorators/)

摘录使用修饰器实现自动发布事件：

```
import postal from "postal/lib/postal.lodash";

export default function publish(topic, channel) {
  return function(target, name, descriptor) {
    const fn = descriptor.value;

    descriptor.value = function() {
      let value = fn.apply(this, arguments);
      postal.channel(channel || target.channel || "/").publish(topic, value);
    };
  };
}
```

上面代码定义了一个名为publish的修饰器，它通过改写descriptor.value，使得原方法被调用时，
会自动发出一个事件。它使用的事件“发布/订阅”库是Postal.js。

它的用法如下。
```
import publish from "path/to/decorators/publish";

class FooComponent {
  @publish("foo", "component")
  someMethod() {
    return {
      my: "data"
    };
  }
  @publish("other")
  anotherMethod() {
    // ...
  }
}
```

以后，只要调用someMethod或者anotherMethod，就会自动发出一个事件。
```
let foo = new FooComponent();

foo.someMethod()    // 在"component"频道发布"foo"事件，附带的数据是{ my: "data" }
foo.anotherMethod() // 在"/"频道发布"other"事件，不附带数据
```


### Generator和yield关键字

 - [yield 原理篇](http://www.html-js.com/article/Understanding-the-Yield-principle)