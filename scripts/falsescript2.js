/*if ("0") {
  alert("ghbdtn!")
}

let a = prompt("Какое «официальное» название JavaScript?");
if (a === "ECMAScript") {
  alert("вернно!")
} else {
  alert("Не знаете? ECMAScript!")
}
let a = prompt("введите число");
//a > 0 ? alert("1") : a < 0 ? alert("-1") : alert('0');
if (a > 0) {
  alert("1")
} else if (a < 0) {
  alert("-1")
} else {
  alert('0')
}
let a = +prompt("введите число");
let b = +prompt("введите число");
(a + b < 4) ? alert("мало") : alert("много");
let login = prompt("введите число");
let message = (login == 'Сотрудник') ? 'Привет' :
  login == 'Директор' ? 'Здравствуйте' :
    login == '' ? 'Нет логина' : '';

alert(message);
alert(alert(1) || 2 || alert(3));
alert(1&&null&&2)
alert(alert(1) && alert(3))
alert(null || 2&&3 || 4);
let value = NaN;
value &&=10;
value ||=20;
value &&=30;
value ||=40;
alert(value);

let age;
if (age > 90 || age < 14 || age != 14 || age || 90){};
if(age > 90 || age < 14);
if(!(age <= 90 && age >= 14));*/

//ввод пароля
/*let a = prompt("Введите логин:");
if (a === "Админ") {
  let b = prompt("Введите пароль:");
  if (b === "Я главный") {
    alert("Здравствуйте")
  } else if (b === null) {
    alert("отменено")
  } else {
    alert("неверный пароль");
  }
} else if (a === "") {
  alert("Я вас не знаю")
} else if (a === null) {
  alert("отменено")
}
alert(null ?? 0 ?? undefined ?? NaN ?? null ?? "" ?? " ");

let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city);

let num1 = 10;
let num2 = 20;
let result;

result ??= num1 ?? num2;
alert(result);
let = i = 3;
while (i) {
  alert(i--);
}

let i = 0;
while (i++<5) {
  alert(i);
}
for (let i = 0; i < 5; i++)alert(i);
for (let i = 0; i < 5; ++i)alert(i);
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) //continue;
  alert(i);
}
let i = 0;
while (i < 3 ) {
  alert(`number${i}`);
  i++;
}
let a;
do { a = +prompt("Введите число больше 100") }
while (a <= 100 && a);
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime
  }
  alert(i);
}*/