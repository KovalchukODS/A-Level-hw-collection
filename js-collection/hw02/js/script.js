/////   TASK #1
console.log("/////  TASK #1");

(() => {
  const citiesAndCountries = {
    Киев: "Украина",
    "Нью-Йорк": "США",
    Амстердам: "Нидерланды",
    Берлин: "Германия",
    Париж: "Франция",
    Лиссабон: "Португалия",
    Вена: "Австрия",
  };

  const result = [];
  for (let key in citiesAndCountries) {
    result.push(`${key} - это ${citiesAndCountries[key]}`);
  }

  console.log(result);
  return result;
})();

/////   TASK #2
console.log("/////  TASK #2");

(() => {
  function getArray() {
    const amount = 12;
    const multyArr = [];
    const arr = [];
    for (let i = 1; i <= amount; i++) {
      arr.push(i);
      if (arr.length % 3 === 0) {
        let arrPush = arr.slice();
        multyArr.push(arrPush);
        arr.length = 0;
      }
    }
    console.log(multyArr);
    return multyArr;
  }

  getArray();
})();

/////   TASK #3
console.log("/////  TASK #3");

(() => {
  const namesOfDays = {
    ru: [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],
    en: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  };

  function getNameOfDay(lang, day) {
    if (day < 1 || day > 7) return console.log("Please type from 1 to 7");

    const result =
      lang === "en"
        ? namesOfDays[lang].slice(day - 1, day)
        : lang === "ru"
        ? namesOfDays[lang].slice(day - 1, day)
        : console.log("Error, please type en or ru ");

    console.log(result);

    return result;
  }

  getNameOfDay("en", 1);
  getNameOfDay("en", 2);
  getNameOfDay("en", 3);
  getNameOfDay("en", 4);
  getNameOfDay("en", 5);
  getNameOfDay("en", 6);
  getNameOfDay("en", 7);
  getNameOfDay("ru", 1);
  getNameOfDay("ru", 2);
  getNameOfDay("ru", 3);
  getNameOfDay("ru", 4);
  getNameOfDay("ru", 5);
  getNameOfDay("ru", 6);
  getNameOfDay("ru", 7);
})();

/////   TASK #4
console.log("/////  TASK #4");

(() => {
  function getTwoLowestNum(arr) {
    arr = Array.from(new Set(arr));
    if (arr.length < 4) return console.log("invalid length of array");
    arr = arr.filter((e) => e > 0 && Number.isInteger(e)).sort((a, b) => a - b);
    const result = arr[0] + arr[1];
    console.log(
      `The summmary of 2 lowest unique numbers in array is: ${result}`
    );
    return result;
  }
  const arr = [10, 3453000, 8010, 6, 2, 2, 234, 7589, 1.2];
  getTwoLowestNum(arr);
})();

/////   TASK #5
console.log("/////  TASK #5");

(() => {
  function valueConvertor(arr) {
    let result = 0;
    for (let i of arr) {
      result = result * 2 + i;
    }
    console.log(`Testing: [${arr}] ==> ${result}`);
    return result;
  }
  const arr = [1, 1, 1, 1, 1, 1, 1, 1];
  valueConvertor(arr);
})();
