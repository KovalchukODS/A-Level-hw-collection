// TASK 3
(() => {
  const studentArr = [
    {
      name: "Сергей",
      surname: "Войлов",
      ratingPoint: 1000,
      schoolPoint: 1000,
      course: 2,
    },
    {
      name: "Татьяна",
      surname: "Коваленко",
      ratingPoint: 880,
      schoolPoint: 700,
      course: 1,
    },
    {
      name: "Анна",
      surname: "Кугир",
      ratingPoint: 1430,
      schoolPoint: 1200,
      course: 3,
    },
    {
      name: "Станислав",
      surname: "Щелоков",
      ratingPoint: 1130,
      schoolPoint: 1060,
      course: 2,
    },
    {
      name: "Денис",
      surname: "Хрущ",
      ratingPoint: 1000,
      schoolPoint: 0,
      course: 4,
    },
    {
      name: "Татьяна",
      surname: "Капустник",
      ratingPoint: 650,
      schoolPoint: 500,
      course: 3,
    },
    {
      name: "Максим",
      surname: "Меженский",
      ratingPoint: 990,
      schoolPoint: 1100,
      course: 1,
    },
    {
      name: "Денис",
      surname: "Марченко",
      ratingPoint: 570,
      schoolPoint: 1300,
      course: 4,
    },
    {
      name: "Антон",
      surname: "Завадский",
      ratingPoint: 1090,
      schoolPoint: 1010,
      course: 3,
    },
    {
      name: "Игорь",
      surname: "Куштым",
      ratingPoint: 870,
      schoolPoint: 790,
      course: 1,
    },
    {
      name: "Инна",
      surname: "Скакунова",
      ratingPoint: 1560,
      schoolPoint: 200,
      course: 2,
    },
  ];

  class Student {
    constructor(options) {
      this.id = Student.ID++;
      this.name = options.name;
      this.surname = options.surname;
      this.ratingPoint = options.ratingPoint;
      this.schoolPoint = options.schoolPoint;
      this.isSelfPayment = true;
      Student.listOfStudents.push(this);
      Student.paymentsCalc();
      Student.budgetCalc();
    }

    static ID = 1;
    static listOfStudents = [];
    static listOfBudgetStudents = [];

    static paymentsCalc() {
      const studentList = Student.listOfStudents;
      studentList.sort((a, b) => {
        if (b.ratingPoint > a.ratingPoint) return 1;
        if (b.ratingPoint < a.ratingPoint) return -1;
        if ((b.ratingPoint = a.ratingPoint)) {
          if (b.schoolPoint > a.schoolPoint) return 1;
          else return 0;
        }
      });
      studentList.slice(0, 5).forEach((e) => (e.isSelfPayment = false));
      studentList.slice(5).forEach((e) => (e.isSelfPayment = true));
    }
    static budgetCalc() {
      Student.listOfBudgetStudents = Student.listOfStudents.slice(0, 5);
    }
  }

  for (const student of studentArr) new Student(student);

  console.log(Student.listOfBudgetStudents);
  console.log(Student.listOfStudents);
})();

// TASK 2
(() => {
  class CustomString {
    reverse(str) {
      const resultArr = [];
      for (let i of str) resultArr.unshift(i);
      return resultArr.join("");
    }
    ucFirst(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    ucWords(str) {
      return str
        .split(" ")
        .map((i) => this.ucFirst(i))
        .join(" ");
    }
  }

  let myStr = new CustomString();
  console.log(myStr.reverse("ytrewq"));
  console.log(myStr.ucFirst("qwerty"));
  console.log(myStr.ucWords("qwerty qwerty qwerty"));
})();

// TASK 3
(() => {
  class Validator {
    checkIsEmail(str) {
      return Validator.EMAIL_REGEXP.test(str);
    }
    checkIsDomain(str) {
      return Validator.DOMAIN_REGEXP.test(str);
    }
    checkIsDate(date) {
      return Validator.DATE_REGEXP.test(date);
    }
    checkIsPhone(numbers) {
      return Validator.PHONE_REGEXP.test(numbers);
    }
    static EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    static DOMAIN_REGEXP =
      /^(?!:\/\/)([a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64}?$/gi;

    static DATE_REGEXP =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    static PHONE_REGEXP =
      /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;
  }

  let number = new Validator();

  console.log(number.checkIsEmail("vasya.pupkin@gmail.com"));
  console.log(number.checkIsDomain("google.com"));
  console.log(number.checkIsPhone("+38 (066) 937-99-92"));
  console.log(number.checkIsDate("30/11/2019"));
})();
