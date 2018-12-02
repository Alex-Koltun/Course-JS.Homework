
// functional.calculatioinCost();

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
