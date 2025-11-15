const encodeSvg = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const createToyArt = (id, gradient, body) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${gradient[0]}" />
        <stop offset="100%" stop-color="${gradient[1]}" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" rx="28" fill="url(#${id})" />
    ${body}
  </svg>`;
  return encodeSvg(svg);
};

const toyArt = {
  "Tilla chayon": createToyArt(
    "gold-scorp",
    ["#f6d365", "#fda085"],
    `
    <path d="M60 130 Q100 150 140 130" stroke="#fff6c5" stroke-width="10" fill="none" stroke-linecap="round"/>
    <circle cx="100" cy="110" r="35" fill="#241200" opacity="0.5"/>
    <circle cx="100" cy="80" r="25" fill="#fff0a3"/>
    <path d="M90 55 Q100 35 115 25" stroke="#fff0a3" stroke-width="8" fill="none" stroke-linecap="round"/>
    <circle cx="125" cy="18" r="10" fill="#ffd86b"/>
    <circle cx="65" cy="132" r="12" fill="#fff0a3"/>
    <circle cx="135" cy="132" r="12" fill="#fff0a3"/>
  `
  ),
  "Lazer toshbaqa": createToyArt(
    "laser-turtle",
    ["#20e3b2", "#29ffc6"],
    `
    <circle cx="100" cy="110" r="55" fill="#0a2f25" opacity="0.65"/>
    <polygon points="100,55 135,80 135,140 100,165 65,140 65,80" fill="#00ffc6" opacity="0.4"/>
    <circle cx="100" cy="110" r="35" fill="#1df7c6" opacity="0.8"/>
    <rect x="90" y="40" width="20" height="25" rx="8" fill="#b8ffee"/>
    <rect x="70" y="160" width="20" height="25" rx="10" fill="#20e3b2"/>
    <rect x="110" y="160" width="20" height="25" rx="10" fill="#20e3b2"/>
  `
  ),
  "Neon quyon": createToyArt(
    "neon-rabbit",
    ["#a18cd1", "#fbc2eb"],
    `
    <rect x="70" y="30" width="20" height="60" rx="10" fill="#fff" opacity="0.9"/>
    <rect x="110" y="30" width="20" height="60" rx="10" fill="#fff" opacity="0.9"/>
    <circle cx="100" cy="120" r="45" fill="#1b1029" opacity="0.65"/>
    <circle cx="100" cy="120" r="32" fill="#fff"/>
    <circle cx="85" cy="115" r="6" fill="#1b1029"/>
    <circle cx="115" cy="115" r="6" fill="#1b1029"/>
    <path d="M85 135 Q100 145 115 135" stroke="#ff6bd6" stroke-width="6" fill="none" stroke-linecap="round"/>
  `
  ),
  "Pixel Tulki": createToyArt(
    "pixel-fox",
    ["#ff9a8b", "#ff6a88"],
    `
    <rect x="60" y="70" width="80" height="80" fill="#33100c" opacity="0.5"/>
    <rect x="70" y="80" width="60" height="60" fill="#ffb47d"/>
    <rect x="70" y="60" width="20" height="20" fill="#ff9052"/>
    <rect x="110" y="60" width="20" height="20" fill="#ff9052"/>
    <rect x="80" y="110" width="12" height="12" fill="#1f0704"/>
    <rect x="108" y="110" width="12" height="12" fill="#1f0704"/>
    <rect x="92" y="130" width="16" height="10" fill="#1f0704"/>
  `
  ),
  "Oddiy mushuk": createToyArt(
    "simple-cat",
    ["#89f7fe", "#66a6ff"],
    `
    <path d="M70 80 L90 50 L110 80 Z" fill="#f0f8ff"/>
    <path d="M130 80 L150 50 L170 80 Z" fill="#f0f8ff"/>
    <circle cx="120" cy="120" r="45" fill="#1f365c" opacity="0.5"/>
    <circle cx="120" cy="120" r="38" fill="#f8fbff"/>
    <circle cx="105" cy="115" r="6" fill="#1a2440"/>
    <circle cx="135" cy="115" r="6" fill="#1a2440"/>
    <path d="M105 135 Q120 145 135 135" stroke="#ffb3d2" stroke-width="5" fill="none" stroke-linecap="round"/>
  `
  ),
  "Eko panda": createToyArt(
    "eco-panda",
    ["#30cfd0", "#330867"],
    `
    <circle cx="100" cy="115" r="50" fill="#0c1d1a" opacity="0.6"/>
    <circle cx="100" cy="115" r="40" fill="#f5f9f0"/>
    <circle cx="80" cy="85" r="18" fill="#0c1d1a"/>
    <circle cx="120" cy="85" r="18" fill="#0c1d1a"/>
    <circle cx="85" cy="115" r="10" fill="#0c1d1a"/>
    <circle cx="115" cy="115" r="10" fill="#0c1d1a"/>
    <circle cx="100" cy="135" r="8" fill="#30cfd0"/>
    <path d="M70 150 Q100 165 130 150" stroke="#30cfd0" stroke-width="6" fill="none" stroke-linecap="round"/>
  `
  ),
};

const toys = [
  { name: "Tilla chayon", chance: 0.00001, tag: "Mythic", art: toyArt["Tilla chayon"] },
  { name: "Lazer toshbaqa", chance: 0.09, tag: "Rare", art: toyArt["Lazer toshbaqa"] },
  { name: "Neon quyon", chance: 0.15, tag: "Uncommon", art: toyArt["Neon quyon"] },
  { name: "Pixel Tulki", chance: 0.25, tag: "Uncommon", art: toyArt["Pixel Tulki"] },
  { name: "Oddiy mushuk", chance: 0.5, tag: "Common", art: toyArt["Oddiy mushuk"] },
  { name: "Eko panda", chance: 0.01, tag: "Legendary", art: toyArt["Eko panda"] },
];

const state = {
  coinBank: 0,
  totalKgs: 0,
  toys,
  inventory: [],
  isPlaying: false,
  playQueue: 0, // necha marta o'ynash kerak
};

const form = document.querySelector("#recycleForm");
const ecoRange = document.querySelector('input[name="ecoLevel"]');
const ecoValue = document.querySelector("#ecoLevelValue");
const resultBox = document.querySelector("#formResult");
const coinBankEl = document.querySelector("#coinBank");
const dailyKgsEl = document.querySelector("#dailyKgs");
const toyList = document.querySelector("#toyList");
const playBtn = document.querySelector("#playGame");
const gameResult = document.querySelector("#gameResult");
const themeToggle = document.querySelector("#themeToggle");
const scrollToForm = document.querySelector("#scrollToForm");
const scrollToGame = document.querySelector("#scrollToGame");
const scrollToChest = document.querySelector("#scrollToChest");
const formCard = document.querySelector("#formCard");
const gameCard = document.querySelector("#gameCard");
const chestCard = document.querySelector("#chestCard");
const inventoryList = document.querySelector("#inventoryList");
const emptyChestMsg = document.querySelector("#emptyChestMsg");
const weightInput = document.querySelector("#weightInput");
const photoLabel = document.querySelector("#photoLabel");
const photoInput = document.querySelector("#photoInput");
const photoPreview = document.querySelector("#photoPreview");

const formatNumber = (value) =>
  new Intl.NumberFormat("uz-UZ", { maximumFractionDigits: 0 }).format(value);

// AI tekshiruv funksiyasi
const verifyWasteImage = async (imageFile) => {
  // Demo versiya - haqiqiy API integratsiyasi uchun API key kerak
  // Bu yerda OpenAI Vision API yoki Google Cloud Vision API dan foydalanish mumkin
  
  return new Promise((resolve) => {
    // Simulyatsiya - haqiqiy API chaqiruvi uchun
    setTimeout(() => {
      // Demo: rasmni tekshirib, chiqindi ekanligini tasdiqlash
      // Haqiqiy versiyada bu yerda API chaqiruvi bo'ladi
      
      // Demo natija - 90% ehtimollik bilan chiqindi
      const isWaste = Math.random() > 0.1; // 90% ehtimollik
      const confidence = isWaste ? 85 + Math.floor(Math.random() * 15) : 20 + Math.floor(Math.random() * 30);
      
      resolve({
        verified: isWaste,
        confidence: confidence,
        message: isWaste 
          ? `Tasdiqlandi! Chiqindi ekanligi ${confidence}% ishonch bilan tasdiqlandi.`
          : `Tekshiruv muvaffaqiyatsiz. Rasmda chiqindi aniq ko'rinmayapti (${confidence}% ishonch). Iltimos, chiqindining aniq rasmini yuklang.`
      });
    }, 2000); // 2 soniya simulyatsiya
  });
};

