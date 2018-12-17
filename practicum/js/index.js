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
              	<h3 class="product-card__head"></h3>
  						<div class="product-card__picter-box">
  								<img class="product-card__picter" src="" alt="photo">
  						</div>
  						<div class="product-card__text">
  								<p class="product-card__link">
                    <ul class='product-card__link-item'></ul>
                  </p>
  									<span class="hidden currentCoefficient"></span>
  									<span class="hidden basicPrice"></span>
                    <span class="hidden category"></span>
  									<select class="selectSize" value="25>
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
    // pageBroduct:``
  },
  getCreateFragment: function(template, fatherNode) {
    var range = document.createRange();
    var fragment = range.createContextualFragment(template);

    fatherNode.appendChild(fragment);
  },
  putTemplate:  function(template, fatherNode) {
        functional.getCreateFragment(functional.templates.productCardTemplate, fatherNode);
  },
  createProductPage: function(fatherNode,node,className){
    var contentBox =  document.createElement(node);
    contentBox.classList.add(className);
    fatherNode.appendChild(contentBox)
  },
  showBlock: function (show) {
                show.classList.toggle('hidden');
            },
  changePage: function(node, currentPage) {
            var pageList = node.children

            for(var i = 0; i < pageList.length; i++ ){
              pageList[i].style.display = 'none'
            }

            currentPage.style.display = 'flex'
  },
  // {
  //             showPage:  function(page) {
  //                           page.classList.add('.active');
  //                         },
  //             hiddenPage: function(page) {
  //                         page.classList.remove('.active')
  //                       },
  // },

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
  calculationTotal: function(nodeList, totalNode){
    var reducer = function (accumulator, currentValue){
      accumulator += currentValue;
    }
    var list = nodeList
    var total = 0;
     for(var i = 0; i < list.length; i++){
       var currentValue = +list[i].value
       total = total + currentValue
     }

    totalNode.innerText = total
  },
  putToBasket: function() {
      console.log(basicPrice)
  },
  getPizzaToBasket: function(event) {
    var select = event.path[5].querySelector('.selectSize');
    var currentSize = select.options[select.selectedIndex].value;
    var cost = event.path[5].querySelector('.currentCost').getAttribute(`value`);
    var image = event.path[5].querySelector('img').getAttribute(`src`);

    functional.getCreateFragment(functional.templates.basketTemplate, basketContent);
    document.querySelector('.main-item .pizza-image').src =  image;
    document.querySelector('.size').setAttribute('value', currentSize);
    document.querySelector('.cost').setAttribute('value', cost);
  },
  putDataForTemplate: function(obj){
    var contentBox = 0;
    mainContent.innerHTML = " "
    paginationBox.innerHTML = " "
    for (var i = 0; i < obj.pizza.length; i++) {
      var currentNumber = (i / 10);
       if(Number.isInteger(currentNumber)) {
         functional.createProductPage(mainContent,'div','content-item')
          contentBox = mainContent.children[0 + currentNumber];
          var contentClassName = contentBox.className;
          contentBox.classList.add('hidden');
          contentBox.setAttribute('id', currentNumber + 1);
          functional.createProductPage(paginationBox,'button','pagination-button')
          var button = paginationBox.children[0 + currentNumber];
           button.innerText = currentNumber + 1;
         }
        functional.putTemplate(functional.templates.productCardTemplate, contentBox);
      }

      var imagePizza = document.querySelectorAll('.product-card__picter');
      var namePizza  = document.querySelectorAll('.product-card__head');
      var basicPrice = document.querySelectorAll('.basicPrice');
      var currentCoefficient = document.querySelectorAll('.currentCoefficient');
      var selectSize = document.querySelectorAll('.selectSize');
      var button = mainContent.querySelectorAll('.product-card__buy');
      var currentCost = document.querySelectorAll('.currentCost');
      var currentСategory = document.querySelectorAll('.category');
      var ingredient = document.querySelectorAll('.product-card__link-item');

      for (var i = 0; i < obj.pizza.length; i++) {
        namePizza[i].innerText = obj.pizza[i].name;
        imagePizza[i].src = obj.pizza[i].image;
        currentCoefficient[i].innerText = obj.pizza[i].coeficient;
        currentСategory[i].innerText = obj.pizza[i].category;
        basicPrice.innerText = obj.basicPrice;

        obj.pizza[i].ingredient.forEach(function(currentItem, l){
          li =  document.createElement('li');
          li.innerText = currentItem
          ingredient[i].appendChild(li)
        })

        obj.pizza[i].size.forEach(function(item, g) {
                  option = document.createElement('option');
                  option.innerText = item;
                  selectSize[i].appendChild(option)
        })

        functional.calculatioinCostOnLoad(currentCost[i], obj.basicPrice, obj.pizza[i].size[0], obj.pizza[i].coeficient)
        selectSize[i].addEventListener('change', functional.calculatioinCost);
        button[i].addEventListener('click', functional.getPizzaToBasket);
       }
       mainContent.children[0].classList.toggle('hidden')
  },
  data: function(method, currentData) {
      var xhr = new XMLHttpRequest();

      xhr.open('GET', 'data.json', false);
      xhr.send();
      if (xhr.status != 200) {
      console.log( xhr.status + ': ' + xhr.statusText );
      } else {
               var currentData = JSON.parse(xhr.responseText);
               var selectFilterCategory = document.querySelector('.controll-panel__filtre-box > select.categoryPizza')
               var selectFilterSize = document.querySelector('.controll-panel__filtre-box > select.size')

              functional.putDataForTemplate(currentData)

                currentData.categoryList.forEach(function(item, i) {
                            option = document.createElement('option');
                            option.innerText = currentData.categoryList[i];
                            selectFilterCategory.appendChild(option)
                  })

                currentData.size.forEach(function(item, i) {
                            option = document.createElement('option');
                            option.innerText = currentData.size[i];
                            selectFilterSize.appendChild(option)
                  })
                 window.currentData = currentData
  }
 },
  filter: function(size, category) {
    var currentSize, currentCategory;
    var result = {}
    var result = Object.assign({},window.currentData)
    result.pizza = [];

    window.currentData.pizza.map(function(item){
                        selectSize  = item.size;
                        currentCategory = item.category;

                        selectSize.forEach(function(it){
                          if(it == size) {
                            currentSize  = true
                          }
                        })
                        if(size ==="любой" && category === "любая"){
                          functional.putDataForTemplate(window.currentData)
                          return
                        } else if (( currentSize === true || size ==="любой") && (category === "любая" || category === currentCategory)) {
                            result.pizza.push(item)
                            }
                          })
  if(result.pizza.length >= 1){
    functional.putDataForTemplate(result)
  }
 }
}
