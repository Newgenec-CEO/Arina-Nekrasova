# Анализ папки `reference`

Демо-сайт-визитка / портфолио детского психолога **Арины Соколовой**. Экспорт из **Figma Make** (ранее Figma Dev Mode / Make). Оригинальный макет: [Child Psychologist Portfolio Website](https://www.figma.com/design/pbh1K4n2SdJ9pcdGjPNLcT/Child-Psychologist-Portfolio-Website).

---

## 1. Общее описание

| Параметр | Значение |
|---|---|
| Тип | Одностраничный сайт (SPA без роутинга) |
| Язык контента | Русский |
| Назначение | Портфолио / визитка частного детского психолога |
| Состояние | Демо-контент (фиктивные контакты, placeholder-данные) |
| SEO | `noindex, nofollow` в `index.html` |

Сайт состоит из фиксированной навигации и 8 вертикальных секций: Hero, Обо мне, Подход, Опыт, Галерея, Формат работы, Контакт, Footer.

---

## 2. Структура файлов

```
reference/
├── index.html                  # Точка входа HTML
├── package.json                # Зависимости и скрипты
├── vite.config.ts              # Конфигурация Vite + алиасы + Figma asset resolver
├── postcss.config.mjs          # Пустой (Tailwind v4 через Vite-плагин)
├── pnpm-workspace.yaml         # pnpm workspace (монорепо из одного пакета)
├── default_shadcn_theme.css    # Референсная тема shadcn (не подключена)
├── ATTRIBUTIONS.md             # Лицензии shadcn/ui и Unsplash
├── README.md                   # Инструкция запуска
├── guidelines/
│   └── Guidelines.md           # Шаблон правил для AI (пустой)
└── src/
    ├── main.tsx                # Точка входа React
    ├── app/
    │   ├── App.tsx             # Весь UI сайта (~825 строк, монолит)
    │   └── components/
    │       ├── figma/
    │       │   └── ImageWithFallback.tsx   # Fallback для изображений (не используется)
    │       └── ui/                         # 46 компонентов shadcn/ui (не используются)
    └── styles/
        ├── index.css           # Импортирует fonts → tailwind → theme
        ├── fonts.css           # Google Fonts
        ├── tailwind.css        # Tailwind v4 + tw-animate-css
        ├── theme.css           # Дизайн-токены + базовая типографика
        └── globals.css         # Пустой файл
```

**Ключевой вывод по архитектуре:** весь рабочий UI сосредоточен в одном файле `App.tsx`. Библиотека shadcn/ui и десятки зависимостей — стандартный boilerplate Figma Make, в демо-сайте **не задействованы**.

---

## 3. Технологический стек

### Используется в реальном UI

| Технология | Версия | Роль |
|---|---|---|
| React | 18.3.1 (peer) | UI-фреймворк |
| Vite | 6.3.5 | Сборка и dev-сервер |
| Tailwind CSS | 4.1.12 | Утилитарные классы |
| @tailwindcss/vite | 4.1.12 | Интеграция Tailwind с Vite |
| lucide-react | 0.487.0 | Иконки (навигация, контакты, форма) |
| tw-animate-css | 1.3.8 | CSS-анимации (для shadcn) |

### Подключено, но не используется в `App.tsx`

- **shadcn/ui** — 46 компонентов в `src/app/components/ui/`
- **Radix UI** — примитивы для shadcn
- **react-router** 7.13.0 — роутинг не настроен
- **motion** (Framer Motion) — анимации не применяются
- **@mui/material**, **@emotion** — не используются
- **recharts**, **react-hook-form**, **sonner**, **canvas-confetti** и др. — boilerplate

---

## 4. Сборка и запуск

### Скрипты (`package.json`)

```bash
npm i          # или pnpm install
npm run dev    # vite — dev-сервер
npm run build  # vite build — production-сборка
```

### Vite (`vite.config.ts`)

- **Плагины:** `figmaAssetResolver`, `@vitejs/plugin-react`, `@tailwindcss/vite`
- **Алиас:** `@` → `./src`
- **Figma assets:** импорты вида `figma:asset/filename` резолвятся в `src/assets/` (папка assets в проекте отсутствует — изображения идут с Unsplash CDN)
- **assetsInclude:** `.svg`, `.csv`

### CSS-пайплайн

```
main.tsx → styles/index.css
              ├── fonts.css      (Google Fonts)
              ├── tailwind.css   (@import tailwindcss + tw-animate-css)
              └── theme.css      (CSS-переменные + @theme inline + @layer base)
```

PostCSS-конфиг пустой — Tailwind v4 обрабатывается через Vite-плагин, autoprefixer не нужен отдельно.

### pnpm-workspace.yaml

Монорепо из одного пакета с ограничениями: `minimumReleaseAge: 10080` (7 дней), `supportedArchitectures` для linux x64/arm64.

---

## 5. Дизайн-система

### 5.1. Цветовая палитра

Два уровня определения цветов: **CSS-переменные** (shadcn-токены) и **константы в JS** (фактически используются в UI).

#### Основная палитра (используется в `App.tsx`)

| Токен | HEX | Назначение |
|---|---|---|
| `SAGE` | `#8B9A7D` | Primary / акцент / CTA-кнопки |
| `TAUPE` | `#C9A88F` | Декоративные линии, бордеры, годы в таймлайне |
| `CREAM` | `#FAF6F1` | Основной фон секций |
| `WARM` | `#F3EDE5` | Альтернативный фон (подход, галерея) |
| `CHARCOAL` | `#2D2D2D` | Заголовки, тёмная секция контактов |
| `BODY` | `#4A4A4A` | Основной текст |
| `CAPTION` | `#6B6B6B` | Вторичный текст, навигация |
| Placeholder | `#D9CFC3` | Фон под изображениями |

#### CSS-переменные (`theme.css` → `:root`)

Синхронизированы с палитрой выше:

```css
--background: #FAF6F1;
--foreground: #2D2D2D;
--primary: #8B9A7D;
--secondary: #F3EDE5;
--accent: #C9A88F;
--muted-foreground: #6B6B6B;
--border: rgba(201, 168, 143, 0.3);
--radius: 0.625rem; /* также дублируется 0.75rem */
```

Тёмная тема (`.dark`) определена через oklch, но **в приложении не переключается**.

Файл `default_shadcn_theme.css` — стандартная нейтральная тема shadcn, **не импортируется**.

### 5.2. Типографика

| Роль | Шрифт | Подключение |
|---|---|---|
| Заголовки | **Plus Jakarta Sans** | Google Fonts, класс `.font-heading` |
| Основной текст | **Lato** | Google Fonts, `body` в `theme.css` |

**Начертания Plus Jakarta Sans:** 300, 400, 500, 600, 700 (+ italic 300, 500)  
**Начертания Lato:** 300, 400, 700 (+ italic 300, 400)

#### Типографическая шкала (паттерны в UI)

| Элемент | Классы / стили |
|---|---|
| Eyebrow (надзаголовок секции) | `font-heading text-[0.68rem] tracking-[0.24em] uppercase`, цвет SAGE |
| H1 (Hero) | `text-5xl xl:text-6xl font-semibold leading-[1.03]` |
| H2 (секции) | `text-4xl md:text-5xl font-semibold leading-[1.1]` |
| H3 (карточки) | `text-xl` / `text-lg font-semibold` |
| Body | `text-base leading-[1.85]` |
| Caption | `text-sm leading-[1.75–1.8]` |
| Мелкие лейблы формы | `text-[11px] tracking-wide` |

Базовый размер: `--font-size: 16px`.

### 5.3. Отступы и сетка

| Параметр | Значение |
|---|---|
| Max-width контейнера | `max-w-6xl` (72rem / 1152px) |
| Горизонтальные отступы | `px-6` (1.5rem) |
| Вертикальные отступы секций | `py-24 md:py-32` |
| Высота навбара | `h-16` (4rem) |
| Hero min-height | `calc(100svh - 4rem)` |
| Hero grid | `55% / 45%` на desktop |

### 5.4. Скругления

| Элемент | Radius |
|---|---|
| Кнопки CTA | `rounded-full` |
| Карточки подхода | `rounded-2xl` |
| Портреты / CTA-блок | `rounded-3xl` |
| Поля формы | `0.75rem` (inline) |
| Кнопка отправки | `rounded-xl` |
| Галерея | `rounded-2xl` |

### 5.5. Бордеры и тени

- Бордеры: `rgba(201, 168, 143, 0.22–0.5)` — полупрозрачный taupe
- Hover-тень карточек: `0 4px 24px rgba(139, 154, 125, 0.12)`
- Декоративные линии-разделители: `w-10 h-[1.5px]`, цвет TAUPE

### 5.6. Интерактивные паттерны

- **Кнопки primary:** фон SAGE, `rounded-full`, `hover:opacity-85`, иконка со сдвигом `group-hover:translate-x-0.5`
- **Кнопки secondary:** outline с taupe-бордером, `hover:bg-white/70`
- **Навигация:** `backdrop-blur-sm`, полупрозрачный cream-фон `rgba(250,246,241,0.94)`
- **Скролл к секциям:** `scrollIntoView({ behavior: "smooth" })`
- **Галерея:** горизонтальный скролл, `scroll-snap`, hover zoom `scale(1.04)`, overlay с градиентом

### 5.7. Breakpoints

Используются стандартные Tailwind-префиксы:

- `md:` — 768px (основной breakpoint)
- `xl:` — 1280px (Hero H1)

`use-mobile.ts` определяет mobile как `< 768px`, но в `App.tsx` не используется.

---

## 6. Структура страницы и компоненты

Все секции — функциональные компоненты внутри `App.tsx`:

| Компонент | `id` | Фон | Описание |
|---|---|---|---|
| `Nav` | — | cream (blur) | Фиксированная шапка, якорная навигация |
| `Hero` | — | cream + фото | Split-layout: портрет слева, текст справа |
| `About` | `about` | cream | Текст + портрет 3:4 с декоративным углом |
| `Approach` | `approach` | warm | 4 карточки принципов (grid 2×2) |
| `Journey` | `journey` | cream | Вертикальный таймлайн (6 этапов, 2010–2024) |
| `Gallery` | `gallery` | warm | Горизонтальная карусель из 6 фото |
| `HowIWork` | `work` | cream | 3 формата работы + CTA-блок |
| `Contact` | `contact` | charcoal | Контакты + форма обратной связи |
| `Footer` | — | charcoal | Имя + копирайт |

### Навигация

Пункты меню: Обо мне, Подход, Опыт, Галерея, Контакт + кнопка «Записаться».

**Ограничение:** меню скрыто на мобильных (`hidden md:flex`) — мобильная навигация отсутствует.

### Форма контакта

- Поля: имя, телефон/Telegram, сообщение
- Отправка: только клиентский `setSubmitted(true)` — **без бэкенда**
- Success-state: «Спасибо за обращение»

### Контент-данные (массивы в `App.tsx`)

- `APPROACH` — 4 принципа работы
- `TIMELINE` — 6 этапов карьеры
- `FORMATS` — 3 формата сессий
- `GALLERY` — 6 фотографий с подписями

---

## 7. Изображения

Все изображения загружаются с **Unsplash CDN** (внешние URL, не локальные файлы):

| Использование | URL-паттерн |
|---|---|
| Hero | `photo-1612872513575-7e7666b96ff3` (960×1200) |
| About | `photo-1729250829666-2fa142d19e98` (720×900) |
| Галерея | 6 фото, portrait 640×960 / landscape 960×960 |

Параметры оптимизации: `?w=...&h=...&fit=crop&auto=format`

Компонент `ImageWithFallback` (fallback при ошибке загрузки) **не используется** — везде нативный `<img>`.

---

## 8. Библиотека shadcn/ui (boilerplate)

В `src/app/components/ui/` — **46 готовых компонентов**:

`accordion`, `alert`, `alert-dialog`, `aspect-ratio`, `avatar`, `badge`, `breadcrumb`, `button`, `calendar`, `card`, `carousel`, `chart`, `checkbox`, `collapsible`, `command`, `context-menu`, `dialog`, `drawer`, `dropdown-menu`, `form`, `hover-card`, `input`, `input-otp`, `label`, `menubar`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `select`, `separator`, `sheet`, `sidebar`, `skeleton`, `slider`, `sonner`, `switch`, `table`, `tabs`, `textarea`, `toggle`, `toggle-group`, `tooltip`

Утилита `cn()` (`clsx` + `tailwind-merge`) — стандартная для shadcn, в `App.tsx` не импортируется.

---

## 9. Замечания и ограничения демо

1. **Монолитный `App.tsx`** — весь UI, данные и стили в одном файле; нет разделения на модули.
2. **Inline styles** — цвета дублируются: константы JS + CSS-переменные + Tailwind-классы (`bg-card`, `text-primary`).
3. **Нет мобильного меню** — навигация недоступна на экранах < 768px.
4. **Форма без бэкенда** — данные никуда не отправляются.
5. **Placeholder-контакты** — `arina@example.com`, `+7 (999) 000-00-00`, `@arina_psych`.
6. **Тёмная тема** — CSS определён, переключатель отсутствует.
7. **Избыточные зависимости** — ~40 пакетов из Figma Make boilerplate не используются.
8. **`globals.css` пуст** — базовые стили живут в `theme.css`.
9. **Дублирование `--radius`** — в `theme.css` указано и `0.75rem`, и `0.625rem` (побеждает последнее).
10. **Секция `work`** — есть `id="work"`, но нет пункта в навигации.

---

## 10. Визуальная концепция

Тёплая, спокойная эстетика для детской психологии:

- Натуральные землистые тона (sage green, taupe, cream)
- Много воздуха, крупная типографика в Hero
- Минималистичные декоративные элементы (тонкие линии, полупрозрачные углы)
- Контрастная тёмная секция контактов для визуального якоря
- Профессиональные фотографии кабинета/пространства через галерею

---

## 11. Лицензии

- **shadcn/ui** — MIT ([ATTRIBUTIONS.md](reference/ATTRIBUTIONS.md))
- **Фотографии Unsplash** — [Unsplash License](https://unsplash.com/license)

---

## 12. Быстрый старт

```bash
cd reference
npm install
npm run dev
```

Открыть в браузере адрес, который выведет Vite (обычно `http://localhost:5173`).

---

*Документ сгенерирован на основе анализа файлов в папке `reference` проекта Site.*