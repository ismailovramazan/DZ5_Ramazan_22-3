function coup(b){
    let a = '';
    for (i=0; i < b.length;i++){
        a += b[(b.length - 1)  -i]
    }
    return a
}

console.log(coup('java script asssssaaalllllaaaammmmm aleikum'))

var numbers = [22,42,12,12,12345565,134312,1223,2121,122];

function general(...i) {
  return numbers.reduce((first, second) => first + second) / numbers.length;
}
console.log(general(numbers))
//Домашнее Задание:
// -Написать функцию переворота строки (использовать reverse нельзя, нужно самим прописать логику). Например: "привет" -> "тевирп" и так далее.
// -написать функцию, которая принимает неограниченное кол-во чисел и возвращает их среднюю арифметическую
//  ⁃ повторите все пройденные темы
