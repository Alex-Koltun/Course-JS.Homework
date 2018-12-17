var index = {
  drawTimer: function () {
    var data = new Date()
    var node = document.querySelector('.timer');
    var hours =  23 - data.getHours();
    currentHours = (hours < 10) ? '0' + hours : hours;
    var minutes = 59 -data.getMinutes();
    currentMInutes = (minutes < 10) ? '0' + minutes : minutes;
    var seconds = 59 - data.getSeconds()
    currentSeconds = (seconds < 10) ? '0' + seconds : seconds;

    var currentDay = data.getDate();
    var currentMonth = data.getMonth() + 1;

    node.innerText = ''
    node.innerText = 'До конца дня ' + currentDay + '.' + currentMonth + ' ' + currentHours + ':' + currentMInutes + ':' + currentSeconds
  },
  tabl: function(){
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var tablContainer = document.querySelector('.tabl');

    for(var g = 1; g <= number.length; g++) {
        var colContainer = document.createElement('div');
        colContainer.setAttribute('id', 'col-' + g )
        colContainer.classList.add('myStyle');
        colContainer.innerText = g;
        tablContainer.appendChild(colContainer)
        // tablContainer.querySelector('.myStyle:nth-child(1)').style.backgroundColor = 'green'
        number.forEach(function(i){
          var item = document.createElement('div');
          item.classList.add('myStyle--row');
          item.innerText = g * number[i - 1];
          colContainer.appendChild(item);
          // console.log()
        })
        colContainer.querySelector('.myStyle--row:nth-child(' + (g) + ')').style.backgroundColor = 'green'
     }
  },
  countries:[
    {countries:'Бельгия', flag:'img/belgium_l.png', code:'+32', population: '11 358 952' },
    {countries:'Беларусь', flag:'img/belarus_l.png', code:'+375', population: '9 491 823' },
    {countries:'Американское Самоа', flag:'img/american-samoa_l.png', code:'+1 684', population: '51 504' },
    {countries:'Албания', flag:'img/albania_l.png', code:'+355', population: '2 876 591' },
    {countries:'Аруба', flag:'img/aruba_l.png', code:'+297', population: '103 889' },
    {countries:'Доминиканская Республика', flag:'img/dominican-republic_l.png', code:'+1-809, +1-829, +1-849', population: '10 734 247' },
    {countries:'Гонконг', flag:'img/hong-kong_l.png', code:'+852 ', population: '7 448 900' },
    {countries:'Гернси', flag:'img/guernsey_l.png', code:'+44-1481 ', population: '62 711' },
    {countries:'Ислландия', flag:'img/iceland_l.png', code:'+354', population: '353 070' },
    {countries:'Израиль', flag:'img/israel_l.png', code:'+972', population: '8 680 000' },
    {countries:'Италия', flag:'img/italy_l.png', code:'+39', population: '60 795 612' },
    {countries:'Британия', flag:'img/united-kingdom_l.png', code:'+44', population: '63 395 574' }
  ],
  countrieList: function() {
    var div = document.querySelector('.countries');
    var list = document.createElement('ul');
    div.appendChild(list);
    var itemList

    index.countries.forEach(function(item, i){
      itemList = document.createElement('li');
      // itemList.setAttribute()
      var icon = document.createElement('img');
      icon.setAttribute('src',index.countries[i].flag) ;
      icon.setAttribute('width', '70px');
      icon.setAttribute('height', '50px');
      itemList.appendChild(icon)

      var name = document.createElement('span');
      name.innerText =   index.countries[i].countries;
      itemList.appendChild(name)

      var telefon = document.createElement('span');
      telefon.innerText =  'телефонный код: ' + index.countries[i].code;
      itemList.appendChild(telefon)

      var population = document.createElement('span');
      population.innerText = 'население ' +  index.countries[i].population;
      itemList.appendChild(population)

      list.appendChild(itemList)
    })
  },
  eratosfen: function(){
    var arr = [];
    var n = prompt();

    for (var i = 2; i < n; i++) {
      arr[i] = true
    }

    // шаг 2
    var p = 2;

    do {
      // шаг 3
      for (i = 2 * p; i < n; i += p) {
        arr[i] = false;
      }

      // шаг 4
      for (i = p + 1; i < n; i++) {
        if (arr[i]) break;
      }

      p = i;
    } while (p * p < n); // шаг 5

    // шаг 6 (готово)
    // посчитать сумму
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i]) {
        sum += i;
      }
    }

    alert( sum );
      }
}

index.drawTimer();
index.tabl();
setInterval(index.drawTimer, 250);
index.countrieList()
