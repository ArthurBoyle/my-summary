// Vue2 数据代理原理

const vm = {};

// 输入的data
let originalData = {
  name: "马林",
  sex: "男"
};

function Observer(obj) {
  // 汇总对象中所有的属性成为一个数组
  const keys = Object.keys(obj);
  keys.forEach((item) => {
    Object.defineProperty(this, item, {
      get(){
        return obj[item];
      },
      set(value){
        obj[item] = value;
      }
    })
    /*Object.defineProperty(vm, item, {
      get(){
        return obj[item];
      },
      set(value){
        obj[item] = value;
      }
    })*/
  })
}

let data = new Observer(originalData);

/*const keys = Object.keys(originalData);
keys.forEach((item) => {
  Object.defineProperty(vm, item, {
    get(){
      console.log(123)
      return originalData[item];
    },
    set(value){
      console.log(456)
      originalData[item] = value;
    }
  })
})*/

vm._data = originalData = data;
// vm._data = data;

// vm.sex = data.sex;
