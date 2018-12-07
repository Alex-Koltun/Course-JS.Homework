'use strict';
(function () {
  var array = [1, 2, 3];

  var garmony =  function (numbers) {
                var reverseNumber = 0;
                var sumNumber = 0;
                for(var  i = 0; i < arguments.length; i++) {
                  sumNumber = sumNumber + reverseNumber
                  reverseNumber = 1/arguments[i]
                }
                // alert('аргументы ' + '5, 6, 7, 8, 90, 76, 55, 100')
                // alert( 'Итог: '+ (arguments.length - 1)/sumNumber );
              }

  var mediana = function(string) {
                console.log('Медиана')
                var numberArray = Array.prototype.slice.call(arguments, 0);
                numberArray.sort(function (a, b) {
                  if(a < b) {
                    return -1
                  } else {
                    return 1
                  }
                })

                if((numberArray.length - 1) % 2) {
                  var  medianaCart = (numberArray[numberArray.length / 2 - 1] + numberArray[numberArray.length / 2])/2 ;
                } else  {
                  var medianaCart = numberArray[(numberArray.length - 1)/ 2]
                }

                console.log('Медианное значение: ' + medianaCart)
              }

  var dispersia = function(number) {
                  console.log('Дисперсия')
                  var sumNumber = 0;
                  var powSum = 0;
                  for(var  g = 0; g < arguments.length; g++){
                    sumNumber = sumNumber + arguments[g]
                  }
                  var sampleMean = sumNumber/arguments.length
                  for (var h = 0; h < arguments.length; h++) {
                    powSum = powSum + Math.pow((arguments[h] - sampleMean), 2)
                  }
                  var result = powSum/(arguments.length - 1)
                  console.log('Дисперсия ' + result)
                }


  var stringGetFunction = function(string) {
                          console.log('Строка, номера символов в которой переданы в качестве аргументов')
                          var content =[];
                          for (var j = 0; j < string.length; j++) {
                            content.push(j)
                          }

                          function cotentanation(content) {
                            var newString = '';
                            content.forEach(function(item){
                               newString = newString + string.charAt(item)
                            })
                            console.log('Востановленная строка: ' + newString)
                          }
                           cotentanation(content)
                      }

var polinom = function(x, array) {
                  console.log('Полином')
                  polinomСall(x, array);

                  function polinomСall(x, array) {
                              if(array.length === 1) { return }
                                 else {
                                  return  (Math.pow(array, array.length) * x + array[1]) + polinomСall(x, array.splice(0, array.length - 1))
                                  }
                              }
                            }

  garmony(5, 6, 7, 8, 90, 76, 55, 100)
  mediana(4, 3, 8, 6, 1)
  dispersia(17, 15, 23, 7, 9, 13)
  stringGetFunction('Привет Мир !')
  console.log('Полином: ' + polinom(2, array))
})()
