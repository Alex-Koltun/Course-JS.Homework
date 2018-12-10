'use strict'

// Задание 1.
// Все данные выводяться в консоль браузера
//
//  Вызов печати страницы - worker.print();
//
// п.а
//   для добавления сотрудника  использовать метод bookkeeping.employment.add(имя, возраст, отдел, зарплата, стаж работы);
//   // удаление сотрудника метод bookkeeping.employment.delete("имя сотрудника")
//
// п.б
//   для вывода зарплат сотрудников + сумму зарплаты по сотрудникам использовать метод: bookkeeping.workerSalary()
//
// п.в
//  для вывода сотрудников с минимальной/максимальной зарплатой использовать метод: bookkeeping.statisticSalary()
//
//  п.г
//  для вывода данных по отделу, необходимо передать название отдела в виде строки методу:
//  имена отделов: 'Управление', 'Доставка', 'Склад', 'Гарантийный', 'Бухгалтерия';


var bookkeeping = {
  worker: [
            { name: 'Федор Михайлович Глеб', age: 52, department: 'Управление', salary: 2650, time: 65, print: function () { window.print() } },
            { name: 'Иван Иванович Иванов', age: 30, department: 'Доставка', salary: 750, time: 2, print: function () { window.print() } },
            { name: 'Иван Иванович Петров', age: 28, department: 'Доставка', salary: 750, time: 13, print: function () { window.print() } },
            { name: 'Иван Иванович Купревич', age: 22, department: 'Доставка', salary: 900, time: 36, print: function () { window.print() } },
            { name: 'Иван Иванович Большаков', age: 45, department: 'Склад', salary: 800, time: 21, print: function () { window.print() } },
            { name: 'Денис Иванович Давыдов', age: 31, department: 'Склад', salary: 700, time: 3, print: function () { window.print() } },
            { name: 'Кирилл Иванович Береза', age: 24, department: 'Гарантийный', salary: 500, time: 1, print: function () { window.print() } },
            { name: 'Семен Борисович Блюхер', age: 32, department: 'Доставка', salary: 850, time: 43, print: function () { window.print() } },
            { name: 'Анатолий Константинович Смернов', age: 47, department: 'Управление', salary: 1950, time: 65, print: function () { window.print() } },
            { name: 'Нина Ивановна Шмыг', age: 41, department: 'Бухгалтерия', salary: 1550, time: 24, print: function () { window.print() } }
  ],
  employment: {
                add: function (workerName, workerAge, workerDepartment, salary, time = '0') {
                              bookkeeping.worker.push({
                              name: workerName,
                              age: workerAge,
                              department: workerDepartment,
                              salary: salary,
                              time: time,
                              print: function () { window.print() }
                              }
                            )
                          },
                delete: function(name) {
                              for(var i = 0; i < bookkeeping.worker.length;  i++) {
                                var elementNumber =  bookkeeping.worker[i].name.indexOf(name);
                                if(elementNumber !== -1 ) {
                                  bookkeeping.worker.splice(i, 1);
                                  return true;
                                }
                              }
                            }
            },
  workerSalary: function () {
                var arrayCurrent = bookkeeping.worker;
                var salary = [];

                arrayCurrent.forEach(function( item, i, arrayCurrent) {
                  salary.push(arrayCurrent[i].salary)
                });

                arrayCurrent.sort(function (a, b) {
                  if( a.salary >  b.salary) {
                    return -1;
                  } else {
                    return 1
                  }
                });

                arrayCurrent.forEach(function(item, i, arrayCurrent) {
                  console.log('Имя: ' + item.name + ' зарплата: ' + item.salary + ' рублей');
                });

                var result = salary.reduce(function(previousValue, currentItem) {
                              return previousValue + currentItem;
                            });

                console.log('Суммарная зарплата по предприятию:  ' + result + ' рублей');
            },
  statisticSalary: function() {
              var arrayCurrent = bookkeeping.worker;
              var min = arrayCurrent[0].salary;
              var max = min;
              var minSalary;
              var maxSalary;
              var salary = [];

              arrayCurrent.forEach(function( item, i, arrayCurrent) {
                salary.push(arrayCurrent[i].salary)
              });

              for(var k = 0; k < arrayCurrent.length; k++) {
                if (arrayCurrent[k].salary > max) {
                  max = arrayCurrent[k].salary
                }
                if (arrayCurrent[k].salary < min) {
                  min =  arrayCurrent[k].salary
                }
              }

              minSalary =  min;
              maxSalary = max;
              console.log('Максимальная зарплата: ' + maxSalary);
              console.log ('Минимальная зарплата: ' + minSalary);

              var midleSalary = function() {
                  if(salary.length > 1) {
                    var result = salary.reduce(function(previousValue, currentItem) {
                              return previousValue + currentItem;
                            });
                    return  Math.round(result/ (salary.length - 1));
                    } else {
                      salary[0]
                    }
              }


              console.log('Cредняя зарплата по предприятию: ' + midleSalary()  + ' рублей');
            },
  statisticDepartment: function (departmentName) {
              var arrayCurrent = bookkeeping.worker;
              var currentDepartment =  departmentName;

              var arrayDepartment = arrayCurrent.filter( function (item) {
                            return item.department === currentDepartment;
              });

              var salary = [];

              arrayDepartment.forEach(function( item, i, arrayDepartment) {
                salary.push(arrayDepartment[i].salary)
              });

              var resultSalary = salary.reduce(function(previousValue, currentItem) {
                            return previousValue + currentItem;
              });

              var age = [];

              arrayDepartment.forEach(function( item, i, arrayCurrent) {
                age.push(arrayDepartment[i].age)
              });

              var midleAge = function() {
                  if(salary.length > 1) {
                    var result = age.reduce(function(previousValue, currentItem) {
                              return previousValue + currentItem;
                            });
                    return  Math.round(result/(age.length - 1));
                    } else {
                      age[0]
                    }
              }

              var time = [];

              arrayDepartment.forEach(function( item, i, arrayCurrent) {
                time.push(arrayDepartment[i].time)
              });

              var maxTime = 0;
              arrayDepartment.forEach(function(item, i, arrayDepartment) {
                  if (item.time > maxTime) {
                    maxTime =  item.time
                  }
              });

              var timeC = arrayDepartment.filter(function (item, i, arrayDepartment) {
                  if (maxTime === item.time) {
                    return item
                  }
              })



              console.log('Cредняя зарплата по отделу ' + departmentName + ' : ' + Math.round(resultSalary/(salary.length - 1)) + ' рублей');
              console.log('Суммарная зарплата по отделу ' + departmentName + ' : ' + resultSalary + ' рублей');
              console.log('Количество сотрудников отдела ' + departmentName + ' : ' +  arrayDepartment.length);
              console.log('Средний возраст сотрудников отдела ' + departmentName + ' : ' + midleAge() + ' лет');
              console.log('Самый верный сотрудник отдела ' + departmentName + ' : ' + timeC[0].name + ' работает ' + timeC[0].time + ' месяц' )
    }
}
