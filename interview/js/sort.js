const arr = [3, 10, 6, 1, 2];
// 冒泡排序
const sort1 = () => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const num = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = num;
      }
    }
  }
  console.log(arr);
};
// sort1();

// 选择排序
const sort2 = () => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  console.log(arr);
};
// sort2();

// 插入排序
const sort3 = () => {
  for (let i = 1; i < arr.length; i++) {
    let insertVal = arr[i];
    let insertIndex = i - 1;//即arr[i]的前面这个数的下标
    //给insertVal找到插入的位置
    //1.insertIndex>=0保证给insertVal找插入位置，不越界
    //2.insertVal<arr[insertIndex] 带插入的数，还没有找到插入位置
    //小于号的就是从小到大排列，大于号的就是从大到小排列
    //3.就需要将arr[insertIndex]后移
    while (insertIndex >= 0 && insertVal < arr[insertIndex]) {
      arr[insertIndex + 1] = arr[insertIndex];
      // [661]
      insertIndex--;
    }
    //当退出while循环时，说明插入的位置找到，insertIndex+1
    //判断是否需要赋值
    if (insertIndex + 1 !== i) {
      arr[insertIndex + 1] = insertVal;
    }
  }
  console.log(arr);
};
// sort3();
