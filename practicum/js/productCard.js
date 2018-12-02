(function() {
	function putData() {
		var number = functional.generateRandomNamber();
		var currentObj = data.pizza[number];

		var template = `<div class="product-card">
				<div class="product-card__content ">
						<div class="product-card__picter-box">
								<img class="product-card__picter" src="${currentObj.picter}" alt="photo">
						</div>
						<div class="product-card__text">
								<h3 class="product-card__head">${currentObj.name}</h3>
								<p class="product-card__link">${currentObj.ingridients}</p>
									<span class="hidden currentCoefficient">${currentObj.coefficient}</span>
									<span class="hidden basicPrice">${data.basicPrice}</span>
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
		</div>`;
		functional.getCreateFragment(template, mainContent);
	}

	for (var i = 0; i < 10; i++) {
		putData();
		var selectSize = document.querySelectorAll('.selectSize');
		var button = mainContent.querySelectorAll('.product-card__buy');

		selectSize[i].addEventListener('change', functional.calculatioinCost);
		button[i].addEventListener('click', functional.getPizzaToBasket);
  }

// 	for (var i = 0; i < 10; i++) {
// 	var node = document.querySelector('.main__content');
// 	var div = document.createElement('div');
// 	div.className = "product-card";
// 	var content = document.createElement('div');
// 	content.className = "product-card__content";
// 	var picterBox = document.createElement('div');
// 	picterBox.className = "product-card__picter-box";
// 	var image = document.createElement('img');
// 	var picterText = document.createElement('div');
// 	picterText.className = "product-card__text";
// 	var head = document.createElement('h3');
// 	head.className = "product-card__head";
// 	head.innerText = "Заголовок"
// 	var cardLink = document.createElement('ul');
// 	cardLink.className = "product-card__link";
// 	var buttonBox = document.createElement('div');
// 	buttonBox.className = "product-card__icons-box";
// 	var button = document.createElement('button');
// 	button.className = "product-card__buy";
// 	button.innerText = "Купить";
// 	// div.style.background = "red";
// 	// div.style.width = "300px";
// 	// div.style.height = "300px";
// 	node.appendChild(div);
// 	div.appendChild(content);
// 	content.appendChild(picterBox);
// 	content.appendChild(picterText);
// 	content.appendChild(buttonBox);
//
// 	picterBox.appendChild(image);
//
// 	picterText.appendChild(head);
// 	picterText.appendChild(head);
// 	picterText.appendChild(cardLink);
//
// 	for(var k = 0; k < 6; k++) {
// 		var linkItem = document.createElement('li');
// 		linkItem.className = "product-card__link-item";
// 		linkItem.innerText = "Мясо";
// 		cardLink.appendChild(linkItem)
// 	};
// 	buttonBox.appendChild(button);
// }

})();

// var cardData;
// var likesNodeList = document.querySelectorAll('.product-card__icon__likes');
// var cardList = document.querySelectorAll('.product-card');
//
// function draw(data) {
// 	var productCardList = document.querySelectorAll('.product-card');
//
// 	Object.keys(data).map(function(cardName, i) {
// 		var card = data[cardName];
//
// 		var picter = productCardList[i].querySelector('.product-card__picter');
// 		var text = productCardList[i].querySelector('.product-card__head');
// 		var linkList = productCardList[i].querySelectorAll('.product-card__link-item a');
// 		var viewNode = productCardList[i].querySelector('.views-number');
// 		var likes = productCardList[i].querySelector('.likes-number');
// 		var iconLikes = productCardList[i].querySelector('.product-card__icon__likes');
//
// 		picter.setAttribute('src', card.url);
// 		text.innerText = card.text;
//
// 		for( var i = 0; i < linkList.length; i++) {
// 			linkList[i].innerText = card.links[i];
// 		}
//
// 		viewNode.innerText = card.viewData;
// 		likes.innerText = card.likes;
// 		iconLikes.setAttribute('id', cardName);
//
// 	});
// }
//
// function clicked(event) {
//   var number = event.currentTarget.querySelector('.likes-number');
//   var newNumber = +number.innerText + 1;
//   var currentCard = event.currentTarget.getAttribute('id');
//
// 	cardData[currentCard].likes = newNumber;
//   number.innerText = newNumber;
//
//   event.currentTarget.removeEventListener('click',clicked);
// 	alert(navigator.userAgent);
// }
//
// for(var k = 0; k < cardList.length; k++) {
//   likesNodeList[i].pxaddEventListener('click',clicked);
// }
//
// $.getJSON("../task/js/data.json", function(json) {
// 	cardData = json;
//   draw(cardData);
// });
