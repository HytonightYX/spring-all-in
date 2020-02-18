### Http输入网址开始发生了什么？

https://segmentfault.com/a/1190000006879700#comment-area

[mac上查看dns缓存](https://stackoverflow.com/questions/38867905/how-to-view-dns-cache-in-osx)

[HTTP/TCP/IP工作在哪一层](https://www.nowcoder.com/questionTerminal/fcea235638a5428fb59adb157f15e558)

[Keep-Alive](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Keep-Alive)

[状态码]([https://www.cxymsg.com/guide/http.html#%E8%81%8A%E4%B8%80%E8%81%8Ahttp%E7%9A%84%E9%83%A8%E9%A6%96%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F](https://www.cxymsg.com/guide/http.html#聊一聊http的部首有哪些？))



### 说说 ES6 你了解的

Promise



箭头函数



块作用域



解构运算符



模板字符串



let const var



装饰器

https://juejin.im/post/5b41f76be51d4518f140f9e4



### Hooks用过吗？解决什么问题？

[https://github.com/dt-fe/weekly/blob/master/79.%E7%B2%BE%E8%AF%BB%E3%80%8AReact%20Hooks%E3%80%8B.md](https://github.com/dt-fe/weekly/blob/master/79.精读《React Hooks》.md)

### react生命周期？



### React 请求数据在哪个周期？

https://segmentfault.com/a/1190000018082225

有没有遇到过循环setState的问题？



### SPA的优势？

https://www.jianshu.com/p/fcb98533bc18

https://zhuanlan.zhihu.com/p/33687711

https://github.com/livoras/blog/issues/3



### 前端项目如何打包

webpack 打包



### 进入每个路由发生了什么





### mobx的原理；

https://zhuanlan.zhihu.com/p/27448262

https://juejin.im/book/5ba42844f265da0a8a6aa5e9/section/5bd65eeb518825288c1ff46d

Mobx 这样的功能，等于实现了设计模式中的“观察者模式”（Observer Pattern），通过建立 observer 和 observable 之间的关联，达到数据联动。Mobx 最了不起之处，在于不需要开发者写上面的关联代码，Mobx自己通过解析代码就能够自动发现 observer 和 observable 之间的关系。



因为 Mobx 的作用就是把简单的对象赋予神力，总要有一种方法能够在不改变对象代码的前提，去改变对象的行为，这就用得上“装饰者模式”（Decorator Pattern）。



1. Mobx 的基本功能就是“观察者模式”
2. decorator 是“装饰者模式”在 JavaScript 语言中的实现
3. Mobx 通常利用 decorator 来使用
4. 如何利用 mobx-react 来管理 React组件的状态



### mobx用了装饰器，装饰器如何实现，有什么作用；







### react-router的原理；

https://juejin.im/book/5ba42844f265da0a8a6aa5e9/section/5bd65f93e51d457aba5e938e

要实现“单页应用”，一个最要紧的问题就是做好“路由”（Routing)，也就是处理好下面两件事：

1. 把 URL 映射到对应的页面来处理；
2. 页面之间切换做到只需局部更新。



- Router 和 Route 的配合，就是之前我们介绍过的“提供者模式”，Router 是“提供者”，Route是“消费者”。

- BrowserHistory也不一定非要服务端渲染吧？配置一下静态服务器的规则就行了，例如nginx的配置: 
  - ` location / {   try_files $uri /index.html; } `

那么V4相比V3，改进的就是静态路由变动态路由了。

### webpack 的原理；做了什么优化；



### Promise，链式调用如何实现？



### 跨域如何解决？

- Proxy（不会）
- JsonP原理？
- 后端库，原理？



### Node.js爬虫遇到什么问题？

如果是爬样式的话特别慢

