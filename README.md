### Hexlet tests and linter status:
[![Actions Status](https://github.com/Nadezzzhda/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Nadezzzhda/frontend-project-44/actions)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Nadezzzhda_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Nadezzzhda_frontend-project-44)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Nadezzzhda_frontend-project-44&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Nadezzzhda_frontend-project-44)



# Игры разума (Brain Games)

Это набор из пяти консольных игр, созданных в рамках обучения на Хекслете.


## Установка

Для работы игр вам понадобится **Node.js** версии 20 или выше.

1. Склонируйте репозиторий:

   git clone https://github.com/Nadezzzhda/frontend-project-44.git

2. Установите зависимости:

    make install

3. Выполните установку пакета (создание символических ссылок):

    npm link


## Запуск игр

Для запуска любой игры используйте соответствующую команду в терминале:

-- Проверка на четность: brain-even

-- Калькулятор: brain-calc

-- Наибольший общий делитель: brain-gcd

-- Арифметическая прогрессия: brain-progression

-- Простое ли число?: brain-prime



https://asciinema.org/a/9MtaJf8urNXyoJiw -- установка brain-games и пример игры brain-even

https://asciinema.org/a/TOrSeYHso0qGFVsd -- пример игры brain-calc

https://asciinema.org/a/W0SJWRPkBCN9MANy -- пример игры brain-gcd

https://asciinema.org/a/Kt8VsZwYhpp8gUDa -- пример игры brain-progression 

https://asciinema.org/a/blzAy1CC0WlciInU -- пример игры brain-prime







## Make

make install -- установка зависимостей (пакетов / библиотек / программ и т.д.).

make brain-games -- запуск игры Brain Games через node (brain-even, brain-calc и т.д.).

make publish -- публикация пакетa (игры) в npm-репозитории.

make lint -- запуск линтера ESLint.

