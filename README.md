# UrbanTechProm

## Установка

```bash
npm install
```

## Локальный запуск

```bash
npm run dev
```

Сайт будет доступен по адресу `http://localhost:3000`

## Сборка для продакшена

```bash
npm run build
npm start
```

Статические файлы будут в папке `out/`

## Выложить на GitHub Pages

**Способ 1: Автоматический деплой (GitHub Actions)**

1. Загрузите код на GitHub
2. Перейдите в Settings → Pages
3. Выберите источник: Deploy from a branch
4. Ветка: `gh-pages`, папка: `/ (root)`
5. При каждом `push` в `main` ветку сайт будет автоматически обновляться

Сайт будет доступен по адресу: `https://username.github.io/urbantechprom`

**Способ 2: Ручной деплой**

```bash
npm run deploy
```

**Требования:**
- Репозиторий на GitHub
- Установленный Git
