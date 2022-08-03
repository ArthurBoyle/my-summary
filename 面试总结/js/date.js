// 永远显示下周三
const today = new Date();
const dayOfWeek = today.getDay();
const offset = (dayOfWeek < 3 ? 3 : 10) - dayOfWeek;
today.setDate(today.getDate() + offset);
today.setHours(14);
today.setMinutes(30);
today.setSeconds(0);
console.log(today);
