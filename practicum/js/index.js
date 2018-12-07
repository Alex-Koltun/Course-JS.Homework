var functional = {
  generateRandomNamber: function() {
    var max = 3;
    var min = 0;
    return Math.floor(Math.random() * (max - min)) + min
  },
  url:'../js/data.json',
  templates:{
    basketTemplate: `
      <div class="main-item">
        <img class="pizza-image" src="" alt="pizza">
        <label for="size">
          <span>Размер</span>
          <input class="main-item__input" value="" name="size"></input>
          <span>см</span>
        </label>
        <label for="cost">
          <span>Цена</span>
          <input class="main-item__input" value="" name="cost"></input>
          <span>BYN</span>
        </label>
      </div>`,
      productCardTemplate: `<div class="product-card">
  				<div class="product-card__content ">
  						<div class="product-card__picter-box">
  								<img class="product-card__picter" src="" alt="photo">
  						</div>
  						<div class="product-card__text">
  								<h3 class="product-card__head"></h3>
  								<p class="product-card__link"></p>
  									<span class="hidden currentCoefficient"></span>
  									<span class="hidden basicPrice"></span>
  									<select class="selectSize">
  										<option>25</option>
  										<option>35</option>
  										<option>50</option>
  									</select>
  									<label for="cost">
  										<input class="currentCost" name="cost" disabled value="выберите размер"><span class="currency">byn<span>
  									</label>
  									<div class="product-card__icons-box">
  											<button class="product-card__buy">Купить</button>
  									</div>
  						</div>
  				</div>
  		</div>`
  },
  getCreateFragment: function(template, fatherNode) {
    var range = document.createRange();
    var fragment = range.createContextualFragment(template);
    fatherNode.appendChild(fragment);
  },
  putData:  function() {
      var number = functional.generateRandomNamber();
      // var currentObj = data.pizza[number];

      functional.getCreateFragment(functional.templates.productCardTemplate, mainContent);
  },
  showBlock: {
            show: function (show) {
                show.classList.remove('hidden');
            },
            hidden : function(hidden){
                hidden.classList.add('hidden');
            }
  },
  calculatioinCost: function(event) {
    var basicPrice = 20;
    var coefficientPizza = +event.path[2].querySelector('.currentCoefficient').innerText;
    var select = event.path[2].querySelector('.selectSize');
    var currentSize = select.options[select.selectedIndex].value;
    var currentCost =  event.path[2].querySelector('.currentCost');
    var coefficientSize = currentSize/25;

    function calculation (basicPrice = 25, coefficientPizza, coefficientSize) {
                                  return Math.round(basicPrice * coefficientPizza * coefficientSize)
                          };
    currentCost.setAttribute('value', calculation(basicPrice, coefficientPizza, coefficientSize))
  },
  putToBasket: function() {
      console.log(basicPrice)
  },

  getPizzaToBasket: function(event) {
    var select = event.path[2].querySelector('.selectSize');
    var currentSize = select.options[select.selectedIndex].value;
    var cost = event.path[2].querySelector('.currentCost').getAttribute(`value`);
    var image = event.path[3].querySelector('img').getAttribute(`src`);

    functional.getCreateFragment(functional.basketTemplate, basketContent)
  },
  helloWorld: function(){
    alert(`Hello`)
  },
  data: {function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        }
        else {
          onError(xhr.response);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = 1000;
      return xhr;
    },
  backend: {
    save: function (data, onLoad, onError) {
      var request = setupXhrRequest(onLoad, onError);

      request.open('POST', );
      request.send(data);s
    },
    load: function (onLoad, onError) {
      var request = setupXhrRequest(onLoad, onError);

      request.open('GET', SERVER_URL + '/data');
      request.send();
    }
  }
  }
}
