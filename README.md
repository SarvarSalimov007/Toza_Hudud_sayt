# 🎮 TozaHudud | Eko Coin

TozaHudud - bu chiqindilarni virtual coinlarga aylantiradigan interaktiv ekologik platforma. Foydalanuvchilar chiqindilarni tasniflab, coinlar yig'ib, claw mashina o'yinida kolleksiya o'yinchoqlarini qo'lga kirita oladilar.

## ✨ Asosiy Xususiyatlar

### 🗑️ Chiqindi Tasniflash
- **Foydalanuvchi ma'lumotlari:** Ism, Familiya, Yosh, Email
- **Chiqindi turlari:**
  - Shisha
  - Plastmassa
  - Alyumin
  - Aralash
  - Ekologik
- **Eko darajasi:** 1-5 oralig'ida baholash
- **Og'irlik:** 1-1000 kg (1 kg = 1 coin)
- **AI rasm tekshiruv:** 30 kg dan ortiq chiqindilar uchun rasm yuklash va AI orqali tekshirish

### 🎰 Claw Mashina O'yini
- **Narxi:** 20 coin
- **Kolleksiya o'yinchoqlari:**
  - 🦂 **Tilla chayon** (0.001% omad) - Mithick
  - 🐼 **Eko panda** (1% omad) - Legendary
  - 🐢 **Lazer toshbaqa** (9% omad) - Rare
  - 🐰 **Neon quyon** (15% omad) - Uncommon
  - 🦊 **Pixel Tulki** (25% omad) - Uncommon
  - 🐱 **Oddiy mushuk** (50% omad) - Common

### 🎁 Yutuqlar Sandig'i
- Barcha qo'lga kiritilgan o'yinchoqlarni ko'rish
- O'yinchoqlarning rasmlari va ma'lumotlari
- Keraksiz yutuqlarni tanlab o'chirish
- Timestamp bilan yutuqlar tarixi

### 🎨 Dizayn
- **Zamonaviy neon dizayn** - Yashil neon ranglar
- **Dark/Light mode** - Qulay ko'rinish rejimlari
- **Responsive dizayn** - Barcha qurilmalarda ishlaydi
- **Animatsiyalar:**
  - Claw mashina animatsiyasi (zanjir bilan)
  - O'yinchoq tutish va ko'tarish animatsiyalari
  - TozaHudud logotip animatsiyasi (recycling emblem)

## 🚀 O'rnatish va Ishlatish

### Talablar
- Zamonaviy veb-brauzer (Chrome, Firefox, Safari, Edge)
- Internet ulanishi (AI tekshiruv uchun)

### O'rnatish
1. Repository ni klon qiling:
```bash
git clone https://github.com/yourusername/Toza_Hudud.git
cd Toza_Hudud
```

2. Fayllarni oching:
   - `index.html` - Asosiy HTML fayl
   - `styles.css` - CSS stillar
   - `script.js` - JavaScript logika

3. Brauzerda oching:
   - `index.html` faylini brauzerda oching
   - Yoki Live Server ishlatib oching

### AI Tekshiruv Sozlash (Ixtiyoriy)
1. Footer'dagi "AI" tugmasini bosing
2. OpenAI API key ni kiriting
3. "Saqlash" tugmasini bosing

**Eslatma:** API key bo'lmasa, demo versiya ishlatiladi.

## 📖 Foydalanish Qo'llanmasi

### 1. Chiqindi Tasniflash
1. **Ma'lumotlarni kiriting:**
   - Ism, Familiya, Yosh, Email
2. **Chiqindi turini tanlang:**
   - Shisha, Plastmassa, Alyumin, Aralash yoki Ekologik
3. **Eko darajasini belgilang:**
   - Slider orqali 1-5 oralig'ida
4. **Og'irlikni kiriting:**
   - 1-1000 kg oralig'ida
   - 30 kg dan ortiq bo'lsa, rasm yuklash talab qilinadi
5. **"Coin hisoblash" tugmasini bosing**

### 2. Claw Mashina O'yini
1. **Coinlar tekshiruvi:**
   - Kamida 20 coin bo'lishi kerak
   - Tugmada necha marta o'ynash mumkinligi ko'rsatiladi
