// 6.1.Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром

removeUser = (arr, index) => arr.splice(index, 1);

// 6.2.Создать функцию которая вернет все ключи обьекта переданного параметром

getAllKeys = (obj) => Object.keys(obj);

// 6.3.Создать функцию которая вернет все значения объекта переданного параметром

getAllValues = (obj) => Object.values(obj);

// 6.10. Создать функцию reduce, join самому
const someArr = [1, 3, 3, 7, 2, 2, 8, 3, 2, 2];

//6.10.1.1 custom "reduce" as function
function customReduce(cb, array, initial) {
  let acc = initial !== undefined ? initial : array[0];
  let arr = initial !== undefined ? [initial, ...array] : array;
  for (let i = 1; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

console.log(customReduce((a, b) => a + b, someArr, 1));

//6.10.1.2 custom "reduce" as array method
Array.prototype.customReduceMethod = function (cb, initial) {
  let acc = initial !== undefined ? initial : this[0];
  let arr = initial !== undefined ? [initial, ...this] : this;
  for (let i = 1; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
};
console.log(someArr.customReduceMethod((a, b) => a + b));

//6.10.2.1 "join" as function
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

//6.10.2.2 "join" as custom array method

Array.prototype.customJoinMethod = function (symbol = ",") {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result =
      i !== this.length - 1
        ? (result += this[i] + symbol.toString())
        : (result += this[i]);
  }
  return result;
};
console.log(someArr.customJoinMethod());

// 6.4.Создать функцию,где мы первым параметром передадим объект с новым кандидатом, а вторым параметром - id любого кондидата в массиве condidateArr. Функция должна будет вставить кандидата переданного через первый параметр в массив перед кондидатом у которого id равно тому что передали во-втором параметре

insertIntoArr = (candidateObj, idIn) =>
  arr.splice(
    arr.findIndex((e) => e.id === idIn),
    0,
    candidateObj
  );

// 6.5.Создайте класс Candidate который будет принимать параметром объект из массива candidateArr. Добавить метод с именем state который вернет шатат в котором живет наш кандидат. Информация о штате находится в свойстве address и это третья запись после запятой.

class Candidate {
  constructor(obj) {
    Object.assign(this, obj);
  }
  getState() {
    return this.address.split(", ")[2];
  }

  // создаём список инстансов класса Candidate
  static listOfCandidates = [];

  // 6.6
  static getCompanyNames() {
    return Array.from(
      new Set(Candidate.listOfCandidates.map((e) => e.company))
    );
  }
  // 6.7
  static getUsersByYear(yearOfRegistration) {
    return Candidate.listOfCandidates
      .filter((e) => e.registered.split("-")[0] == yearOfRegistration)
      .map((e) => e._id);
  }
  // 6.8
  static getCandidatesByUnreadMsg(numOfUnreadMsg) {
    return Candidate.listOfCandidates.filter((e) =>
      e.greeting.split(" ").includes(numOfUnreadMsg.toString())
    );
  }
  // 6.9
  static getCondidatesByGender(typeOfGender) {
    return Candidate.listOfCandidates.filter((e) => e.gender === typeOfGender);
  }
  ////////////// HW 07
  // 7.1
  static searchCandidatesByPhoneNumber(phoneNumbers) {
    return Candidate.listOfCandidates.filter((e) => {
      const cadidatesPhoneNumber = e.phone.replaceAll(/\D/g, "");
      return cadidatesPhoneNumber.includes(phoneNumbers.replaceAll(/\D/g, ""));
    });
  }
  // 7.2
  static getCandidateById(candidateId) {
    let candidate = Candidate.listOfCandidates.find(
      (e) => e._id === candidateId
    );
    candidate.registered = candidate.registered
      .slice(0, 10)
      .replaceAll("-", "/");
    return candidate;
  }
  // 7.3
  static sortCandidatesArr(typeOfSort) {
    // тестил .slice(), Arry.from(), [...] для отвязки от ссылки
    if (typeOfSort === "asc") {
      return Candidate.listOfCandidates.slice().sort((a, b) => {
        if (b.balance > a.balance) return 1;
        if (b.balance < a.balance) return -1;
        return 0;
      });
    }
    if (typeOfSort === "desc") {
      return Array.from(Candidate.listOfCandidates).sort((a, b) => {
        if (a.balance > b.balance) return 1;
        if (a.balance < b.balance) return -1;
        return 0;
      });
    }
    return [...Candidate.listOfCandidates];
  }
  // 7.4
  //  7.4.1
  static getEyeColorMap1() {
    return Candidate.listOfCandidates.reduce(
      (acc, e, i, arr) => {
        acc[e.eyeColor].push(e);
        return acc;
      },
      {
        brown: [],
        blue: [],
        green: [],
      }
    );
  }
  //  7.4.2
  static getEyeColorMap2() {
    const resultObj = {};
    Candidate.listOfCandidates.forEach((e) => (resultObj[e.eyeColor] = []));
    Candidate.listOfCandidates.forEach((e) => resultObj[e.eyeColor].push(e));
    return resultObj;
  }
  //  7.4.3
  static getEyeColorMap3() {
    const resultObj = {};
    Candidate.listOfCandidates.filter((e, i) =>
      resultObj.hasOwnProperty([e.eyeColor])
        ? resultObj[e.eyeColor].push(e)
        : ((resultObj[e.eyeColor] = []), resultObj[e.eyeColor].push(e))
    );
    return resultObj;
  }
}

// проброс массива candidateArr в массив Candidate.listOfCandidates
for (const candidate of candidateArr)
  Candidate.listOfCandidates.push(new Candidate(candidate)); // prettier смещает

// 6.6 Создать функцию которая выведет массив с названиями фирм взятыми из св-ва company. Если фирмы повторяются в массиве, то удалить дубликаты.

console.log(Candidate.getCompanyNames());

// 6.7 Создать функцию которая выведет мне массив id всех кондидатов, которые были зарагестрированны в том же году что и год указанный в параметре.

console.log(Candidate.getUsersByYear(2017));

// 6.8 Создать функцию которая вернет массив с экземплярами - кандидатами, отфильтрованных по кол-ву непрочитанных сообщений. Смотрим св-во greeting, там указанно это количество в строке, Вам надо достать это число из строки и сверять с тем что в параметер вашей функции.

console.log(Candidate.getCandidatesByUnreadMsg(8));

// 6.9 Создать функцию которая вернет массив по свойству gender.

console.log(Candidate.getCondidatesByGender("male"));

// 7.1  Создать поиск кандидатов в массиве  по номеру телефона. Номер телефона может быть указан не полностью и в любом формате.

console.log(Candidate.searchCandidatesByPhoneNumber("43"));
console.log(Candidate.searchCandidatesByPhoneNumber("+1(869) 40"));
console.log(Candidate.searchCandidatesByPhoneNumber("+1(869)408-39-82"));

// 7.2 Создать функию которая найдет кандидата по  _id и вернет его из массива candidatesArr c отформатированной датой регистрации (поле registred). Дата должна иметь формат DD/MM/YY.
console.log(Candidate.getCandidateById("5e216bc9a6059760578aefa4"));

// 7.3 Написать функцию которая будет сортировать массив canidatesArr по количеству денег лежащих на балансе (смотрим свойство balance)   в том порядке, в котором ей укажут в аргементе sortBy. Если параметр не был передан, то вернет массив в первоначальном состоянии.

console.log(Candidate.sortCandidatesArr("desc"));
console.log(Candidate.sortCandidatesArr("asc"));
console.log(Candidate.sortCandidatesArr(""));

// 7.4 Написать функцию, которая вернет объект в котором название ключей будут цвета глаз, а значением - массив с кандидатами имеющие такой цвет глаз. При этом нельзя самому указывать первоначальный объект с возможными вариантами цветами глаз, а сгенерировать их на основе массива с кандидатами, то есть пройтись по массиву candidatesArr и брать смотреть на свойство eyeColor и добавлять значение цвета глаз кандидата как ключ объекта, если такого ключа не существует, ну и не добавлять - если  одноименный ключ уже существует

console.log(Candidate.getEyeColorMap1());
console.log(Candidate.getEyeColorMap2());
console.log(Candidate.getEyeColorMap3());
