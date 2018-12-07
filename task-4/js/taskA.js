'use strict'
function taskA() {

  var cityArray = ['Минск', 'Борисов', 'Гродно', 'Гомель', 'Витебск', 'Пинск', 'Брест']
  var nameArray = ['Ваня', 'Федя', 'Паша', 'Нина', 'Петя', 'Роза', 'Сеня', 'Лука', 'Фродо', 'Фридрих']

  var randomPeople = [];

  function generationRandomNumber(min,max) {
     return Math.round(Math.random() * (max - min) + min)
  }

  for (var i = 0; i < nameArray.length; i++) {
    randomPeople.push({
        name: nameArray[generationRandomNumber(0, nameArray.length - 1)],
        city: cityArray[generationRandomNumber(0, cityArray.length - 1)],
        age: generationRandomNumber(0, 100)
    })
  }

  randomPeople.sort(function (a, b) {
    if( a.age >  b.age) {
      return -1;
    } else {
      return 1
    }
  });

  randomPeople.forEach( function (item, k, array) {
    console.log('Список людей: ' + 'имя: ' + item.name + ' город: ' + item.city + ' возраст ' + item.age)
  })
}
