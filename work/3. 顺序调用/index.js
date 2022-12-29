// 下一个函数依赖上一个函数的返回值时可以使用此方法
const compose = (...functions) => {
  if (functions.length === 0) {
    return () => {};
  }

  if (functions.length === 1) {
    return functions[0];
  }

  return functions.reduceRight((prev, curr) => {
    return (...args) => {
      return prev(curr(...args));
    };
  });
};
