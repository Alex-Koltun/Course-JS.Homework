(function(){
  var span = document.querySelector('.change');

  var hidden = function(item){
    item.classList.toggle('hidden')
  }

  var checkbox = document.querySelector('#check');
  
  checkbox.addEventListener('change', function(){
    hidden(span)
  });
})()
