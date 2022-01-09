const cars = document.querySelectorAll('#cars')
const result = document.getElementById('result')

fetch('cars.json')
    .then(res => res.json())
    .then(data => {
        for (let key in data.cars) {
            if (data.cars[key].brand) {
                const option = document.createElement('option')
                option.textContent = data.cars[key].brand
                option.value = data.cars[key].brand
                cars[0].append(option)
            }
            cars[0].addEventListener('change', () => {
                cars.forEach((elem) => {
                    const select = elem.options[elem.selectedIndex]
                    if (select.value === data.cars[key].brand) {
                        result.innerHTML = `
                        Тачка: ${data.cars[key].brand} ${data.cars[key].model} <br>
                        Цена: ${data.cars[key].price}$
                        `                    }
                    else if (select.value === '') {
                        result.innerHTML = 'Выбери тачку'
                    }
                })
            })
        }
    })
    .catch(error => {
        console.log(error.message);
    })
