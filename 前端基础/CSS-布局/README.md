# CSS 基础



## “display:none” 与 visibility

一些特殊元素的默认 display 值是`display:none`，例如 `script` 。`display:none` 通常被 JavaScript 用来在不删除元素的情况下隐藏或显示元素。

它和 `visibility` 属性不一样。把 `display` 设置成 `none` 元素不会占据它本来应该显示的空间，但是设置成 `visibility: hidden;` 还会占据空间。



## margin: auto

```css
#main {
  width: 600px;
  margin: 0 auto;
}
```

设置块级元素的 `width` 可以防止它从左到右撑满整个容器。然后你就可以设置左右外边距为 `auto` 来使其水平居中。元素会占据你所指定的宽度，然后剩余的宽度会一分为二成为左右外边距。

唯一的问题是，当浏览器窗口比元素的宽度还要窄时，浏览器会显示一个水平滚动条来容纳页面。让我们再来改进下这个方案...

```css
#main {
  max-width: 600px;
  margin: 0 auto;
}
```

在这种情况下使用 `max-width` 替代 `width` 可以使浏览器更好地处理小窗口的情况。这点在移动设备上显得尤为重要，调整下浏览器窗口大小检查下吧！

顺便提下， [所有的主流浏览器](http://caniuse.com/#search=max-width)包括 IE7+在内都支持 `max-width` ，所以放心大胆的用吧。



## box-sizing

人们慢慢的意识到传统的盒子模型不直接，所以他们新增了一个叫做 `box-sizing` 的 CSS 属性。当你设置一个元素为 `box-sizing: border-box;` 时，此元素的内边距和边框不再会增加它的宽度。这里有一个与前一页相同的例子，唯一的区别是两个元素都设置了 `box-sizing: border-box;` ：

```css
.simple {
  width: 500px;
  margin: 20px auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border: solid blue 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```



## position

http://zh.learnlayout.com/position.html

### static

```css
.static {
  position: static;
}
```

`static` 是默认值。任意 `position: static;` 的元素不会被特殊的定位。一个 static 元素表示它*不会被“positioned”*，一个 position 属性被设置为其他值的元素表示它*会被“positioned”*。



### relative

```css
.relative1 {
  position: relative;
}
.relative2 {
  position: relative;
  top: -20px;
  left: 20px;
  background-color: white;
  width: 500px;
}
```

`relative` 表现的和 `static` 一样，除非你添加了一些额外的属性。

在一个相对定位（position属性的值为relative）的元素上设置 `top` 、 `right` 、 `bottom` 和 `left` 属性会使其偏离其正常位置。其他的元素的位置则不会受该元素的影响发生位置改变来弥补它偏离后剩下的空隙。



### fixed

一个固定定位（position属性的值为fixed）元素会相对于视窗来定位，这意味着即便页面滚动，它还是会停留在相同的位置。和 `relative` 一样， `top` 、 `right` 、 `bottom` 和 `left` 属性都可用。

```css
.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 200px;
  background-color: white;
}
```

一个固定定位元素不会保留它原本在页面应有的空隙（脱离文档流）。

令人惊讶地是移动浏览器对 fixed 的支持很差。[这里有相应的解决方案](http://bradfrostweb.com/blog/mobile/fixed-position/).



### absolute

`absolute` 是最棘手的position值。 `absolute` 与 `fixed` 的表现类似，但是它不是相对于视窗而是**相对于*最近的“positioned”祖先元素***。如果绝对定位（position属性的值为absolute）的元素没有“positioned”祖先元素，那么它是相对于文档的 body 元素，并且它会随着页面滚动而移动。记住一个“positioned”元素是指 position 值不是 `static` 的元素。

这里有一个简单的例子：

```css
.relative {
  position: relative;
  width: 600px;
  height: 400px;
}
.absolute {
  position: absolute;
  top: 120px;
  right: 0;
  width: 300px;
  height: 200px;
}
```



## float

另一个布局中常用的CSS属性是 `float` 。Float 可用于实现文字环绕图片，如下：

```css
img {
  float: right;
  margin: 0 0 1em 1em;
}
```



## clear

`clear` 属性被用于控制浮动。比较下面两个例子：

http://zh.learnlayout.com/clear.html



## 清除浮动（clearfix hack）

浮动元素比包含它的元素还高， 而且它是浮动的，于是它就溢出到了容器外面！

见证奇迹的时刻到了！有一种比较丑陋的方法可以解决这个问题，它叫做*清除浮动（clearfix hack）*.

让我们加入一些新的CSS样式：

```css
.clearfix {
  overflow: auto;
  zoom: 1;
}
```

完全使用 `float` 来实现页面的布局是很常见的。



## 百分比宽度

百分比是一种相对于包含块的计量单位。它对图片很有用：如下我们实现了图片宽度始终是容器宽度的50%。

```css
article img {
  float: right;
  width: 50%;
}
```

你甚至还能同时使用 `min-width` 和 `max-width` 来限制图片的最大或最小宽度！



## 媒体查询

“响应式设计（Responsive Design” 是一种让网站针对不同的浏览器和设备“呈现”不同显示效果的策略，这样可以让网站在任何情况下显示的很棒！

媒体查询是做此事所需的最强大的工具。让我们使用百分比宽度来布局，然后在浏览器变窄到无法容纳侧边栏中的菜单时，把布局显示成一列：

```CSS
@media screen and (min-width:600px) {
  nav {
    float: left;
    width: 25%;
  }
  section {
    margin-left: 25%;
  }
}
@media screen and (max-width:599px) {
  nav li {
    display: inline;
  }
}
```



## inline-block

我们可以创建很多网格来铺满浏览器。在过去很长的一段时间内使用 `float` 是一种选择，但是使用 `inline-block` 会更简单。让我们看下使用这两种方法的例子：



### 困难的方式（使用浮动）

```css
.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}

.after-box {
  clear: left;
}
```



### 更容易的方式（使用 inline-block）

你可以用 `display` 属性的值 `inline-block` 来实现相同效果。

```
.box2 {
  display: inline-block;
  width: 200px;
  height: 100px;
  margin: 1em;
}
```



你可以使用 `inline-block` 来布局。但要注意：

- `vertical-align` 属性会影响到 `inline-block` 元素，你可能会把它的值设置为 `top` 。
- 需要设置每一列的宽度
- 如果HTML源代码中元素之间有空格，那么列与列之间会产生空隙



### 兼容性

需要额外工作来让[IE6和IE7支持](http://blog.mozilla.org/webdev/2009/02/20/cross-browser-inline-block/) `inline-block`。有些时候人们谈到 `inline-block` 会触发叫做 `hasLayout` 的东西，你只需要知道那是用来支持旧浏览器的。



## column

这里有一系列新的CSS属性，可以帮助你很轻松的实现文字的多列布局。让我们瞧瞧：

```
.three-column {
  padding: 1em;
  -moz-column-count: 3;
  -moz-column-gap: 1em;
  -webkit-column-count: 3;
  -webkit-column-gap: 1em;
  column-count: 3;
  column-gap: 1em;
}
```

CSS columns是很新的标准，所以你需要使用前缀，并且它不被[IE9及以下和Opera Mini](http://caniuse.com/#search=column)支持



## flexbox

链接两篇好文：

https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/

https://bocoup.com/blog/dive-into-flexbox





## 参考文章

https://juejin.im/post/5c9edb066fb9a05e267026dc#heading-20

https://juejin.im/post/5bbcd7ff5188255c80668028#heading-30

在线练习：http://zh.learnlayout.com/toc.html
