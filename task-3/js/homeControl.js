'use strict'

// Данные по квартирам храняться в массиве объектов flats.
//
// А.
// Метод заселения жильца homeControl.control.add(имя, возраст, номер квартиры).
// Метод выселения жильца homeControl.control.delete(имя жильца).
//
// Б.
// Метод выселения всех жильцов из квартиры homeControl.evict(номер квартиры)
//
// В.
// Метод расчета коммунальных платежей и вывода счетов на жильцов-платильщиков homeControl.communalPayment(число)


var homeControl =  {
  flats: [
      {flatNumber: 1, area: 250, floor: 1, humans: [{name: 'Петр Константинович Перельман', age: 15},
                                    {name: 'Зоя', age: 1}
                                  ]},
      {flatNumber: 2, area: 250, floor: 1, humans: [{name: 'Борис Константинович Перельман', age: 55},
                                    {name: 'Филина Первомайновна Перельман', age: 51}
                                  ]},
      {flatNumber: 3, area: 250, floor: 2, humans: []},
      {flatNumber: 4, area: 250, floor: 2, humans: [{name: 'Игнат Владович Семин', age: 35},
                                    {name: 'Светлана Абрамовна Семина', age: 25},
                                    {name: 'Олег Игнатович Семин', age: 5}
                                  ]},
      {flatNumber: 5, area: 250, floor: 3, humans: [{name: 'Самуил Борисович Свергаст', age: 15},
                                    {name: 'Илья Борисович Свергаст', age: 14},
                                    {name: 'Владимир Борисович Свергаст', age: 7},
                                    {name: 'Петр Борисович Свергаст', age: 14},
                                    {name: 'Арья Борисовна Свергаст',   age: 4},
                                    {name: 'Борис Иванович Свергаст', age: 45},
                                    {name: 'Людмила Борисовна Свергаст', age: 35}
                                  ]},
      {flatNumber: 6, area: 50, floor: 3, humans: [{name: 'Дмитрий Латыгин', age: 21},
                                    {name: 'Михаил Белый', age: 18},
                                    {name: 'Сергей Серый', age: 17},
                                    {name: 'Петр Попов', age: 19},
                                    {name: 'Андрей Голубка', age: 17},
                                    {name: 'Борис Иваношвили', age: 25},
                                    {name: 'Константин Сверг', age: 20}
                                  ] },
      {flatNumber: 7, area: 50, floor: 3, humans: [{name: 'Игнат  Семинович', age: 66}]},
      {flatNumber: 8, area: 50, floor: 3, humans: [{name: 'Аркадий Лопашка', age: 70}]},
      {flatNumber: 9, area: 50, floor: 3, humans: [{name: 'Константин Переводов', age: 101}]},
      {flatNumber: 10, area: 500, floor: 4, humans: [{name: 'Борис Лукошко', age: 25},
                                    {name: 'Татьяна Лукошко', age: 21}
                                  ]}
  ],
  // {name: 'Игнат Владович Семин', age: 55}
  control: {
            add: function (name, age, flatNumber) {
                    if ( 1 <= flatNumber && flatNumber <= 10) {
                         homeControl.flats[flatNumber - 1].humans.push({
                            name: name,
                            age: age
                          })
                          console.log(homeControl.flats[flatNumber - 1].humans)
                    } else {
                      alert(' У нас нет квартиры с номером:' + flatNumber)
                    }
                  },
                delete: function(name) {
                      for(var i = 0; i < homeControl.flats.length;  i++) {
                        var occupit = homeControl.flats[i].humans.filter(function (item, k) {
                            if(item.name === name) {
                              homeControl.flats[i].humans.splice(k,1)
                              return true
                            }
                        console.log(s)
                        });
                        }
                        if (occupit.name !== name) {
                            alert(' У нас нет жильца по имени: ' + name)
                      }
                    }
          },
  evict: function(number) {
  },
  communalPayment: function(invoice) {
          var  houseArea = [];
          var arrayCurrent = homeControl.flats

          arrayCurrent.forEach(function(item, i, arrayCurrent) {
                var humanArray = arrayCurrent[i].humans;
                var humanAge = [];

                humanArray.filter( function(item , i, array) {
                  if(item.age > 18){
                     humanAge.push (item)
                   }
                });

                if( humanAge.length !== 0) {
                    houseArea.push({
                      area: arrayCurrent[i].area,
                      flatNumber: arrayCurrent[i].flatNumber,
                      humans: humanAge,
                      invoiceFlat: [],
                    })
                  }
          })

          console.log(houseArea);

          var result = function() {
                    var sum = 0;
                      for(var i = 0; i < houseArea.length; i++) {
                        var sum = sum + houseArea[i].area ;
                        }
                        return sum;
                    }();

          function invoiceForFlat (invoice) {
                houseArea.forEach(function (item, i, houseArea) {
                        item.invoiceFlat = ((item.area / result * 100) / 100 * invoice).toFixed(2);
                        console.log('Квартира: ' + item.flatNumber + ' счет ' + item.invoiceFlat +  ' рублей')
                        for( var j = 0; j < item.humans.length; j++) {
                            item.humans[j].partInvoice = +(item.invoiceFlat/item.humans.length).toFixed(2);
                            console.log('Жилец: '+  item.humans[j].name  + ' счет '  + item.humans[j].partInvoice + ' рублей')
                        }
                      })
              }
          invoiceForFlat(invoice)
        }
    }

homeControl.communalPayment(100)
