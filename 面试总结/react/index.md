###1. React如何减少渲染次数

###2. React如何将当前dom渲染到其他组件？
&emsp;&emsp;createPortal

###3. 为什么顺序调用对 React Hooks 很重要？

###4.useEffect 为什么不能是异步的？
&emsp;&emsp;useEffect 的返回值是要在卸载组件时调用的，React 需要在 mount 的时候马上拿到这个值，不然就乱套了。

&emsp;&emsp;useEffect() 可能有个潜在逻辑：第二次触发 useEffect 里的回调前，前一次触发的行为都执行完成，返回的清理函数也执行完成。这样逻辑才清楚。而如果是异步的，情况会变得很复杂，可能会很容易写出有 bug 的代码。

###5. React Hooks 有什么优点？
(未完待续)
1. 很难复用逻辑（只能用HOC，或者render props），会导致组件树层级很深
2. 会产生巨大的组件（指很多代码必须写在类里面）
3. 类组件很难理解，比如方法需要bind，this指向不明确

by Dan

###6. 为什么 Hooks 不能在条件或循环语句中运行？

###7. React Hooks为什么返回的是数组？

###8. React函数式组件与类式组件的区别？
1. 函数组件会捕获当前渲染时所用的值。

&emsp;&emsp;在react中props是不可变的，而this是一直在改变的。所以类组件中的方法可以获取到最新的实例即this，而函数组件在渲染的时候因为闭包的原因捕获了渲染时的值，所以改例子会出现这种现象。

2. 函数组件useEffect与类组件生命周期
3. 性能优化（shouldComponentUpdate，memo）
4. 代码复用（HOC，render Props，自定义hooks）
5. 函数组件没有状态，是一个纯函数

###9. 讲一讲react合成事件？

###10. React 和 Vue 有什么区别及优缺点？
