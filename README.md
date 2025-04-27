# Test Project "Асинхронные карточки" / Asynchronous Cards

---

## English

### Project Overview
This is a Next.js (App Router) TypeScript project implementing an asynchronous cards page. It fetches data from a delayed API, handles loading, success, and error states, and renders up to 7 cards with graceful fallbacks and performance optimizations.

### Architecture
```
/app
  ├─ layout.tsx           # Root layout (HTML, body wrapper)
  └─ cards
      ├─ layout.tsx       # Nested layout for /cards (Header/Footer wrapper)
      └─ page.tsx         # CardsPage: UI rendering and error handling

/components
	└─ Layout.tsx           # Header/Footer wrapper using Button

/ui
  ├─ Button.tsx           # Reusable button with loading & disabled states
  ├─ Card.tsx             # Card component (title + text)
  └─ SkeletonCard.tsx     # Placeholder loader component

/hooks
  └─ useCards.ts          # Custom hook: fetch, sort, fill, and manage state
```

- **Next.js App Router** for file-based routing and nested layouts
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Axios** for HTTP requests with cancellation support

### Installation & Running
1. **Clone repository**
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Initialize TailwindCSS** (if not already generated)
   ```bash
   npx tailwindcss init -p
   ```
4. **Start development server**
   ```bash
   npm run dev
   ```
5. **Open in browser**
   Navigate to `http://localhost:3000` (redirects to `/cards`)

### API Endpoint
- `https://node-test-server-production.up.railway.app/api/cards`
  - Simulates 10–20s delay

---

## Русский

### Описание проекта
Это проект на Next.js (App Router) с TypeScript, реализующий страницу «Асинхронные карточки». Данные загружаются с API с задержкой, обрабатываются состояния загрузки, успеха и ошибки, отображаются до 7 карточек с заголовком и текстом.

### Архитектура
```
/app
  ├─ layout.tsx           # Главный layout (HTML, body)
  └─ cards
      ├─ layout.tsx       # Layout для /cards (шапка и подвал)
      └─ page.tsx         # CardsPage: отрисовка карточек и обработка ошибок

/components
  └─ Layout.tsx           # Компонент-обёртка с Header и Footer

/ui
	├─ Button.tsx           # Универсальная кнопка с индикатором загрузки и блокировкой
	├─ Card.tsx             # Компонент карточки (заголовок + текст)
	└─ SkeletonCard.tsx     # Скелетон-карточка для состояния загрузки

/hooks
  └─ useCards.ts          # Кастомный хук для загрузки, сортировки, заполнения и управления состоянием
```

- **Next.js App Router** для вложенных layout и маршрутизации
- **TypeScript** для типизации
- **Tailwind CSS** для стилизации
- **Axios** для HTTP-запросов с поддержкой отмены

### Установка и запуск
1. **Клонировать репозиторий**
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```
2. **Установить зависимости**
   ```bash
   npm install
   # или
   yarn install
   ```
3. **Инициализировать TailwindCSS** (если ещё не создано)
   ```bash
   npx tailwindcss init -p
   ```
4. **Запустить dev-сервер**
   ```bash
   npm run dev
   ```
5. **Открыть в браузере**
   Перейдите по адресу `http://localhost:3000` (будет перенаправление на `/cards`)

### API Endpoint
- `https://node-test-server-production.up.railway.app/api/cards`
  - Симулирует задержку ответа 10–20 секунд

