### 下载Fetch返回的二进制文件

```javascript
const response = await request(url, {
  method: 'post',
  data: {},
});
const data = await response.blob();
const a = document.createElement('a');
a.download = '导出文件名.xlsx';
a.href = URL.createObjectURL(data);
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
message.success('导出成功');
```