// Haqiqiy OpenAI Vision API integratsiyasi (API key kerak)
const verifyWasteImageWithAPI = async (imageFile) => {
  const API_KEY = localStorage.getItem('openai_api_key') || '';
  
  if (!API_KEY) {
    // API key yo'q bo'lsa demo versiyadan foydalanish
    return verifyWasteImage(imageFile);
  }
  
  try {
    // Rasmni base64 ga o'tkazish
    const base64Image = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(imageFile);
    });
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4-vision-preview',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Bu rasmda chiqindi (recycling waste) bor yoki yo\'q? Faqat chiqindi bo\'lsa, ishonch darajasini 0-100% orasida baholang va JSON formatda javob bering: {"verified": true/false, "confidence": 0-100, "message": "izoh"}.'
              },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${base64Image}`
                }
              }
            ]
          }
        ],
        max_tokens: 300
      })
    });
    
    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // JSON javobni parse qilish
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    // Agar JSON topilmasa, demo versiyadan foydalanish
    return verifyWasteImage(imageFile);
  } catch (error) {
    console.error('AI tekshiruv xatosi:', error);
    // Xatolik bo'lsa demo versiyadan foydalanish
    return verifyWasteImage(imageFile);
  }
};

ecoRange?.addEventListener("input", (event) => {
  ecoValue.textContent = `${event.target.value} / 5`;
});

weightInput?.addEventListener("input", (event) => {
  const weight = Number(event.target.value);
  if (weight > 30) {
    photoLabel.style.display = "flex";
    photoInput.setAttribute("required", "required");
  } else {
    photoLabel.style.display = "none";
    photoInput.removeAttribute("required");
    photoInput.value = "";
    if (photoPreview) photoPreview.innerHTML = "";
  }
});

photoInput?.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      resultBox.textContent = "Rasm hajmi 5 MB dan katta bo'lmasligi kerak.";
      photoInput.value = "";
      photoPreview.innerHTML = "";
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      photoPreview.innerHTML = `
        <img src="${e.target.result}" alt="Yuklangan rasm" />
        <button type="button" class="remove-photo" onclick="document.querySelector('#photoInput').value=''; document.querySelector('#photoPreview').innerHTML='';">×</button>
      `;
    };
    reader.readAsDataURL(file);
  } else {
    photoPreview.innerHTML = "";
  }
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const weight = Number(formData.get("weight"));
  if (!Number.isFinite(weight) || weight < 1) {
    resultBox.textContent = "Og'irlikni to'g'ri kiriting.";
    return;
  }

  const cleanWeight = Math.min(Math.max(weight, 1), 1000);
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  
  // 30 kg dan ko'p bo'lsa rasmni tekshirish
  if (cleanWeight > 30) {
    const photo = formData.get("photo");
    if (!photo || photo.size === 0) {
      resultBox.textContent = "30 kg dan ko'p chiqindi uchun rasm yuklash majburiy. Tekshirish uchun chiqindining rasmini yuklang.";
      return;
    }
    
    // AI tekshiruvni boshlash
    submitButton.disabled = true;
    submitButton.textContent = "AI tekshiruv...";
    resultBox.innerHTML = `
      <div class="ai-loading">
        <div class="spinner"></div>
        <span>Chiqindining rasmi AI orqali tekshirilmoqda...</span>
      </div>
    `;
    
    try {
      const verification = await verifyWasteImageWithAPI(photo);
      
      if (!verification.verified) {
        resultBox.innerHTML = `
          <div class="ai-result error">
            <strong>❌ Tekshiruv muvaffaqiyatsiz</strong>
            <p>${verification.message}</p>
            <small>Iltimos, chiqindining aniq rasmini yuklang va qayta urinib ko'ring.</small>
          </div>
        `;
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        return;
      }
      
      // Tekshiruv muvaffaqiyatli
      resultBox.innerHTML = `
        <div class="ai-result success">
          <strong>✅ ${verification.message}</strong>
        </div>
      `;
    } catch (error) {
      resultBox.innerHTML = `
        <div class="ai-result error">
          <strong>⚠️ Tekshiruv xatosi</strong>
          <p>Tekshiruv vaqtida xatolik yuz berdi. Iltimos, qayta urinib ko'ring.</p>
        </div>
      `;
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
      return;
    }
  }

  // Coin berish
  const coinsEarned = cleanWeight;
  state.coinBank += coinsEarned;
  state.totalKgs += cleanWeight;
  localStorage.setItem("tozaHudud", JSON.stringify(state));

  coinBankEl.textContent = formatNumber(state.coinBank);
  dailyKgsEl.textContent = `${formatNumber(state.totalKgs)} kg`;
  updatePlayButton();

  resultBox.innerHTML = `
    <div class="ai-result success">
      <strong>🎉 Tabriklaymiz ${formData.get("firstName") || ""}!</strong>
      <p>Siz ${coinsEarned} coin qo'lga kiritdingiz. Endi claw mashinani sinab ko'ring.</p>
    </div>
  `;
  
  form.reset();
  ecoValue.textContent = "3 / 5";
  photoLabel.style.display = "none";
  photoPreview.innerHTML = "";
  submitButton.disabled = false;
  submitButton.textContent = originalButtonText;
});

const renderToys = () => {
  toyList.innerHTML = "";
  state.toys.forEach((toy) => {
    const card = document.createElement("article");
    card.className = "toy";
    card.innerHTML = `
      <img src="${toy.art}" alt="${toy.name} rasmi" loading="lazy" />
      <strong>${toy.name}</strong>
      <small>${toy.tag}</small>
      <small>Drop: ${(toy.chance * 100).toFixed(3)}%</small>
    `;
    toyList.appendChild(card);
  });
  
  // Claw mashina ichidagi o'yinchoqlarni render qilish
  renderToysPool();
};

const renderToysPool = () => {
  const toysPool = document.querySelector("#toysPool");
  if (!toysPool) return;
  
  toysPool.innerHTML = "";
  // Tilla chayon va Eko panda 1 tadan, qolganlari 3 tadan
  state.toys.forEach((toy, index) => {
    const count = (toy.name === "Tilla chayon" || toy.name === "Eko panda") ? 1 : 3;
    for (let i = 0; i < count; i++) {
      const toyMini = document.createElement("div");
      toyMini.className = "toy-mini";
      toyMini.dataset.toyName = toy.name;
      toyMini.style.setProperty("--delay", `${(index * 0.5) + (i * 0.2)}s`);
      toyMini.innerHTML = `<img src="${toy.art}" alt="${toy.name}" />`;
      toysPool.appendChild(toyMini);
    }
  });
};

const renderInventory = () => {
  if (!inventoryList || !emptyChestMsg) return;
  inventoryList.innerHTML = "";
  if (!state.inventory.length) {
    emptyChestMsg.style.display = "block";
    const chestActions = document.querySelector("#chestActions");
    if (chestActions) chestActions.style.display = "none";
    return;
  }

  emptyChestMsg.style.display = "none";
  const chestActions = document.querySelector("#chestActions");
  if (chestActions) chestActions.style.display = "flex";
  
  state.inventory.forEach((item) => {
    const card = document.createElement("article");
    card.className = "chest-item";
    card.innerHTML = `
      <label class="chest-checkbox">
        <input type="checkbox" data-item-id="${item.id}" class="item-checkbox" />
        <span class="checkmark"></span>
      </label>
      <img src="${item.art}" alt="${item.name} rasmi" loading="lazy" />
      <div>
        <strong>${item.name}</strong>
        <small>${item.tag}</small>
        <small>${item.timeLabel}</small>
      </div>
    `;
    inventoryList.appendChild(card);
  });
  
  updateDeleteButton();
};

const addPrizeToChest = (toy) => {
  const time = new Date();
  const formatter = new Intl.DateTimeFormat("uz-UZ", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const item = {
    id:
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `toy-${Date.now()}-${Math.random()}`,
    name: toy.name,
    tag: toy.tag,
    art: toy.art,
    timeLabel: `Bugun ${formatter.format(time)}`,
  };
  state.inventory.unshift(item);
  renderInventory();
};

const rollToy = () => {
  const roll = Math.random();
  let cumulative = 0;
  for (const toy of state.toys) {
    cumulative += toy.chance;
    if (roll <= cumulative) {
      return toy;
    }
  }
  return state.toys[state.toys.length - 1];
};

// Coinlarga qarab necha marta o'ynash mumkinligini hisoblash
const getMaxPlays = () => {
  return Math.floor(state.coinBank / 20);
};

// Tugmani yangilash
const updatePlayButton = () => {
  if (!playBtn) return;
  const maxPlays = getMaxPlays();
  if (maxPlays === 0) {
    playBtn.textContent = "Coinlar yetarli emas (20 coin kerak)";
    playBtn.disabled = true;
  } else if (maxPlays === 1) {
    playBtn.textContent = "Claw mashinani ishga tushur (1 marta)";
    playBtn.disabled = false;
  } else {
    playBtn.textContent = `Claw mashinani ishga tushur (${maxPlays} marta)`;
    playBtn.disabled = false;
  }
};

// Bir nechta o'yinni ketma-ket o'ynash
const playMultipleGames = async (count) => {
  if (state.isPlaying) return;
  
  state.isPlaying = true;
  const actualPlays = Math.min(count, getMaxPlays());
  
  for (let i = 0; i < actualPlays; i++) {
    if (state.coinBank < 20) break;
    
    // Har bir o'yin uchun coinlarni ayirish
    state.coinBank -= 20;
    localStorage.setItem("tozaHudud", JSON.stringify(state));
    coinBankEl.textContent = formatNumber(state.coinBank);
    updatePlayButton();
    
    // O'yinni o'ynash
    await playSingleGame();
    
    // O'yinlar orasida kichik kutish - TEZLASHTIRILGAN
    if (i < actualPlays - 1) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }
  
  state.isPlaying = false;
  updatePlayButton();
};

// Bitta o'yinni o'ynash
const playSingleGame = async () => {
  const prize = rollToy();
  const claw = document.querySelector("#claw");
  const clawMachine = document.querySelector("#clawMachine");
  const toysPool = document.querySelector("#toysPool");
  
  if (!claw || !clawMachine || !toysPool) {
    // Fallback agar elementlar topilmasa
    let message = `Sizga ${prize.name} tushdi!`;
    if (prize.name === "Tilla chayon") {
      message += " OMG! 0.001% omad siz tomonda 🎉";
    }
    addPrizeToChest(prize);
    gameResult.textContent = `${message} Yutuqlar sandig'iga qo'shildi.`;
    return;
  }

  // Animatsiya boshlanishi - claw mashinani ko'rsatish
  gameResult.innerHTML = `
    <div class="claw-machine-container">
      <div class="claw-machine" id="clawMachine">
        <div class="claw-machine-glass">
          <div class="toys-pool" id="toysPool"></div>
          <div class="claw-chain" id="clawChain"></div>
          <div class="claw" id="claw">
            <div class="claw-arm left"></div>
            <div class="claw-arm right"></div>
            <div class="claw-arm center"></div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Elementlarni qayta topish
  const newClaw = document.querySelector("#claw");
  const newClawMachine = document.querySelector("#clawMachine");
  const newToysPool = document.querySelector("#toysPool");
  const newClawChain = document.querySelector("#clawChain");
  
  // Pool'ni render qilish
  renderToysPool();
  
  // Kichik kutish - DOM yangilanishi uchun
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Pool'dan o'yinchoqni topish va highlight qilish
  const toyMinis = newToysPool.querySelectorAll('.toy-mini');
  let targetToy = null;
  toyMinis.forEach(toy => {
    if (toy.dataset.toyName === prize.name && !targetToy) {
      targetToy = toy;
    }
  });
  
  if (!targetToy) {
    // O'yinchoq topilmasa, fallback
    return;
  }
  
  // O'yinchoqni highlight qilish
  targetToy.classList.add('target-toy');
  
  // O'yinchoqning pozitsiyasini topish
  const machineRect = newClawMachine.getBoundingClientRect();
  const toyRect = targetToy.getBoundingClientRect();
  const toyX = toyRect.left - machineRect.left + (toyRect.width / 2);
  const toyY = toyRect.top - machineRect.top + (toyRect.height / 2);
  const clawStartX = 50; // 50% markazdan
  const targetX = (toyX / machineRect.width) * 100; // foizga o'tkazish
  
  // Changalning boshlang'ich pozitsiyasi
  const initialClawTop = 20; // changalning boshlang'ich top pozitsiyasi
  const maxClawTop = 250; // changalning maksimal tushish pozitsiyasi
  const clawHeight = 50; // changalning balandligi
  
  // O'yinchoqning pozitsiyasiga qarab changalning tushish masofasini hisoblash
  // Changal o'yinchoqning yuqori qismiga yetishi kerak
  const targetClawTop = Math.max(toyY - clawHeight, initialClawTop);
  const targetClawTopFinal = Math.min(targetClawTop, maxClawTop);
  const chainLength = targetClawTopFinal - initialClawTop + 20; // zanjir uzunligi
  
  // 1. Changal o'yinchoq oldiga harakatlanishi (zanjir bilan birga) - TEZLASHTIRILGAN
  await new Promise(resolve => {
    newClaw.style.left = `${targetX}%`;
    newClaw.style.transition = 'left 0.1s ease-in-out';
    if (newClawChain) {
      newClawChain.style.left = `${targetX}%`;
      newClawChain.style.transition = 'left 0.1s ease-in-out, transform 0.1s ease-in-out';
      newClawChain.style.transform = `translateX(-50%)`;
    }
    setTimeout(resolve, 100);
  });
  
  // 2. Changal tushishi (zanjir bilan) - o'yinchoq pozitsiyasiga qarab - TEZLASHTIRILGAN
  await new Promise(resolve => {
    // Changalning tushish animatsiyasini o'yinchoq pozitsiyasiga qarab sozlash
    newClaw.style.top = `${targetClawTopFinal}px`;
    newClaw.style.transition = 'top 0.2s ease-in-out';
    newClaw.classList.add("descending");
    
    if (newClawChain) {
      // Zanjir changal bilan birga tushishi uchun
      newClawChain.style.height = '20px';
      newClawChain.style.top = '0px';
      newClawChain.classList.add("extending");
      // Zanjir uzayishi changal tushishi bilan birga
      setTimeout(() => {
        if (newClawChain) {
          newClawChain.style.height = `${chainLength}px`;
          newClawChain.style.top = '0px';
        }
      }, 10);
    }
    setTimeout(resolve, 200);
  });

  // 3. O'yinchoqni tutish - TEZLASHTIRILGAN
  await new Promise(resolve => {
    newClaw.classList.remove("descending");
    newClaw.classList.add("grabbing");
    
    // O'yinchoqni changal bilan birga ko'rsatish
    targetToy.style.transition = 'all 0.05s ease';
    targetToy.style.opacity = '0.8';
    targetToy.style.transform = 'scale(0.95)';
    targetToy.style.zIndex = '15';
    
    setTimeout(resolve, 50);
  });

  // 4. O'yinchoqni changal bilan birga ko'rsatish
  const clawCurrentRect = newClaw.getBoundingClientRect();
  targetToy.style.position = 'absolute';
  targetToy.style.left = `${clawCurrentRect.left - machineRect.left + 20}px`;
  targetToy.style.top = `${clawCurrentRect.top - machineRect.top + 35}px`;
  targetToy.style.opacity = '1';
  targetToy.style.transform = 'scale(1.1)';
  targetToy.style.transition = 'all 0.05s ease';
  targetToy.style.zIndex = '20';
  
  // 5. Changal ko'tarilishi (o'yinchoq bilan birga, zanjir qisqaradi) - TEZLASHTIRILGAN
  await new Promise(resolve => {
    newClaw.classList.remove("grabbing");
    newClaw.classList.add("ascending");
    // Changal boshlang'ich pozitsiyasiga qaytishi kerak
    newClaw.style.top = `${initialClawTop}px`;
    newClaw.style.transition = 'top 0.2s ease-in-out';
    
    if (newClawChain) {
      newClawChain.classList.remove("extending");
      newClawChain.classList.add("retracting");
      // Zanjir changal ko'tarilganda qisqarishi kerak
      newClawChain.style.height = '20px';
      newClawChain.style.top = '0px';
    }
    
    // O'yinchoqni changal bilan ko'tarish
    targetToy.style.transition = 'all 0.2s ease';
    targetToy.style.top = `${initialClawTop + 5}px`;
    targetToy.style.left = `${clawCurrentRect.left - machineRect.left + 20}px`;
    targetToy.style.transform = 'scale(1)';
    
    setTimeout(resolve, 200);
  });

  // 6. Changal markazga qaytishi (o'yinchoq bilan birga, zanjir ham birga) - TEZLASHTIRILGAN
  await new Promise(resolve => {
    newClaw.style.left = '50%';
    newClaw.style.transition = 'left 0.1s ease-in-out';
    if (newClawChain) {
      newClawChain.style.left = '50%';
      newClawChain.style.transition = 'left 0.1s ease-in-out, transform 0.1s ease-in-out';
      newClawChain.style.transform = `translateX(-50%)`;
    }
    if (targetToy) {
      targetToy.style.transition = 'left 0.1s ease-in-out';
      // Changal markazga qaytganda o'yinchoq pozitsiyasini yangilash
      setTimeout(() => {
        const updatedClawRect = newClaw.getBoundingClientRect();
        const updatedMachineRect = newClawMachine.getBoundingClientRect();
        targetToy.style.left = `${updatedClawRect.left - updatedMachineRect.left + 20}px`;
      }, 10);
    }
    setTimeout(resolve, 100);
  });

  // 7. O'yinchoqni sandiqga tashlash - TEZLASHTIRILGAN
  if (targetToy) {
    const chestCardRect = chestCard.getBoundingClientRect();
    const finalMachineRect = newClawMachine.getBoundingClientRect();
    const deltaX = chestCardRect.left - finalMachineRect.left + (chestCardRect.width / 2);
    const deltaY = chestCardRect.top - finalMachineRect.top - 300;
    
    targetToy.style.transition = 'all 0.2s ease';
    targetToy.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.3)`;
    targetToy.style.opacity = '0';
    
    setTimeout(() => {
      if (targetToy.parentNode) {
        targetToy.remove();
      }
    }, 200);
  }
  
  await new Promise(resolve => {
    setTimeout(resolve, 200);
  });

  // 8. Tozalash va natijani ko'rsatish
  let message = `Sizga ${prize.name} tushdi!`;
  if (prize.name === "Tilla chayon") {
    message += " OMG! 0.001% omad siz tomonda 🎉";
  }
  
  addPrizeToChest(prize);
  
  // Natijani ko'rsatish va claw mashinani qayta render qilish
  setTimeout(() => {
    gameResult.innerHTML = `
      <div class="claw-machine-container">
        <div class="claw-machine" id="clawMachine">
          <div class="claw-machine-glass">
            <div class="toys-pool" id="toysPool"></div>
            <div class="claw-chain" id="clawChain"></div>
            <div class="claw" id="claw">
              <div class="claw-arm left"></div>
              <div class="claw-arm right"></div>
              <div class="claw-arm center"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="ai-result success" style="margin-top: 1rem;">
        <strong>🎉 ${message}</strong>
        <p>Yutuqlar sandig'iga qo'shildi.</p>
      </div>
    `;
    
    // Pool'ni qayta render qilish
    renderToysPool();
  }, 100);
};

playBtn?.addEventListener("click", async () => {
  if (state.coinBank < 20) {
    gameResult.textContent =
      "Coinlar yetarli emas. Ko'proq chiqindi olib kelib bankni to'ldiring!";
    return;
  }

  if (state.isPlaying) {
    return; // Agar o'yin davom etayotgan bo'lsa, yangi o'yinni boshlash mumkin emas
  }

  // Tugmani o'chirish
  playBtn.disabled = true;
  playBtn.textContent = "Ishlamoqda...";
  
  const maxPlays = getMaxPlays();
  
  // Barcha marta o'ynash
  await playMultipleGames(maxPlays);
  
  // Tugmani qayta yoqish
  updatePlayButton();
  
  // Sandiqga scroll qilish
  setTimeout(() => {
    chestCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 500);
});

const toggleTheme = () => {
  const root = document.documentElement;
  const nextTheme = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", nextTheme);
};

themeToggle?.addEventListener("click", toggleTheme);

scrollToForm?.addEventListener("click", () =>
  formCard.scrollIntoView({ behavior: "smooth" })
);

scrollToGame?.addEventListener("click", () =>
  gameCard.scrollIntoView({ behavior: "smooth" })
);

scrollToChest?.addEventListener("click", () =>
  chestCard.scrollIntoView({ behavior: "smooth" })
);

const updateDeleteButton = () => {
  const deleteBtn = document.querySelector("#deleteSelectedBtn");
  const checkboxes = document.querySelectorAll(".item-checkbox:checked");
  if (deleteBtn) {
    deleteBtn.disabled = checkboxes.length === 0;
    if (checkboxes.length > 0) {
      deleteBtn.textContent = `${checkboxes.length} ta o'chirish`;
    } else {
      deleteBtn.textContent = "Tanlanganlarni o'chirish";
    }
  }
};

