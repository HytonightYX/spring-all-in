This 的指向



如果

this 对象的方法中调用，this 指的是对象。

如果在普通函数中调用，this 指的是全局对象。

```javascript
let obj = {
  name: "Asuna",
  show: function() {
    console.log(this); // obj

    function bar() {
      console.log(this); // Window
    }
    bar();

    return this.name;
  }
};
```