2. **"Claw mashinani ishga tushur" tugmasini bosing:**
   - Bir nechta o'yin ketma-ket o'ynaladi
   - Har bir o'yin ~1 sekundda tugaydi
3. **Yutuqlarni ko'rish:**
   - Yutuqlar avtomatik ravishda sandiqga qo'shiladi
   - Sandiqga scroll qilinadi

### 3. Yutuqlar Sandig'i
1. **Yutuqlarni ko'rish:**
   - Barcha qo'lga kiritilgan o'yinchoqlar ko'rsatiladi
2. **Keraksiz yutuqlarni o'chirish:**
   - "Barchasini tanlash" tugmasini bosing
   - Yoki kerakli yutuqlarni tanlang
   - "Tanlanganlarni o'chirish" tugmasini bosing

## 🎯 Texnik Xususiyatlar

### Texnologiyalar
- **HTML5** - Semantik struktura
- **CSS3** - Zamonaviy stillar, animatsiyalar, responsive dizayn
- **JavaScript (ES6+)** - Dinamik funksionallik
- **LocalStorage** - Ma'lumotlarni saqlash
- **OpenAI Vision API** - Rasm tekshiruv (ixtiyoriy)

### Animatsiyalar
- **Claw mashina:**
  - Changal harakatlanishi
  - Zanjir bilan tushish/ko'tarilish
  - O'yinchoq tutish va ko'tarish
  - Sandiqga tashlash
- **Logo animatsiyasi:**
  - TozaHudud → Recycling emblem (5 sekund)
  - Smooth transition animatsiyalar

### Ma'lumotlar Saqlash
- **LocalStorage** orqali:
  - Coin miqdori
  - Yutuqlar ro'yxati
  - Umumiy kg miqdori
  - OpenAI API key (ixtiyoriy)

## 🎨 Dizayn Elementlari

### Ranglar
- **Asosiy rang:** Neon yashil (#4ef3a7)
- **Fon:** Qora/Yorug' (Dark/Light mode)
- **Aktsent:** Gradient ranglar

### Komponentlar
- Glassmorphism effektlar
- Neon yoritish effektlari
- Smooth transitions
- Responsive grid layout

## 📱 Responsive Dizayn

- **Mobile:** Bitta kolon
- **Tablet:** 2 kolon (768px+)
- **Desktop:** 2 kolon, keng layout (1024px+)

## 🔧 Sozlash

### Coin Narxi
`script.js` faylida:
```javascript
const GAME_COST = 20; // Claw mashina narxi
```

### O'yinchoq Ehtimolliklari
`script.js` faylida `toys` massivida:
```javascript
{ name: "Tilla chayon", chance: 0.001, ... }
```

### Animatsiya Tezligi
`script.js` faylida `playSingleGame()` funksiyasida:
```javascript
newClaw.style.transition = 'top 0.2s ease-in-out'; // Tezlik
```

## 🐛 Muammolarni Hal Qilish

### Coinlar saqlanmayapti
- LocalStorage qo'llab-quvvatlanadigan brauzer ishlatilayotganligini tekshiring
- Brauzer cache ni tozalang

### AI tekshiruv ishlamayapti
- API key to'g'ri kiritilganligini tekshiring
- Internet ulanishini tekshiring
- Demo versiya ishlatilayotganligini tekshiring

### Animatsiyalar sekin
- Brauzer versiyasini yangilang
- Boshqa brauzerda sinab ko'ring

## 📝 Litsenziya

Bu loyiha ochiq manba kod sifatida taqdim etilgan.

## 👨‍💻 Muallif

TozaHudud jamoasi

## 🙏 Minnatdorchilik

- OpenAI Vision API
- Barcha foydalanuvchilar va ularning qayta ishlashga qo'shgan hissalari

---

**Eslatma:** Bu loyiha ekologik xabardorlikni oshirish va qayta ishlashni rag'batlantirish uchun yaratilgan. Haqiqiy chiqindilarni to'g'ri joyga tashlang! 🌱