const selectAllBtn = document.querySelector("#selectAllBtn");
const deleteSelectedBtn = document.querySelector("#deleteSelectedBtn");

selectAllBtn?.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(".item-checkbox");
  const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
  checkboxes.forEach((cb) => {
    cb.checked = !allChecked;
  });
  updateDeleteButton();
  selectAllBtn.textContent = allChecked ? "Barchasini tanlash" : "Tanlovni bekor qilish";
});

deleteSelectedBtn?.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(".item-checkbox:checked");
  if (checkboxes.length === 0) return;
  
  const idsToDelete = Array.from(checkboxes).map((cb) => cb.getAttribute("data-item-id"));
  state.inventory = state.inventory.filter((item) => !idsToDelete.includes(item.id));
  renderInventory();
});

// Sayt yuklanganda tugmani yangilash
updatePlayButton();

inventoryList?.addEventListener("change", (e) => {
  if (e.target.classList.contains("item-checkbox")) {
    updateDeleteButton();
    const checkboxes = document.querySelectorAll(".item-checkbox");
    const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
    if (selectAllBtn) {
      selectAllBtn.textContent = allChecked ? "Tanlovni bekor qilish" : "Barchasini tanlash";
    }
  }
});

// Settings modal funksiyalari
const settingsModal = document.querySelector("#settingsModal");
const settingsToggle = document.querySelector("#settingsToggle");
const closeSettings = document.querySelector("#closeSettings");
const apiKeyInput = document.querySelector("#apiKeyInput");
const saveApiKey = document.querySelector("#saveApiKey");
const clearApiKey = document.querySelector("#clearApiKey");

