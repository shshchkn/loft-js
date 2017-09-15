/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {
    return new Promise((resolve) => {
        seconds = 1000;
        setTimeout(() => {
            resolve();
        }, seconds);
    });
}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', true);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            let towns = xhr.response;

            towns.sort((prev, next) => {
                if (prev.name > next.name) {
                    return 1;
                }
                if (prev.name < next.name) {
                    return -1;
                }
            });

            resolve(towns);
        });
        xhr.send();
    });
}

export {
    delayPromise,
    loadAndSortTowns
};