#### 1.Vue2数据代理
    通过vm对象来代理data对象中属性的操作（读/写），可以更加方便的操作data中的数据。
    
    通过Object.defineproperty()把data中所有属性添加到vm上。
    为每一个添加到vm上的属性，都指定一个getter/setter。
    在getter/setter内部去操作（读/写）data中对应的属性

#### 2. Vue监测数组数据的原理
    包装数组常用修改数组的方法（也可以使用Vue.set()）
    第一步，正常调用Array原型上的方法（例如push）
    第二步，重新解析模板，生成虚拟dom…………