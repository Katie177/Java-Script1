'use strict';
/**
 * Функция возвращает верный падеж слова "рубль"
 * @param   {number} num количество рублей
 * @returns {string}   слово "рубль" в правильном падеже
 */
function getCase(num) {
    let beforeLastDigit = getDigitBeforeLastDigit(num);
    if (beforeLastDigit == 1) {
        return "рублей"
    }
    num = String(num);
    let lastNumber = Number(num.charAt(num.length - 1));
    switch (lastNumber) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return "рублей";
        case 1:
            return "рубль";
        case 2:
        case 3:
        case 4:
            return "рубля";  
    }
}
/**
 * Функция возвращает предпоследнюю цифру числа, если оно введено, в противном случае null.
 * @param   {number}   num 
 * @returns {number/null} 
 */
function getDigitBeforeLastDigit(num) {
    num = String(num);
    let digit = num.charAt(num.length - 2);
    if (digit !== "") {
        return Number(digit);
    }
    return null;
}
let money = parseInt(prompt("Укажите сумму в рублях, которую вы хотите зачислить на счет"));
alert(`Ваша сумма ${money} ${getCase(money)} успешно зачислена.`)