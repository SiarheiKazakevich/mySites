const phoneBook = [
  { lastName: "Алексеев", phone: "111" },
  { lastName: "Иванов", phone: "222" },
  { lastName: "Петров", phone: "333" },
  { lastName: "Сидоров", phone: "444" },
  { lastName: "Яковлев", phone: "555" },
];
function findPhone(phoneBook, targetLastName) {
  let left = 0;
  let right = phoneBook.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midName = phoneBook[mid].lastName;
    if (midName === targetLastName) {
      return phoneBook[mid].phone;
    }
  } if (midName < targetLastName) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
  return null;
}
//Линейный поиск
function printAllPhones(phoneBook) {
  for (let i = 0; i < phoneBook.length; i++) {
    console.log(phoneBook[i].phone);
  }
}
