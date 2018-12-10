const regular = /[a-zA-Z][a-zA-Z0-9\.\-\_]+@[a-z][a-zA-Z0-9\-\_]*\.[a-z]{2,10}/

function chackEmail(){
  var email = prompt('Введите Email')
  if (regular.test(email)) {
    alert('Это -Email')
  } else  {
    alert('Это не Email')
  }

}

chackEmail()
