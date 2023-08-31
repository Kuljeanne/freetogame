# Бэкенд для хостинга статики и API для инкапсуляции внешних запросов на Node.JS

## Запуск приложения

Рекомендуется использование пакетного менеджера npm

Инициализация проекта 

```bash
npm install
```

Запуск сервера по адресу http://localhost:3000/

```bash
npm run start
```

## Использование

Пример запроса игры по id: http://localhost:3000/api/game/540

Пример списка игр: http://localhost:3000/api/games

Фильтры передаются в query: http://localhost:3000/api/games?platform=browser&category=mmorpg&sort-by=release-date 
