
// functional.calculatioinCost();
var customerBasketIcon = document.querySelector('.header__basket-icon');
var customerBasket = document.querySelector('.basket-box');
var filterControl = document.querySelector('.controll-panel__filtres');
var filterBox = document.querySelector('.controll-panel__filtre-box');
var mainContent = document.querySelector('.main__content');
var paginationBox = document.querySelector('.pagination-box')
var basketContent = customerBasket.querySelector('.main-form');
var searchButton = document.querySelector('.search-button');


// var span = document.querySelector('.change');
// var hidden = function(item){
//   item.classList.toggle('hidden')
// }

customerBasketIcon.addEventListener('click', function(event){
  functional.showBlock(customerBasket);
  var pizzaCostChooze = basketContent.querySelectorAll('.main-item__input.cost');
  var totalCost = document.querySelector('.totalCost');
  functional.calculationTotal(pizzaCostChooze, totalCost)
})

filterControl.addEventListener( 'click',  function(event) {
  functional.showBlock(filterBox)
});

document.addEventListener('load',  functional.data('GET','data.json'))
var buttonCollection = paginationBox.querySelectorAll('.pagination-button');

for(var i = 0; i < buttonCollection.length; i++) {
  buttonCollection[i].addEventListener('click', function(evt){
    var currentPage = evt.target.innerText;
      evt.target.removeAttribute('disabled')
    // if(!evt.target.hasAttribute('disabled')) {
    //   evt.target.setAttribute('disabled', 'disabled')
    // } else {}

    // functional.changePage.showPage(mainContent.children[currentPage - 1]);
    functional.changePage(mainContent, mainContent.children[currentPage - 1]);
  })
}

searchButton.addEventListener('click', function(evt){
  evt.preventDefault();
  var select = searchButton.parentNode.querySelector('.controll-panel__filtre-box > select.size')
  var checkSize = select.options[select.selectedIndex].value;
  var category = searchButton.parentNode.querySelector('.controll-panel__filtre-box > select.categoryPizza');
  var checkCategory = category.options[category.selectedIndex].value;

  functional.filter(checkSize, checkCategory)
})


//
// document.addEventListener('load', (function(){
//   for (var i = 0; i < 10; i++) {
//     functional.putData();
//     var selectSize = document.querySelectorAll('.selectSize');
//     var button = mainContent.querySelectorAll('.product-card__buy');
//
//     selectSize[i].addEventListener('change', functional.calculatioinCost);
//     button[i].addEventListener('click', functional.getPizzaToBasket);
//   }
// })())


  // var checkbox = document.querySelector('#check');
  // checkbox.addEventListener('change', function(){
  //   hidden(span)
  // });
  //






















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
