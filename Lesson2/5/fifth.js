'use strict';
/**
 * Функция сложения a + b
 * @param   {number} a 
 * @param    {number} b 
 * @returns  {number}
 */
function addition (a, b) {
    return (a + b);
}
/**
 * Функция вычитания a - b
 * @param   {number} a 
 * @param    {number} b 
 * @returns  {number}
 */
function subtraction (a, b) {
    return (a - b);
}
/**
 * Функция умножения a*b
 * @param   {number} a 
 * @param    {number} b 
 * @returns  {number}
 */
function multiplication (a, b) {
    return (a * b);
}
/**
 * Функция деления a / b
 * @param   {number} a 
 * @param    {number} b 
 * @returns  {number}
 */
function division (a, b) {
    return (a / b);
}
/**
 * [[Description]]
 * @param   {number} arg1      
 * @param   {number} arg2      
 * @param   {string} operation "+","-", "*", "/"
 * @returns {number} 
 */
function mathOperation (arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        default:
            throw new Error ("Операция: " + operation + " не предусмотрена")
    }
}

alert (mathOperation(5, 7, "+"));
alert (mathOperation(5, 7, "-"));
alert (mathOperation(5, 7, "*"));
alert (mathOperation(5, 7, "/"));
alert (mathOperation(5, 7, "Lorem"));