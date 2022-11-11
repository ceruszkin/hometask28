const express = require("express");

const app = express();

/*
 * План для построения интернет магазина (что нужно добавить)
 * 
 * Базовые запросы для интерфейса магазина:
 * - Получение данных пользователя по его логину и паролю (использовать POST  запрос)
 * - Получение данных о всех товарах (использовать GET запрос)
 * - Получение данных об одном товаре (Использовать GET запрос)
 * Базовые запросы для интерфейса админки магазина:
 * - Удаление товара
 * - Добавление товара
 * - Редактирование товара
 * - Выводить список пользователей
 * - Удалять пользователя
 * - Редактировать пользователя
 * Дополнительно таблица истории купленных товаров
 * - Выводить историю
 * 
 * Сделать формы на безовом маршруте, для теста пост запросов
 * 
 * ДЗ 28 урок
 * Прописать все базовые (указанные выше) маршруты
 */

app.get(
    '/',
    function(request, response){
        //Посылаем ответ от сервера
        ///console.log(request.query.test)
        //Декомпозиция объекта
        const {test, name} = request.query
        response.send(
            `
                <h1>
                    1 Hello World form Nordic IT
                </h1>
                <h2>
                    hello 2
                <h2>
                <h3>
                    Поле test: ${test}
                <h3>
                <h3>
                    Поле name: ${name}
                <h3>
                <form action='/get_all_good' method='post'>
                    <input />
                    <input type='submit'/>
                </form>
            `
        )
    }
)

app.get('/get_all_good', function(request, response){
    response.send(
        `
            Тут получаем все товары
        `
    )
})

app.get('/del_good', function(request, response){
    response.send(
        `
            Удалить товар
        `
    )
})

app.get('/add_good', function(request, response){
    response.send(
        `
            Добавить товар
        `
    )
})

app.get('/edit_good', function(request, response){
    response.send(
        `
            Редактировать товар
        `
    )
})

app.get('/user_list', function(request, response){
    response.send(
        `
            Список пользователей
        `
    )
})

app.get('/del_user', function(request, response){
    response.send(
        `
            Удалить пользователя
        `
    )
})

app.get('/edit_user', function(request, response){
    response.send(
        `
            Редактировать пользователя
        `
    )
})

app.listen(3000);