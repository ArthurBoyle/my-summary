### Antd相关

#### Form
1. `preserve` 为 `true` 时，`initialValues` 只有在 `Form mount` 和 `resetFields` 会生效，之后所有变更都不再重复。其设计就是为了防止 `preserve` 的值被 `Field` 反复注册所修改。所以不管你留下的是 `undefined` 还是其他值，这里其实已经不会再更新。
2. `preserve` 为 `false` 时，则在 `Field` 卸载时，会标记这个字段已经删除，当再次注册 `Field` 会重置到 `initialValues`，以清除 `Field` 更改造成的影响。
3. `Form.list` 在和 `preserve` 一起使用的情况下，`Form.Item` 必须传入 `isListField` 字段，否则在 `remove` 的时候会导致其他 `item` 的值清空。`fields` 里的东西需要都传给 `Field`。

#### Modal
1. `forceRender` 会导致 `destroyOnClose={true}` 和 `preserve={false}` 失效。说人话的话，就是 `forceRender` 优先级最高，如果开启了它，那么内容区会始终渲染，而当 `forceRender` 为 `false` 时，会走默认的行为，也就是“懒加载”，首次 `visible`（或者是 `active`，名字不重要）为 `true` 之前，内容不会被渲染，而且一旦内容区出现过之后，就会一直保持渲染，不会被卸载掉。而 `destroyOnClose` 参数此时的效果就是，如果开启了 `destroyOnClose`，那么当 `visible` 变为 `false` 之后，内容会被卸载掉，而不仅仅是视觉上的“隐藏”。

#### Select
1. [antd 的 Select 组件下拉框分页加载数据的实现](https://juejin.cn/post/6975885601027555364)

示例：
```
onPopupScroll={(e) => {
   const { target } = e;
   console.log(target.scrollTop + target.offsetHeight >= target.scrollHeight);
}}
```
