// Напиши функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, при втором - суммирует переданый параметр с тем, что передали первый раз и тд. Запрещается использовать глобальные переменные как хранилище результатов счетчика.

function counter1(param) {
  let acc = param;
  return (num) => (acc += num);
}
// OR

function counter2() {
  let result = null;
  return (num) => {
    result += num;
    console.log(result);
    return result;
  };
}

// Создать функцию которая будет возвращать массив в котором будут лежать все значения - аргументы переданные в данную функцию. Но если мы ничего не передадим в параметрах, то массив очистится. Запрещается использовать глобальные переменные как хранилище значений.

function arrCollector() {
  const arr = [];
  return function (elem) {
    if (elem === undefined) {
      arr.length = 0;
      return arr;
    }
    arr.push(elem);
    return arr;
  };
}

// Содать функцию , которая при каждом вызове будет показывать разницу в секундах между временем когда ее вызывали последний раз и теперешним. Вызываем первый раз, то ретерним строку 'Enabled'. Запрещается использовать глобальные переменные как хранилище значений

function calcDiffBetweenExecutions() {
  let initTime = null;
  return () => {
    if (!initTime) {
      initTime = new Date().getTime();
      return console.log("Enabled");
    }
    let currentTime = new Date().getTime();
    const timeDiff = Math.abs(Math.ceil(initTime / 1000 - currentTime / 1000));
    initTime = currentTime;
    console.log(timeDiff);
    return timeDiff;
  };
}

let getTime = calcDiffBetweenExecutions();
getTime();
setTimeout(getTime, 5e3);

// Создать таймер обратного отсчета, который будет в console выодить время в формате MM:SS. Где MM - количество минут, SS - количество секунд. При этом когда закончится время, нужно вывести в console строку "Timer End".

const timer = (time) => {
  const intervalId = setInterval(() => {
    if (!time) {
      console.log("Timer End");
      clearInterval(intervalId);
      return;
    }
    console.log(
      `${Math.floor(time / 60)
        .toString()
        .padStart(2, 0)} : ${(time % 60).toString().padStart(2, 0)}`
    );
    time--;
  }, 1e3);
};

timer(12);
