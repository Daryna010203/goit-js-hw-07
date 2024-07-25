// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента(тегу < h2 >) і кількість елементів
//  у категорії(усіх < li >, вкладених у нього).

// На що буде звертати увагу ментор при перевірці:

// Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
// У консолі має бути виведено наступне повідомлення:

const retrieveCategories = document.querySelector("#categories");
console.log(`Number of Categories: ${retrieveCategories.childElementCount}`);
const listOfCategories = retrieveCategories.children; 

const retrieveListOfCategories = [...listOfCategories];

retrieveListOfCategories.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.childElementCount}`);
    element.querySelector("h2").classList.add("js-item-title");
    const addListClasses = element.querySelector("ul");
    addListClasses.classList.add("js-categories-iteam-list"); 
    
    const retrieveListOfItem = addListClasses.querySelectorAll("li");
    const arreyListOfItem = [...retrieveListOfItem];
    arreyListOfItem.map(el => el.classList.add("js-iteam-list"));
 });





















