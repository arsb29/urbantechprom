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

**Автоматический деплой (GitHub Actions)**

1. Загрузите код на GitHub
2. Перейдите в **Settings → Pages**
3. В разделе "Build and deployment":
   - Source: **GitHub Actions**
4. При каждом `push` в `main` ветку сайт будет автоматически обновляться

Сайт будет доступен по адресу: `https://username.github.io/urbantechprom`

