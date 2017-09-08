/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрощено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {
    let docH = document.body.clientHeight,
        docW = document.body.clientWidth,
        size = ((Math.random()*100) + 100).toFixed(),
        el = document.createElement('div');

    el.className = 'draggable-div';
    el.setAttribute('draggable', 'true');

    el.style.position = 'absolute';
    el.style.left = Math.floor(Math.random() * (docW - size)).toFixed() + 'px';
    el.style.top = Math.floor(Math.random() * (docH - size)).toFixed() + 'px';
    el.style.width = Math.floor(Math.random() * size).toFixed() + 'px';
    el.style.height = Math.floor(Math.random() * size).toFixed() + 'px';
    el.style.backgroundColor = 'rgb('+ Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';

    return el;
}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {
    function start(e) {
        e.target.style.opacity = '0.3';
    }

    function over(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function end(e) {
        e.target.style.opacity = '1';
        e.target.style.top = e.clientY + 'px';
        e.target.style.left = e.clientX + 'px';
    }

    target.addEventListener('dragstart', start);
    target.addEventListener('dragover', over);
    target.addEventListener('dragend', end);
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    let div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации d&d
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
