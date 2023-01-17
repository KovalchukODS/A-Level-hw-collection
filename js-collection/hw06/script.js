// 1.Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром

removeUser = (arr, index) => arr.splice(index, 1);

// 2.Создать функцию которая вернет все ключи обьекта переданного параметром

getAllKeys = (obj) => Object.keys(obj);

// 3.Создать функцию которая вернет все значения объекта переданного параметром

getAllValues = (obj) => Object.values(obj);

// 4.Создать функцию,где мы первым параметром передадим объект с новым кандидатом, а вторым параметром - id любого кондидата в массиве condidateArr. Функция должна будет вставить кандидата переданного через первый параметр в массив перед кондидатом у которого id равно тому что передали во-втором параметре

insertIntoArr = (candidateObj, idIn) =>
  arr.splice(
    arr.findIndex((e) => e.id === idIn),
    0,
    candidateObj
  );

// 5.Создайте класс Candidate который будет принимать параметром объект из массива candidateArr. Добавить метод с именем state который вернет шатат в котором живет наш кандидат. Информация о штате находится в свойстве address и это третья запись после запятой.

class Candidate {
  constructor(obj) {
    Object.assign(this, obj);
  }
  getState() {
    return this.address.split(", ")[2];
  }

  // создаём список инстансов класса Candidate
  static listOfCandidates = [];

  // 6
  static getCompanyNames() {
    return Array.from(
      new Set(Candidate.listOfCandidates.map((e) => e.company))
    );
  }
  // 7
  static getUsersByYear(yearOfRegistration) {
    return Candidate.listOfCandidates
      .filter((e) => e.registered.split("-")[0] == yearOfRegistration)
      .map((e) => e._id);
  }
  // 8
  static getCandidatesByUnreadMsg(numOfUnreadMsg) {
    return Candidate.listOfCandidates.filter((e) =>
      e.greeting.split(" ").includes(numOfUnreadMsg.toString())
    );
  }
  // 9
  static getCondidatesByGender(typeOfGender) {
    return Candidate.listOfCandidates.filter((e) => e.gender === typeOfGender);
  }
}

// проброс массива candidateArr в массив Candidate.listOfCandidates
for (const candidate of candidateArr)
  Candidate.listOfCandidates.push(new Candidate(candidate)); // prettier смещает

// 6.Создать функцию которая выведет массив с названиями фирм взятыми из св-ва company. Если фирмы повторяются в массиве, то удалить дубликаты.

console.log(Candidate.getCompanyNames());

// 7. Создать функцию которая выведет мне массив id всех кондидатов, которые были зарагестрированны в том же году что и год указанный в параметре.

console.log(Candidate.getUsersByYear(2017));

// 8. Создать функцию которая вернет массив с экземплярами - кандидатами, отфильтрованных по кол-ву непрочитанных сообщений. Смотрим св-во greeting, там указанно это количество в строке, Вам надо достать это число из строки и сверять с тем что в параметер вашей функции.

console.log(Candidate.getCandidatesByUnreadMsg(8));

// 9. Создать функцию которая вернет массив по свойству gender.

console.log(Candidate.getCondidatesByGender("male"));

// 10. Создать функцию reduce, join самому
const someArr = [1, 3, 3, 7, 2, 2, 8, 3, 2, 2];

//10.1.1 custom "reduce" as function
function customReduce(cb, array, initial) {
  let acc = initial !== undefined ? initial : array[0];
  let arr = initial !== undefined ? [initial, ...array] : array;
  for (let i = 1; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

console.log(customReduce((a, b) => a + b, someArr, 1));

//10.1.2 custom "reduce" as array method

function _customReduceMethod(cb, initial) {
  let acc = initial !== undefined ? initial : this[0];
  let arr = initial !== undefined ? [initial, ...this] : this;
  for (let i = 1; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}
Array.prototype.customReduceMethod = _customReduceMethod;
console.log(someArr.customReduceMethod((a, b) => a + b));

//10.2.1 "join" as function
function customJoin(arr, symbol = ",") {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result =
      i !== arr.length - 1
        ? (result += arr[i] + symbol.toString())
        : (result += arr[i]);
  }
  return result;
}
console.log(customJoin(someArr, 0));

//10.2.2 "join" as custom array method
function _customJoinMethod(symbol = ",") {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result =
      i !== this.length - 1
        ? (result += this[i] + symbol.toString())
        : (result += this[i]);
  }
  return result;
}
Array.prototype.customJoinMethod = _customJoinMethod;
console.log(someArr.customJoinMethod());
