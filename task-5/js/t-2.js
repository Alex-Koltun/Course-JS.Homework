var task2 = {
  staff: [
      {name:"Петр Петрович", payment: 700, department:"бухгалтерия", age: 52},
      {name:"Петр Адамов", payment: 1700, department:"разработка", age: 22},
      {name:"Ваня Иван", payment: 800, department:"разработка", age: 32},
      {name:"Крис Бойл", payment: 2700, department:"разработка", age: 29},
      {name:"Анжей Крок", payment: 1500, department:"разработка", age: 27},
      {name:"Иван Береза", payment: 1200, department:"разработка", age: 25},
      {name:"Константин Дервиш", payment: 2300, department:"администрация", age: 42},
      {name:"Петр Колинка", payment: 2700, department:"администрация", age: 49},
      {name:"Арьян Кундыш", payment: 2000, department:"разработка", age: 38},
      {name:"Петр Дудь", payment: 1700, department:"маркетинг", age: 32},
      {name:"Анна Коришка", payment: 700, department:"маркетинг", age: 21},
      {name:"Ламбада Ивановна", payment: 900, department:"бухгалтерия", age: 41},
      {name:"Наталья Петрова", payment: 700, department:"администрация", age: 32},
    ],
    departName:['бухгалтерия','разработка','администрация','маркетинг'],
    callDepartment: function(departName) {
      departmentArray = [],
      task2.staff.forEach(function(item, i, staff){
        if(departName === item.department) {
            departmentArray.push(item)
          }
        })

      console.log('Название департамента - ' + departName)
      task2.middlePayments(departmentArray)
      task2.middleAge(departmentArray)
      task2.bestWorker(departmentArray)
    },
    middlePayments: function(departmentArray) {
      var middle = departmentArray.reduce(function(sum = 0, current, i, departmentArray) {
        return sum + current.payment
      }, 0)/(departmentArray.length)

      console.log('Средняя зарплата: ' + Math.floor(middle) + ' BYN')
    },
    middleAge: function(departmentArray) {
      var middle = departmentArray.reduce(function(sum = 0, current, i, departmentArray) {
        return sum + current.age
      }, 0)/(departmentArray.length)

      console.log('Средний возраст: ' + Math.floor(middle) + ' лет')
    },
    bestWorkerNames: {
      payment:[],
      name:[],
    },
    bestWorker: function(departmentArray) {
      var bestPayments;
      var max = departmentArray[0].payment;

      departmentArray.forEach(function(item, i, departmentArray){
          if(departmentArray[i].payment >= max) {
           max = departmentArray[i].payment
           bestPayments = departmentArray[i].name
           task2.bestWorkerNames.payment.push(departmentArray[i].payment)
           task2.bestWorkerNames.name.push(bestPayments)
         }
       })
      console.log('Самый высокооплачиваемый сотрудник: ' + bestPayments)
    },
    bestWorkerMiddlePayments: function(array){
      var middle = array.reduce(function(sum = 0, current, i, array) {
        return sum + current
      }, 0)/(array.length)

      console.log('Средняя зарплата: ' + Math.floor(middle) + ' BYN')
    },
    innerStaff: function(departName){
      for(var i = 0; i < departName.length; i++){
        task2.callDepartment(departName[i])
      }
    }
}

task2.innerStaff(task2.departName)
task2.bestWorkerMiddlePayments(task2.bestWorkerNames.payment);
