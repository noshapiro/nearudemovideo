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

## 3. Логотип Kaltura (Hero-карточка)

**Файл:** `kaltura-logo.png`  
**Путь:** `public/kaltura-logo.png`

Отображается в правом верхнем углу контейнера Hero (карточка с «Your avatars can hear») и в футере сайдбара. В Hero размер как кнопка «Watch the Demo» (высота 40 px, контейнер мин. 140 px). В сайдбаре — контейнер 48×48 px. **Файл должен лежать в `public/kaltura-logo.png`** — тогда на localhost и в сборке лого подтянется.

---

## 4. Логотип NEARU для вкладок пайплайна (Architecture)

**Файл:** `nearu-tab-logo.png`  
**Путь:** `public/nearu-tab-logo.png`

Показывается вместо текста «NEARU» в синих вкладках над шагами пайплайна (NearuVibe™, Vision Layer, Emotion Fusion). Фон вкладки синий (`--blue`), поэтому нужен логотип **контрастного цвета** (например белый или светлый). Рекомендуемая высота: ~14 px. Если файла нет, отображается текст «NEARU».

---

## 5. Аватар персонажа NEARU (карточка Agent B)

**Файл:** `nearu-avatar.png` **или** `nearu-avatar.svg`  
**Путь:** `public/nearu-avatar.png` или `public/nearu-avatar.svg`

Круглый контейнер 52×52 px. Изображение обрезается по кругу.  
Лучше загружать **квадратное** изображение (например 104×104 или 208×208 px).  
Если файла нет, показывается стандартный SVG-плейсхолдер.

---

После добавления файлов перезапустите `npm run dev` или пересоберите проект.
