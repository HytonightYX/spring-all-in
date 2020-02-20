## 网络相关

### Http输入网址开始发生了什么？

[前端经典面试题: 从输入URL到页面加载发生了什么？](https://segmentfault.com/a/1190000006879700)

[mac上查看dns缓存](https://stackoverflow.com/questions/38867905/how-to-view-dns-cache-in-osx)

[HTTP/TCP/IP工作在哪一层](https://www.nowcoder.com/questionTerminal/fcea235638a5428fb59adb157f15e558)

[Keep-Alive](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Keep-Alive)

[状态码]([https://www.cxymsg.com/guide/http.html#%E8%81%8A%E4%B8%80%E8%81%8Ahttp%E7%9A%84%E9%83%A8%E9%A6%96%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F](https://www.cxymsg.com/guide/http.html#聊一聊http的部首有哪些？))

- DNS解析
  - 递归查询
  - DNS缓存
  - DNS负载均衡（CDN就是利用DNS的重定向技术）
- TCP连接（[三次握手四次挥手](https://zhuanlan.zhihu.com/p/53374516)）
- 发送HTTP请求
  - HTTPS= HTTP + TLS，需要多一次[TSL握手](http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html)
  - HTTP请求报文（ 请求行, 请求报头和请求正文 ）（常用的方法？[POST/GET的区别](https://www.zhihu.com/question/28586791)）
- 服务器处理请求并返回HTTP报文(状态码, 响应报头和响应报文)
  - 状态码
- 浏览器解析渲染页面





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

- Promise
  - 生命周期，3种状态
  - then() 方法的2种状态，什么时候和 catch 等价
  - 



### 跨域如何解决？

- Proxy（不会）
- JsonP原理？
- 后端库，原理？



## 框架、项目

### Hooks用过吗？解决什么问题？

[https://github.com/dt-fe/weekly/blob/master/79.%E7%B2%BE%E8%AF%BB%E3%80%8AReact%20Hooks%E3%80%8B.md](https://github.com/dt-fe/weekly/blob/master/79.精读《React Hooks》.md)

### react生命周期？



### React 请求数据在哪个周期？

[React componentwillmount和componentdidmount请求数据](https://segmentfault.com/a/1190000018082225)

有没有遇到过循环setState的问题？



### SPA的优势？

https://www.jianshu.com/p/fcb98533bc18

https://zhuanlan.zhihu.com/p/33687711

[一种SPA（单页面应用）架构](https://github.com/livoras/blog/issues/3)

[彻底理清前端单页面应用（SPA）的实现原理](https://cloud.tencent.com/developer/article/1478932)

[剖析单页面应用路由实现原理](https://zhuanlan.zhihu.com/p/31874420)

### 

### Node.js爬虫遇到什么问题？

如果是爬样式的话特别慢



### SPA/React 如何做SEO优化？

https://medium.com/@prestonwallace/3-ways-improve-react-seo-without-isomorphic-app-a6354595e400

本质上，要构建单页应用程序（SPA），我们创建一个应用程序，**该应用程序创建自己的“虚拟” DOM并将其插入到静态HTML文件的id为root的div标签中**。然后，我们的整个应用程序被创建并加载。可能有不同的URI用于来自OAuth或其他应用程序的API请求或回调URL，但是我们网站的“内容”被加载为一个页面，其中包含多个在React中称为“组件”的“视图”。

- HashRouter 改为 BrowserRouter
- React Helmet 如果打开知乎，就能看到 header中`data-react-helmet`,`baidu=1`
- Google Search Console. `google-site-verification=A2q3p8y5X7o-DlMY50xopCWJAUryYRJOI5A57KUi1ng`

- 服务端渲染 SSR https://juejin.im/post/5d7deef6e51d453bb13b66cd#heading-18



### React的原理？

[【React深入】深入分析虚拟DOM的渲染原理和特性](https://juejin.im/post/5cb66fdaf265da0384128445#comment)

- 什么是虚拟DOM

- 防止XSS

  `ReactElement`对象还有一个`$$typeof`属性，它是一个`Symbol`类型的变量`Symbol.for('react.element')`，当环境不支持`Symbol`时，`$$typeof`被赋值为`0xeac7`。

  这个变量可以防止`XSS`。如果你的服务器有一个漏洞，允许用户存储任意`JSON`对象， 而客户端代码需要一个字符串，这可能为你的应用程序带来风险。`JSON`中不能存储`Symbol`类型的变量，而`React`渲染时会把没有`$$typeof`标识的组件过滤掉。

- componentDidUpdate或componentWillUpdate 中更新state问题-Maximun update depth exceeded
- Fiber 架构，fiber tree实际上是个单链表（Singly Linked List）树结构。

[浅析React Diff 与 Fiber](https://zhuanlan.zhihu.com/p/58863799)

[Deep In React之浅谈 React Fiber 架构(一)](https://zhuanlan.zhihu.com/p/70816181)

React Fiber 是一种基于浏览器的**单线程调度算法**.

React 16之前 ，`reconcilation` 算法实际上是递归，想要中断递归是很困难的，React 16 开始使用了循环来代替之前的递归.

`Fiber`：**一种将 `recocilation` （递归 diff），拆分成无数个小任务的算法；它随时能够停止，恢复。停止恢复的时机取决于当前的一帧（16ms）内，还有没有足够的时间允许计算。**



## JavaScript 相关

### null 和 undefined 区别



### 说说 ES6 你了解的

Promise



箭头函数



块作用域



解构运算符



模板字符串



let const var



装饰器

https://juejin.im/post/5b41f76be51d4518f140f9e4



symbol

[简单了解ES6/ES2015 Symbol() 方法](https://www.zhangxinxu.com/wordpress/2018/04/known-es6-symbol-function/)



## 游览器相关

### 说说 DOM、BOM

[JavaScript学习总结（三）BOM和DOM详解](https://segmentfault.com/a/1190000000654274)

[getElementById和querySelector方法的区别](https://www.cnblogs.com/cjm123/p/8330585.html)

[DOM, DOCUMENT, BOM, WINDOW 有什么区别?](https://www.zhihu.com/question/33453164)

[Understanding DOM and BOM](https://www.dotnettricks.com/learn/javascript/dom-bom)

- DOM tree objects can be accessed and manipulated with the help of any programming language since it is cross-platform and language independent. Typically, we manipulate DOM tree with the help of JavaScript and jQuery.

- BOM main task is to manage browser windows and enable communication between the windows. Each HTML page which is loaded into a browser window becomes a `Document object` and document object is an object in the BOM. You can say BOM is super set of DOM. BOM has many objects, methods, and properties that are not the part of the DOM structure.(比如获取UA，宽高，前进后退，打开子窗口)



游览器JS运行原理https://juejin.im/post/5d4b8acdf265da03bc126451#heading-2

浏览器的工作原理：新式网络浏览器幕后揭秘https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/

[一文看懂Chrome浏览器运行机制](https://zhuanlan.zhihu.com/p/102149546)



### 事件委托

[js中的事件委托或事件代理详解](https://juejin.im/post/5acb1bcf6fb9a028dc414fc6)

那什么样的事件可以用事件委托，什么样的事件不可以用呢？

适合用事件委托的事件：click，mousedown，mouseup，keydown，keyup，keypress。



## 安全（CSRF与XSS）

「每日一题」CSRF 是什么？ https://zhuanlan.zhihu.com/p/22521378

[前端安全系列之二：如何防止CSRF攻击？](https://juejin.im/post/5bc009996fb9a05d0a055192)

- CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

- CSRF-TOKEN，加密码或验证码，还有银行转账要求再次输入密码（支付宝）。

[Referrer Policy](https://www.jianshu.com/p/b12c5b4fd9df)





## 面试相关

### 自我介绍

（我是XX就读于XX目前XX）。我从大二开始决定做 Web开发。一开始做 Java 后端。大二下学期（也就是一年前）开始走前端，选择的技术栈是 React，后端技术栈也从 Java 转到 Node.js。

经过半年的学习，去年9月份开始正式和导师做商业项目。第一个是东渡加梯公众号，服务有加装电梯的企业和社区。我负责的是若干模块的全栈开发。这个是我的第一个商业项目，算是正式了解了一个小型项目的完整开发流程以及获取了多人合作开发，也获取了一些性能优化的经验，也意识到了自身在开发过程中的一些问题。

随后11月份，和导师开始开发来自日本企业的一个考勤管理系统，导师也是让我来对接需求，画原型，设计前后端架构，数据库，导师来把关。也改进了之前项目架构上的一些不足。那么现在这个项目由于需求方那边有些问题，所以暂时只上线了打卡和请假模块。（username:qq,password:qq）



### 感悟

第一是我第一次做商业项目，有点缩手缩脚。第二是我过于追求完美，想一开始就用所谓的“Best Practice” 来解决问题，所以会花相当长的时间来搜索资料，所以效率低下。

另一个就是实际编码过程中过早优化，过度工程化。学会简化问题，先最短时间用已有的最好办法去解决，再优化。