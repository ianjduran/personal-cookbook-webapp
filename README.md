# 🍳 Personal Cookbook

A full-stack recipe management web application built with **Next.js 13**, **TypeScript**, and **MongoDB**. Designed as a personal family recipe book — store, browse, and organize recipes with custom categories.

---

## ✨ Features

### Recipe Management
- **Recipe listing** — browse all stored recipes as cards, fetched live from MongoDB via Next.js API routes
- **Recipe detail view** — dynamic page per recipe (`/recipes/[id]`) showing name, category, servings count, cook time, cooking method, full ingredient list, and step-by-step instructions
- **Recipe creation form** — multi-field form to create new recipes including name, category picker, servings, cook time, cooking method, ingredients, and preparation steps

### Category System
- **Custom categories** — each category has a name, a color, and an icon
- **Category creation form** — modal form with a live icon picker (popover), a color picker, and a real-time preview before saving
- **Category picker** — accessible dropdown (Headless UI `Listbox`) on the recipe creation form to assign a category to each recipe

### UI / UX
- **Skeleton loading states** — placeholder skeletons displayed while data fetches
- **Empty state** — illustrated empty state when no recipes exist yet
- **Search bar UI** — search input ready for implementation
- **Dark mode** — full dark theme support via Tailwind CSS `dark:` variants
- **Toast notifications** — user feedback on save actions via `react-toastify`

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 13 (Pages Router) |
| Language | TypeScript 4.9 (strict mode) |
| UI | React 18 |
| Styling | Tailwind CSS 3 |
| Database | MongoDB (via Mongoose 6) |
| Data Fetching | SWR |
| Accessible Components | Headless UI (Listbox, Popover, Transition) |
| Icons | react-icons |
| Notifications | react-toastify |

---

## 🧩 Key Components

| Component | Description |
|---|---|
| `RecipeDetail` | Displays full recipe with category icon, servings, cook time, ingredient list, and steps |
| `CategoryForm` | Controlled form using `useReducer` to manage category creation state |
| `IconPickerPopover` | Headless UI Popover that lists all available SVG icons for selection |
| `ColorPicker` | Inline color swatch picker, propagates selection via callback |
| `CategoryPicker` | Accessible Listbox dropdown to assign a category when creating a recipe |
| `SearchBar` | Search input UI component |
