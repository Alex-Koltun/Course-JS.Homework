var functional = {
  generateRandomNamber: function() {
    var max = 3;
    var min = 0;
    return Math.floor(Math.random() * (max - min)) + min
  },
  showBlock: {
            show: function (show) {
                show.classList.remove('hidden');
                // target.addEventListener('click'; functional.showBlock.hidden())
            },
            hidden : function(hidden){
                hidden.classList.add('hidden');
            }
  },
  calculatioinCost: function(event) {
    var basicPrice = data.basicPrice;
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
  getCreateFragment: function(template, fatherNode) {
    var range = document.createRange();
    var fragment = range.createContextualFragment(template);
    fatherNode.appendChild(fragment);
  },
  getPizzaToBasket: function(event) {

    var select = event.path[2].querySelector('.selectSize');
    var currentSize = select.options[select.selectedIndex].value;
    var cost = event.path[2].querySelector('.currentCost').getAttribute(`value`);
    var image = event.path[3].querySelector('img').getAttribute(`src`);

    var basketTemplate = `
      <div class="main-item">
        <img class="pizza-image" src="${image}" alt="pizza">
        <label for="size">
          <span>Размер</span>
          <input class="main-item__input" value="${currentSize}" name="size"></input>
          <span>см</span>
        </label>
        <label for="cost">
          <span>Цена</span>
          <input class="main-item__input" value="${cost}" name="cost"></input>
          <span>BYN</span>
        </label>
      </div>`
    functional.getCreateFragment(basketTemplate, basketContent)
  },
  helloWorld: function(){
    alert(`Hello`)
  }
}
