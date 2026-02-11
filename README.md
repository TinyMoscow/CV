# trs-cv

Короткий одностраничный сайт-резюме (CV) на React.

## Окружения и домены

- **Локально (dev):** `http://localhost:3000` (`npm start`)
- **Production (serve/PM2):** `HOST=0.0.0.0`, `PORT=8080` (см. `ecosystem.config.js`)
- **Публичный домен:** не зафиксирован в репозитории (нужно задать в инфраструктурной документации)

## Стек и архитектура

- **Frontend:** React 18, React Router 6, Create React App (`react-scripts`)
- **Тесты:** React Testing Library + Jest DOM
- **Сборка/доставка:** `react-scripts build` + `serve -s build`
- **Процессы в проде:** PM2 (`ecosystem.config.js`, app name: `trs`)
- **Структура:**
  - `src/` — компоненты и стили
  - `public/` — статические ассеты
  - `tasks/` — карточки задач документации
  - `docs/` — подробная документация и архив

## Навигация по документации

- Реестр задач: [TODO.md](./TODO.md)
- Индекс документации: [docs/README.md](./docs/README.md)
