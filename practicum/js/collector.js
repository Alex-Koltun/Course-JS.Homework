
// functional.calculatioinCost();
var customerBasketIcon = document.querySelector('.header__basket-icon');
var customerBasket = document.querySelector('.basket-box');
var filterControl= document.querySelector('.controll-panel__filtres');
var filterBox = document.querySelector('.controll-panel__filtre-box');
var mainContent = document.querySelector('.main__content');
var basketContent = customerBasket.querySelector('.main-form');

customerBasketIcon.addEventListener( 'click',  function(event) {
                  var currentNode = customerBasket;
                  if (currentNode.classList.contains('hidden')) {
                    functional.showBlock.show(currentNode)
                  } else if (!currentNode.classList.contains('hidden')) {
                    functional.showBlock.hidden(currentNode)
                  };
});

filterControl.addEventListener( 'click',  function(event) {
                  var currentNode = filterBox;
                  if (currentNode.classList.contains('hidden')) {
                    functional.showBlock.show(currentNode)
                  } else if (!currentNode.classList.contains('hidden')) {
                    functional.showBlock.hidden(currentNode)
                  };
});

document.addEventListener('load', (function(){
  for (var i = 0; i < 10; i++) {
    functional.putData();
    var selectSize = document.querySelectorAll('.selectSize');
    var button = mainContent.querySelectorAll('.product-card__buy');

    selectSize[i].addEventListener('change', functional.calculatioinCost);
    button[i].addEventListener('click', functional.getPizzaToBasket);
  }
})())





















// for(var j= 0;  j < selectSize.length; j++) {
//   functional.calculatioinCost();
//
// }

// functionalputToBasket();


// //   functional.showBlock.show(event.currentTarget.children[2]);
// // });
// customerBasketIcon.addEventListener( 'click',  function(event) {
//   functional.showBlock.show(event.currentTarget.children[2]);
// });
