/* 问题1：给定 csv 文件，转换成对象结构，提供测试用例，并补充 typescript 函数签名。
期望返回这样的数据结构
[
  {
    name: 'Bob',
    age: '30',
    parent: [
      {
        name: 'David',
        age: 60
      }
    ],
    children: [
      {
        name: 'Anna',
        age: 10,
      }
    ]
  }
]*/

const csv = `
name,age,parent
Bob,30,David
David,60,
Anna,10,Bob
`;

/* interface Person {
  name: string;
  age: number;
  parent: { name: string; age: number }[];
  children: { name: string; age: number }[];
}*/

const processor = (csv) => {
  // your code
  const csvArr = csv.split("\n").reduce((prev, curr) => {
    if (curr !== "") {
      prev.push(curr.split(","))
    }
    return prev
  }, []);
  const keys = csvArr[0];
  const result = [];
  csvArr.forEach((item, index) => {
    if (index > 0) {
      const obj = {};
      item.forEach((value, vIndex) => {
        if (["name", "age"].includes(keys[vIndex])) {
          obj[keys[vIndex]] = value;
        } else {
          const target = csvArr.find((val) => {
            return val[0] === value;
          })
          if (target) {
            obj[keys[vIndex]] = [{name: target[0], age: target[1]}];
          } else {
            obj[keys[vIndex]] = [];
          }
        }
        if (vIndex === 0) {
          const targets = csvArr.filter((val) => {
            return val[2] === value;
          })
          obj.children = targets.map((target) => {
            return {name: target[0], age: target[1]}
          });
        }
      })
      result.push(obj);
    }
  });
  return result;
}

processor(csv);

/* 问题2：为 myCalculator 实现“加减乘除”方法，并支持链式调用。*/
function myCalculator(init) {
  // your codes here
  function Test() {
  }

  Test.prototype.plus = function (value) {
    init = init + value;
    return Test.prototype;
  };
  Test.prototype.minus = function (value) {
    init = init - value;
    return Test.prototype;
  };
  Test.prototype.times = function (value) {
    init = init * value;
    return Test.prototype
  };
  Test.prototype.dividedBy = function (value) {
    init = init / value;
    return Test.prototype;
  };
  Test.prototype.equals = function () {
    return init;
  };
  return Test.prototype;
}

// 执行结果
myCalculator(1).plus(1).times(3).equals() // 6
myCalculator(121).plus(1).minus(2).times(3).dividedBy(4).equals() // 90

/* 问题3：实现事件处理器 EventEmitter ，有如下功能
const event = new EventEmitter();
// 绑定事件
event.on(name, callback);
// 取消绑定
event.off(name);
// 触发事件
event.trigger(name, data)*/

function EventEmitter() {
  this.state = [];
}

EventEmitter.prototype.on = function (name, callback) {
  this.state.push({name, callback});
};

EventEmitter.prototype.off = function (name) {
  this.state = this.state.filter((item) => item.name !== name);
}

EventEmitter.prototype.trigger = function (name, data) {
  const targetEvent = this.state.find((item) => item.name === name);
  targetEvent.callback(data);
};
