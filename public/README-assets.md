# NEARU assets — куда загружать файлы

Все файлы кладите **в папку `public/`** (рядом с этим README).

---

## 1. Логотип NEARU (сайдбар)

**Файл:** `nearu-logo.svg` **или** `nearu-logo.png`  
**Путь:** `public/nearu-logo.svg` или `public/nearu-logo.png`

Будет показан в левой колонке вместо текста «NEARU × Kaltura».  
Рекомендуемая высота: ~24–28 px (ширина по пропорциям).  
Если файла нет, остаётся текстовая подпись.

---

## 2. Аватар Agent A (Standard Kaltura Avatar)

**Файл:** `kaltura-avatar.png` **или** `kaltura-avatar.svg`  
**Путь:** `public/kaltura-avatar.png` или `public/kaltura-avatar.svg`

Аватар для карточки «Agent A / Standard Kaltura Avatar» — круг 52×52 px.  
Если файла нет, показывается серый SVG-плейсхолдер (смайл).

---

## 3. Аватар персонажа NEARU (карточка Agent B)

**Файл:** `nearu-avatar.png` **или** `nearu-avatar.svg`  
**Путь:** `public/nearu-avatar.png` или `public/nearu-avatar.svg`

Круглый контейнер 52×52 px. Изображение обрезается по кругу.  
Лучше загружать **квадратное** изображение (например 104×104 или 208×208 px).  
Если файла нет, показывается стандартный SVG-плейсхолдер.

---

После добавления файлов перезапустите `npm run dev` или пересоберите проект.
