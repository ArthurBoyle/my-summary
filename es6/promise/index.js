// 构造函数
function Promise(executor) {
  this.PromiseState = "pending";
  this.PromiseResult = null;
  this.callbacks = [];
  const self = this;

  // resolve函数
  function resolve(data) {
    if (self.PromiseState === "pending") {
      self.PromiseState = "resolved";
      self.PromiseResult = data;
      self.callbacks.forEach((item) => {
        item.onResolved();
      })
    }
  }

  // reject函数
  function reject(data) {
    if (self.PromiseState === "pending") {
      self.PromiseState = "rejected";
      self.PromiseResult = data;
      self.callbacks.forEach((item) => {
        item.onRejected();
      })
    }
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

// 添加then方法
Promise.prototype.then = function (onResolved, onRejected) {
  const self = this;
  // 判断回调函数参数
  if (typeof onResolved !== "function") {
    onResolved = (value) => {
      return value;
    };
  }

  if (typeof onRejected !== "function") {
    onRejected = (reason) => {
      throw reason;
    };
  }
  return new Promise((resolve, reject) => {
    function callback(type){
      try {
        const result = type(self.PromiseResult);
        if (result instanceof Promise) {
          result.then((value) => {
            resolve(value);
          }, (reason) => {
            reject(reason);
          });
        } else {
          resolve(result)
        }
      } catch (e) {
        reject(e);
      }
    }
    if (this.PromiseState === "resolved") {
      callback(onResolved)
    } else if (this.PromiseState === "rejected") {
      callback(onRejected)
    } else {
      // 保存回调函数
      this.callbacks.push({
        onResolved: function () {
          callback(onResolved)
        },
        onRejected: function () {
          callback(onRejected)
        }
      });
    }
  })
};

// 添加catch方法
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
}

// Promise.resolve = function (){};
