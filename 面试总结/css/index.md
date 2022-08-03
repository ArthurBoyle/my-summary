####1. flex: 1 与 flex: auto 有什么区别？
    felx-basis属性不一样，flex: 1 的felx-basis属性为0%，auto则为auto。
    auto长度等于灵活项目的长度。如果该项目未指定长度，则长度将根据内容决定。 
    0%意味着相对于父容器的宽度为0%，但是受到flex-grow和flex-shrink的影响, 长度会等分。

####2. 为什么有时候定位不用position，用transform？
    top和left的改变会触发浏览器的 重绘 和 回流 ，整个动画过程都在不断触发浏览器的重新渲染，这个过程是很影响性能的。
    transform 动画由GPU控制，支持硬件加速。并不需要软件⽅⾯的渲染。

####3. 文本禁止换行
    white-space:nowrap;     禁止换行
    overflow:hidden;        溢出隐藏
    text-overflow:ellipsis; 多余显示省略号

####4. 文本基线对齐
    align-items: baseline；

####5. 伪类与伪元素