const person1 = {
  name: '马林',
  sex: "男"
};

Object.defineProperty(person1, "age", {
  value: 18,
  enumerable: true,   // 控制属性是否可以枚举
  writable: true,     // 控制属性是否可以修改
  configurable: true // 控制属性是否可以删除
});

const person2 = {
  name: '马林',
  sex: "男"
};

let age = 18;

Object.defineProperty(person2,"age", {
  // 读取person的age属性时，函数会被调用，返回值就是age的值
  get() {
    return age;
  },
  // 修改person的age属性时，函数会被调用，且会收到修改的具体值，返回值就是age的值
  set(value) {
    age = value
  }
});
