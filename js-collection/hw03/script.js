const gladValakas = {
  id: 0,
  name: "Valeriy",
  surname: "Zhmishenko",
  salary: 1000,
  workExperience: 10,
  isPrivileges: true,
  gender: "male",
};
const employeeValera = new Employee(gladValakas);

// Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;
// const employeeObj = new Emploee(employee);

function Employee(options) {
  this.id = options.id;
  this.name = options.name;
  this.surname = options.surname;
  this.salary = options.salary;
  this.workExperience = options.workExperience;
  this.isPrivileges = options.isPrivileges;
  this.gender = options.gender;
}

// Добавить функции - конструктору метод (помним про prototype): getFullName который вернет полное имя начиная с фамилии в виде строки
console.log("TASK 2");
Employee.prototype.getFullName = function () {
  return `${this.surname} ${this.name}`;
};

console.log(employeeValera.getFullName());

// Создать новый массив на основе emplyeeArr в котором будут содержаться те же обьекты, но созданные функцией - конструктором Employee. Новый массив должен содержать имя emplyeeConstructArr.

console.log("TASK 3");
let createEmployesFromArr = (arr) => {
  const resultArr = [];
  for (let i of arr) resultArr.push(new Employee(i));
  return resultArr;
};
const employeeConstructArr = createEmployesFromArr(employeeArr);
console.log(employeeConstructArr);

// Создать функцию которая вернет массив со всеми полными именами каждого employee, содержащегося в emplyeeConstructArr;
console.log("TASK 4");

const getFullNamesFromArr = (arr) => {
  const resultArr = [];

  for (let i of arr) resultArr.push(i.getFullName());

  console.log(resultArr);

  return resultArr;
};

getFullNamesFromArr(employeeConstructArr);

// Создать функцию которая вернет среднее значение зарплаты всех employee
console.log("TASK 5");

const getMiddleSalary = (arr) => {
  const result = arr.reduce((acc, employee) => acc + employee.salary, 0);
  console.log(result);
  return result;
};

getMiddleSalary(employeeConstructArr);

// Создать функцию которая выберет наугад работника из массива emplyeeConstructArr. Вы должны учитывать в функции длинну массива, так как если работников 7, а рандомное число будет равно больше 7, то результат будет undefined. Вы можете использовать обьявленную функцию в сомой же себе. Подсказка Math.random
console.log("TASK 6");

const getRandomEmployee = (arr) => {
  console.log(arr[Math.floor(Math.random() * arr.length)]);
};

getRandomEmployee(employeeConstructArr);

// Создать дескриптор со свойством fullInfo который будет записывать все свойства переданные ему в экземпляр от которого он вызывается. И выдавать все свойства, если к нему обратиться, в виде строки <Название свойства> - <значение> через запятую.
console.log("TASK 7");

const employeeObj = new Employee(employeeArr[0]);

Object.defineProperties(Employee.prototype, {
  fullInfo: {
    get: function () {
      const resultStr = [];
      for (let key in this) {
        resultStr.push(`${key} - ${this[key]}`);
      }
      return resultStr.join(", ");
    },
    set: function (options) {
      for (let key in options) {
        if (this.hasOwnProperty(key)) {
          this[key] = options[key];
        }
      }
    },
  },
  getFullName: {
    enumerable: false,
  },
});

console.log(employeeObj.fullInfo);

employeeObj.fullInfo = {
  name: "Вася",
  salary: 9000,
  email: "ex@mail.ua",
};

console.log(employeeObj.fullInfo);
