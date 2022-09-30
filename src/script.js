alert('Завдання 1');
let firstRow = prompt('Введіть перше речення');
let secondRow = prompt('Введіть друге речення');
let row = prompt('Яку літеру шукати?', 'а');

function getRow(firstRow, secondRow) {
    first = 0
    second = 0
    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) == row){
            first++
        }
    }
    for (var i = 0; i < secondRow.length; i++) {
        if (secondRow.charAt(i) == row){
            second++
        }
    }
    if (first > second){
        return firstRow;
    }
    else if (first < second){
        return secondRow;
    }
    else{
        return 'Рівна кількість літер "' + row + '"!'
    }
}

row = getRow(firstRow, secondRow);
console.log(row);
alert(row);

alert('Завдання 2')
let phone = prompt('Введіть телефон')
function formattedPhone(phone) {
    if (phone.length == 10){
        phone = '+7' + phone
    }
    else if (phone.length == 11){
        if(phone.charAt(0) == 7){
            phone = '+' + phone
        }
        else if(phone.charAt(0) != 7){
            phone = '+7' + phone.substring(1)
        }
    }
    else if(phone.length != 12 || phone.charAt(0) != '+' || phone.charAt(1) != 7){
        return 'формат функции неверный'
    }

    let num = '';
    for (let i = 0; i < phone.length; i++) {
        if (i == 2){
            num += " ("
        }
        else if(i == 5){
            num += ") "
        }
        else if(i == 8){
            num += "-"
        }
        else if(i == 10){
            num += "-"
        }
        num += phone.charAt(i)
    }
    return num;
}
phone = formattedPhone(phone);
console.log(phone);
alert(phone);