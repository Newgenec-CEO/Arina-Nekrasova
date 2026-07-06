# CONTEXT_AI — контекст проекта для AI

Файл для передачи контекста между сессиями. **После каждого изменения в проекте добавлять запись в раздел «Журнал изменений».**

---

## Проект

**Сайт-портфолио / визитка детского психолога — Арина Некрасова**

- Тип: одностраничный SPA (без роутинга)
- Язык: русский
- Локация: г. Дмитров, Московская область
- Стек: React 18 + Vite 6 + Tailwind CSS 4 + lucide-react

---

## Исходные материалы

| Папка / файл | Назначение |
|---|---|
| `Reference/` | Демо-сайт из Figma Make (Арина Соколова) — эталон дизайна и вёрстки |
| `REFERENCE_ANALYSIS.md` | Анализ Reference: структура, дизайн-система, сборка |
| `CV/Резюме_Арина_Некрасова_2026.md` | Источник текстового контента |
| `Photo/` | Исходные фотографии |
| `public/photos/` | Копии фото для сайта |

---

## Что сделано (initial summary)

### 1. Анализ Reference
- Проанализирована папка `Reference` (Figma Make export)
- Создан `REFERENCE_ANALYSIS.md` с описанием структуры, дизайн-системы, стека и ограничений демо

### 2. Создан рабочий сайт в корне проекта
На основе Reference и резюме Арины Некрасовой развёрнут production-ready проект:

**Созданные файлы и папки:**
```
Site/
├── index.html
├── package.json, package-lock.json
├── vite.config.ts, tsconfig.json, tsconfig.node.json
├── postcss.config.mjs
├── .gitignore
├── README.md
├── public/photos/          ← 11 фото из Photo/
└── src/
    ├── main.tsx
    ├── vite-env.d.ts
    ├── app/App.tsx         ← весь UI (~800 строк)
    └── styles/
        ├── index.css
        ├── fonts.css
        ├── tailwind.css
        └── theme.css
```

### 3. Контент и медиа
- Имя заменено: Соколова → **Некрасова**
- Тексты взяты из `CV/Резюме_Арина_Некрасова_2026.md`:
  - Hero, Обо мне, Принципы работы, Таймлайн опыта, Форматы работы, Контакты
- Фотографии заменены на локальные из `Photo/`:
  - Hero: `portrait_0_main.jpg`
  - Обо мне: `portrait_1.jpg`
  - Галерея: `portrait_2` … `portrait_10`, `portait_7`, `portait_8`

### 4. Отличия от Reference
- Убраны неиспользуемые зависимости (shadcn/ui, MUI, react-router и др.) — оставлен минимальный стек
- Добавлено мобильное меню (бургер)
- Убран `noindex, nofollow` — сайт готов к публикации
- Контакты: локация + форма (без выдуманных телефонов/email)
- Убрано «бесплатная консультация» — в резюме не было

### 5. Секции сайта
Nav → Hero → Обо мне → Подход → Опыт → Галерея → Формат работы → Контакт → Footer

### 6. Дизайн-система (сохранена из Reference)
- Цвета: sage `#8B9A7D`, taupe `#C9A88F`, cream `#FAF6F1`, warm `#F3EDE5`, charcoal `#2D2D2D`
- Шрифты: Plus Jakarta Sans (заголовки), Lato (текст)
- Max-width: `max-w-6xl` (1152px)

### 7. Сборка
- `npm install` — установка зависимостей
- `npm run dev` — dev-сервер → http://localhost:5173/
- `npm run build` — production-сборка в `dist/`
- Сборка проверена успешно

---

## Ключевые файлы для правок

| Задача | Файл |
|---|---|
| Тексты, секции, логика UI | `src/app/App.tsx` |
| Цвета, типографика, токены | `src/styles/theme.css` |
| Шрифты | `src/styles/fonts.css` |
| SEO, title, meta | `index.html` |
| Фотографии | `public/photos/` |
| Зависимости, скрипты | `package.json` |

---

## Команды

```powershell
# Запуск
cd "C:\Users\Vyacheslav\Documents\Arina Project\Site"
npm run dev
# → http://localhost:5173/

# Остановка (в том же терминале)
Ctrl + C

# Принудительная остановка, если Ctrl+C не сработал
Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }

# Сборка
npm run build
npm run preview
```

---

## Журнал изменений

> **Правило:** после каждого изменения в проекте добавлять новую запись сверху (новые — выше, старые — ниже).

### 2026-07-06 — Initial: создание сайта

- Проанализирован `Reference/`, создан `REFERENCE_ANALYSIS.md`
- Создан сайт-портфолио Арины Некрасовой в корне проекта
- Контент из `CV/Резюме_Арина_Некрасова_2026.md`
- Фото из `Photo/` → `public/photos/`
- Минимальный стек (React + Vite + Tailwind + lucide-react)
- Добавлено мобильное меню
- Сборка `npm run build` — успешно
- Создан `README.md`, `.gitignore`

### 2026-07-06 — REFERENCE_ANALYSIS.md возвращён в git

- `REFERENCE_ANALYSIS.md` убран из `.gitignore` — файл будет в репозитории для будущего анализа/адаптации проекта

### 2026-07-06 — Обновлён .gitignore

- В `.gitignore` добавлены папки и файлы, не относящиеся к сайту: `Reference/`, `Photo/`, `CV/`, `terminals/`

### 2026-07-06 — Создан CONTEXT_AI.md

- Добавлен файл контекста для AI с initial summary и журналом изменений

---

## Заметки для AI

1. Папка `Reference/` — только эталон, не редактировать при правках сайта
2. Исходные фото — в `Photo/`, рабочие копии — в `public/photos/`
3. При замене фото обновлять пути в `App.tsx` (константы `HERO_IMG`, `ABOUT_IMG`, массив `GALLERY`)
4. Форма контакта — клиентская заглушка, бэкенда нет
5. Файлы `portait_7.jpg` и `portait_8.jpg` — опечатка в имени (сохранена как в исходной папке `Photo/`)
6. **После каждой правки — запись в «Журнал изменений» этого файла**