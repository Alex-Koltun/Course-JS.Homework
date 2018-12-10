var functional = {
  generateRandomNamber: function() {
    var max = 3;
    var min = 0;
    return Math.floor(Math.random() * (max - min)) + min
  },
  url:'../js/data.json',
  templates:{
    basketTemplate: `<div class="main-item">
        <img class="pizza-image" src="" alt="pizza">
        <label for="size">
          <span>Размер</span>
          <input class="main-item__input size"  value="" name="size"></input>
          <span>см</span>
        </label>
        <label for="cost">
          <span>Цена</span>
          <input class="main-item__input cost" value="" name="cost"></input>
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
  									<select class="selectSize" value="25">
  										<option selected>25</option>
  										<option>35</option>
  										<option>50</option>
  									</select>
  									<label for="cost">
  										<input class="currentCost" name="cost" disabled value=""><span class="currency">byn<span>
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
  calculation: function(basicPrice = 25, coefficientPizza, coefficientSize){
      return Math.round(basicPrice * coefficientPizza * coefficientSize)
  },
  calculatioinCost: function(event) {
    var basicPrice = 20;
    var coefficientPizza = +event.path[2].querySelector('.currentCoefficient').innerText;
    var select = event.path[2].querySelector('.selectSize');
    var currentSize = select.options[select.selectedIndex].value;
    var currentCost =  event.path[2].querySelector('.currentCost');
    var coefficientSize = currentSize/25;

    currentCost.setAttribute('value', functional.calculation(basicPrice, coefficientPizza, coefficientSize))
  },
  calculatioinCostOnLoad: function(currentNode,currentSize, basicPrice, coefficientPizza) {
    var coefficientSize = currentSize/25;
    currentNode.setAttribute('value', functional.calculation(basicPrice, coefficientPizza, coefficientSize))
  },
  putToBasket: function() {
      console.log(basicPrice)
  },

  getPizzaToBasket: function(event) {
    var select = event.path[2].querySelector('.selectSize');
    var currentSize = select.options[select.selectedIndex].value;
    var cost = event.path[2].querySelector('.currentCost').getAttribute(`value`);
    var image = event.path[3].querySelector('img').getAttribute(`src`);

    functional.getCreateFragment(functional.templates.basketTemplate, basketContent);
    document.querySelector('.main-item .pizza-image').src =  image;
    document.querySelector('.size').setAttribute('value', currentSize);
    document.querySelector('.cost').setAttribute('value', cost);
  },
  helloWorld: function(){
    alert(`Hello`)
  },
  data: function(method, currentData) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', false);
    xhr.send();
    if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText );
    } else {
       var currentData = JSON.parse(xhr.responseText);
       for (var i = 0; i < currentData.pizza.length; i++) {
          if(i / 10 >= 1) {
            alert("Привет!")
          }
           functional.putData();

           var imagePizza = document.querySelectorAll('.product-card__picter');
           var namePizza  = document.querySelectorAll('.product-card__head');
           var basicPrice = document.querySelectorAll('.basicPrice');
           var currentCoefficient = document.querySelectorAll('.currentCoefficient');
           var selectSize = document.querySelectorAll('.selectSize');
           var button = mainContent.querySelectorAll('.product-card__buy');
           var currentCost = document.querySelectorAll('.currentCost');

           namePizza[i].innerText = currentData.pizza[i].name;
           imagePizza[i].src = currentData.pizza[i].image;
           currentCoefficient[i].innerText = currentData.pizza[i].coeficient;
           basicPrice.innerText = currentData.basicPrice;

           functional.calculatioinCostOnLoad(currentCost[i], currentData.basicPrice, currentData.pizza[i].size[0], currentData.pizza[i].coeficient)
           selectSize[i].addEventListener('change', functional.calculatioinCost);
           button[i].addEventListener('click', functional.getPizzaToBasket);
         }
     }
  }
}