// Saqlangan API key ni yuklash
const savedApiKey = localStorage.getItem('openai_api_key');
if (savedApiKey && apiKeyInput) {
  apiKeyInput.value = savedApiKey;
}

settingsToggle?.addEventListener("click", () => {
  if (settingsModal) {
    settingsModal.style.display = "flex";
  }
});

closeSettings?.addEventListener("click", () => {
  if (settingsModal) {
    settingsModal.style.display = "none";
  }
});

settingsModal?.addEventListener("click", (e) => {
  if (e.target === settingsModal) {
    settingsModal.style.display = "none";
  }
});

saveApiKey?.addEventListener("click", () => {
  const key = apiKeyInput?.value.trim();
  if (key) {
    localStorage.setItem('openai_api_key', key);
    alert('API key saqlandi! Endi haqiqiy AI tekshiruv ishlatiladi.');
    settingsModal.style.display = "none";
  } else {
    alert('Iltimos, API key kiriting.');
  }
});

clearApiKey?.addEventListener("click", () => {
  if (confirm('API key ni o\'chirishni xohlaysizmi? Demo versiya ishlatiladi.')) {
    localStorage.removeItem('openai_api_key');
    if (apiKeyInput) apiKeyInput.value = '';
    alert('API key o\'chirildi. Demo versiya ishlatiladi.');
    settingsModal.style.display = "none";
  }
});

renderToys();
renderInventory();

