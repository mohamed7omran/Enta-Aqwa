// قائمة الكلمات المحظورة
const forbiddenWords = [
  // بالإنجليزي
  "porn",
  "pornhub",
  "xxx",
  "hentai",
  "nude",
  "nudity",
  "naked",
  "boobs",
  "tits",
  "breasts",
  "pussy",
  "vagina",
  "cock",
  "dick",
  "asshole",
  "anus",
  "anal",
  "blowjob",
  "handjob",
  "cum",
  "cumshot",
  "masturbation",
  "masturbate",
  "fap",
  "jerk",
  "jerk off",
  "spank",
  "bdsm",
  "bondage",
  "fetish",
  "orgy",
  "threesome",
  "gangbang",
  "rape",
  "incest",
  "bestiality",
  "zoophilia",
  "shemale",
  "tranny",
  "transsexual",
  "livecam",
  "sexcam",
  "camgirl",
  "camboy",
  "pornographic",
  "porno",
  "hardcore",
  "softcore",
  "sexvideo",
  "sexfilm",
  "erotic",
  "erotica",
  "adult",
  "xxxvideo",
  "sextoy",
  "dildo",
  "vibrator",
  "strapon",
  "g-spot",
  "rimjob",
  "pegging",
  "cuckold",
  "milf",
  "pube",
  "pubic",
  "cumlick",
  "deepthroat",
  "escort",
  "sitophilia",

  // بالعربي
  "سكس",
  "عري",
  "بز",
  "زب",
  "بزاز",
  "محارم",
  "قحبة",
  "عاهرة",
  "نيك",
  "متناك",
  "امتصاص",
  "كس",
  "طيز",
  "شرموطة",
  "طيزك",
  "كسك",
  "نيكم",
  "خلاعة",
  "فسخ",
  "فسخة",
  "كوس",
  "لزوقة",
  "معاكسات",
  "ملطشة",
  "نكشة",
  "اغتصاب",
  "مثلي",
  "شرجي",
  "محشش",
  "مارغ",
  "خروس",
  "لبوة",

  // تركيبات وأخطاء شائعة
  "s3x",
  "s3xy",
  "s3xual",
  "f4ck",
  "fuk",
  "fkc",
  "p0rn",
  "p0ussy",
  "p1ussy",
  "p1ssy",
  "3rotic",
  "nud3",
  "nude4u",
  "boob",
  "t1ts",
];

// قائمة الآيات القرآنية والتذكيرات
const reminders = [
  {
    type: "verse",
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا وَقُودُهَا النَّاسُ وَالْحِجَارَةُ",
    source: "سورة التحريم - آية 6",
  },
  {
    type: "verse",
    text: "إِنَّ السَّمْعَ وَالْبَصَرَ وَالْفُؤَادَ كُلُّ أُولَٰئِكَ كَانَ عَنْهُ مَسْئُولًا",
    source: "سورة الإسراء - آية 36",
  },

  {
    type: "reminder",
    text: "اتقي الله، فوالله إنك لا تراه وإنه ليراك",
    source: "حديث شريف",
  },
  {
    type: "reminder",
    text: "تذكر أن الملائكة تكتب كل ما تفعله",
    source: "تذكير",
  },
  {
    type: "reminder",
    text: "احذر من مواقع الفتنة، فإنها تورث الندامة",
    source: "تذكير",
  },
  {
    type: "reminder",
    text: "تذكر أنك ستقف بين يدي الله يوم القيامة",
    source: "تذكير",
  },
  {
    type: "reminder",
    text: "ابتعد عن الحرام، واعلم أن الله يراك في كل مكان",
    source: "تذكير",
  },
];

// تعديل قائمة الأصوات التذكيرية لاستخدام ملفات محلية
const audioReminders = [
  {
    type: "verse",
    url: chrome.runtime.getURL("assets/sounds/ان-الذين.mp3"),
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا",
    duration: 5,
  },
  {
    type: "reminder",
    url: chrome.runtime.getURL("assets/sounds/واذا.mp3"),
    text: "تذكر أن الله يراقبك",
    duration: 3,
  },
];

// متغير عام لتتبع حالة تفاعل المستخدم
let userInteracted = false;

// متغيرات للتحكم في الصوت
let currentAudio = null;
let isAudioEnabled = true;
let lastReminder = null;
let audioContext = null; // إضافة سياق الصوت

// إضافة متغيرات لتتبع الإحصائيات
let stats = {
  blockedCount: 0,
  remindersCount: 0,
};

// إضافة أنماط CSS للزر
const buttonStyles = `
    .visit-button {
       display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 90%;
            margin: 20px auto;
            padding: 12px 24px;
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .visit-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        background: linear-gradient(135deg, #45a049, #3d8b40);
        color: white !important;
    }

    .visit-button:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .visit-button i {
        font-size: 18px;
    }

    .visit-button a {
        color: white !important;
        text-decoration: none !important;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    @keyframes buttonSlideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .visit-button {
        animation: buttonSlideIn 0.5s ease forwards;
    }
`;

// إضافة الأنماط إلى الصفحة
const styleSheet = document.createElement("style");
styleSheet.textContent = buttonStyles;
document.head.appendChild(styleSheet);

// نظام الكشف عن الكلمات المحظورة
class WordFilter {
  constructor() {
    // تحويل القائمة إلى Set مع تنظيف الكلمات
    this.forbiddenWords = new Set(
      forbiddenWords.map((word) => word.toLowerCase().trim())
    );
    console.log(
      "  تم تحميل الكلمات المحظورة:",
      Array.from(this.forbiddenWords)
    );

    this.similarWords = {
      // العربية
      سكس: ["سك", "سكسس", "س كس", "س×س", "سُكْس", "سِكس", "س٣كس", "س-كس"],
      زبر: [
        "زبرر",
        "ز ب ر",
        "ز×بر",
        "زُبْر",
        "زِبر",
        "ز٣بر",
        "ز-بر",
        "زب",
        "زبي",
        "ازبار",
      ],
      كس: ["ك س", "ك×س", "كُس", "كِس", "ك٣س", "ك-س", "كسس", "كوس"],
      عري: ["عى", "عريي", "ع ر ي", "ع–ري", "ع3ر", "ع-ري"],
      نيك: ["نك", "نيكك", "ن3ك", "ن-يك", "نـيك"],
      // English
      porn: ["prn", "pr0n", "p0rn", "pornn", "pr0nn", "p0rnhub", "pr0nhub"],
      xxx: ["xx", "xxxx", "x x x", "x-x-x", "𝔵𝔵𝔵"],
      sex: ["sx", "s3x", "s-e-x", "s x", "5ex", "se×"],
    };
  }

  // تنظيف النص
  cleanText(text) {
    if (!text) return "";
    const cleaned = text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\u0600-\u06FF\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    console.log("  النص بعد التنظيف:", cleaned);
    return cleaned;
  }

  // التحقق من الكلمات المشابهة
  checkSimilarWords(text) {
    for (const [word, alternatives] of Object.entries(this.similarWords)) {
      // التحقق من الكلمة الأصلية
      if (text.includes(word)) {
        console.log(`  تم العثور على كلمة مشابهة محظورة: "${word}"`);
        return true;
      }

      // التحقق من البدائل
      for (const alt of alternatives) {
        if (text.includes(alt)) {
          console.log(`  تم العثور على بديل محظور: "${alt}" للكلمة "${word}"`);
          return true;
        }
      }

      // التحقق من الكلمات مع أرقام
      const wordWithNumbers = word.split("").join("[0-9]*");
      const regex = new RegExp(wordWithNumbers, "i");
      if (regex.test(text)) {
        console.log(`  تم العثور على كلمة محظورة مع أرقام: "${word}"`);
        return true;
      }
    }
    return false;
  }

  // التحقق من الكلمات المحظورة
  containsForbiddenWords(text) {
    if (!text) return false;

    const cleanText = this.cleanText(text);
    console.log("  جاري فحص النص:", cleanText);

    // التحقق من القائمة الرئيسية
    for (const word of this.forbiddenWords) {
      // استخدام تعبير نمطي أكثر دقة
      const regex = new RegExp(`(^|\\s)${word}(\\s|$)`, "i");
      if (regex.test(cleanText)) {
        console.log(`  تم العثور على كلمة محظورة مباشرة: "${word}"`);
        return true;
      }
    }

    // التحقق من الكلمات المشابهة
    if (this.checkSimilarWords(cleanText)) {
      return true;
    }

    // التحقق من الكلمات مع المسافات
    for (const word of this.forbiddenWords) {
      const spacedWord = word.split("").join("\\s*");
      const regex = new RegExp(spacedWord, "i");
      if (regex.test(cleanText)) {
        console.log(`  تم العثور على كلمة محظورة مع مسافات: "${word}"`);
        return true;
      }
    }

    return false;
  }
}

// إنشاء نسخة من الفلتر
const wordFilter = new WordFilter();

// دالة لتحديث حالة تفاعل المستخدم
function updateUserInteraction() {
  userInteracted = true;
  console.log("  تم تسجيل تفاعل المستخدم مع الصفحة");
}

// تعديل دالة checkInput
function checkInput(input) {
  if (!input) return false;

  const text = input.value || input.textContent || "";
  console.log("  جاري فحص النص المدخل:", text);

  if (wordFilter.containsForbiddenWords(text)) {
    console.log("  تم اكتشاف كلمات محظورة!");
    showPopup();
    return true;
  }

  return false;
}

// دالة للحصول على تذكير عشوائي
function getRandomReminder() {
  const randomIndex = Math.floor(Math.random() * reminders.length);
  const reminder = reminders[randomIndex];
  console.log(`  تم اختيار التذكير: "${reminder.text}"`);
  return reminder;
}

// دالة للحصول على تذكير صوتي عشوائي
function getRandomAudioReminder() {
  const randomIndex = Math.floor(Math.random() * audioReminders.length);
  return audioReminders[randomIndex];
}

// إنشاء عنصر النافذة المنبثقة
function createPopup() {
  // إنشاء الخلفية المعتمة
  const overlay = document.createElement("div");
  overlay.className = "taqwa-overlay";
  document.body.appendChild(overlay);

  // إنشاء النافذة المنبثقة
  const popup = document.createElement("div");
  popup.className = "taqwa-popup";

  // الحصول على تذكير عشوائي
  const reminder = getRandomReminder();

  // إنشاء محتوى النافذة المنبثقة
  popup.innerHTML = `
    <img src="${chrome.runtime.getURL(
      "assets/images/logo.png"
    )}" alt="شعار اتقي الله" class="taqwa-logo">
    
    <h2>تذكر قول الله تعالى</h2>
    
    ${
      reminder.type === "verse"
        ? `
      <div class="taqwa-verse">
        ${reminder.text}
        <span class="taqwa-verse-source">${reminder.source}</span>
      </div>
    `
        : `
      <div class="taqwa-reminder">
        ${reminder.text}
      </div>
    `
    }
    
    <p>تذكر أن الله يراك في كل مكان</p>
    
    <button class="taqwa-button" id="taqwa-close">
      <i class="fas fa-times"></i>
      إغلاق
    </button>
    
    <button class="taqwa-button secondary" id="taqwa-audio-toggle">
      <i class="fas fa-volume-up"></i>
      ${isAudioEnabled ? "إيقاف الصوت" : "تشغيل الصوت"}
    </button>
  `;

  // إضافة النافذة المنبثقة إلى الصفحة
  document.body.appendChild(popup);

  // إضافة مستمعي الأحداث
  const closeButton = popup.querySelector("#taqwa-close");
  const audioToggleButton = popup.querySelector("#taqwa-audio-toggle");

  closeButton.addEventListener("click", () => {
    popup.remove();
    overlay.remove();
  });

  audioToggleButton.addEventListener("click", () => {
    const newState = toggleAudio();
    audioToggleButton.innerHTML = `
      <i class="fas fa-volume-${newState ? "up" : "mute"}"></i>
      ${newState ? "إيقاف الصوت" : "تشغيل الصوت"}
    `;
  });

  // تشغيل التذكير الصوتي
  if (isAudioEnabled) {
    playAudioReminder();
  }

  return popup;
}

// عرض النافذة المنبثقة
function showPopup() {
  console.log("  جاري عرض النافذة المنبثقة...");
  const popup = createPopup();
  const reminder = getRandomReminder();

  // إضافة زر للتحكم في الصوت
  const audioControlHtml = `
    <div style="
      margin: 15px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    ">
      <button id="taqwa-audio-toggle" style="
        background-color: ${isAudioEnabled ? "#e74c3c" : "#95a5a6"};
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Arial', sans-serif;
        font-size: 14px;
        min-width: 120px;
      ">
        ${isAudioEnabled ? "إيقاف الصوت" : "تشغيل الصوت"}
      </button>
    </div>
  `;

  popup.innerHTML = `
    <div style="
      font-size: 28px;
      color: #e74c3c;
      margin-bottom: 20px;
      font-weight: bold;
      line-height: 1.4;
    ">${reminder.text}</div>
    
    <div style="
      font-size: 16px;
      color: #666;
      margin-bottom: 25px;
      font-style: italic;
    ">${reminder.source}</div>
    
    ${audioControlHtml}
    
    <div style="
      font-size: 18px;
      color: #2c3e50;
      margin-bottom: 30px;
      line-height: 1.6;
    ">تذكر أن الله يراقبك في كل مكان وزمان</div>

    <div style="
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 20px;
      flex-wrap: wrap;
    ">
      <a href="https://quran.com/ar/29?startingVerse=69" target="_blank" style="
        background-color: #27ae60;
        color: white;
        padding: 12px 25px;
        border-radius: 10px;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease;
        display: inline-block;
      ">اقرأ القرآن</a>
      
      <a href="https://www.youtube.com/watch?v=LlvDbdjzZZ0&list=PLKfl0Xv84wyJWdbFzaVpXdKXjJ4TYiS8s" target="_blank" style="
        background-color: #3498db;
        color: white;
        padding: 12px 25px;
        border-radius: 10px;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease;
        display: inline-block;
      ">  طهر قلبك</a>
    </div>
     <div class="stats-container">
        <!-- ... existing code ... -->
    </div>
    <button class="visit-button">
        <a href="https://omranperfumes.shop" target="_blank" >
          <i class="fas fa-external-link-alt"></i>
          اذهب الي الموقع
        </a>
    </button> 
    <div style="
      margin-top: 20px;
      font-size: 14px;
      color: #7f8c8d;
    ">هذا التذكير من إضافة "اتقي الله" لحمايتك من المحتوى غير اللائق</div>
  `;

  // إضافة خلفية شفافة مع تأثير ضبابي
  const overlay = document.createElement("div");
  overlay.id = "taqwa-overlay";
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 999998;
    animation: overlayFadeIn 0.3s ease-out;
  `;
  document.body.appendChild(overlay);

  // إضافة تأثيرات حركية للأزرار
  const buttons = popup.querySelectorAll("a, button");
  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "translateY(-2px)";
      button.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
    });
    button.addEventListener("mouseout", () => {
      button.style.transform = "translateY(0)";
      button.style.boxShadow = "none";
    });
  });

  // إضافة مستمع حدث لزر التحكم في الصوت
  const audioToggleButton = popup.querySelector("#taqwa-audio-toggle");
  if (audioToggleButton) {
    audioToggleButton.addEventListener("click", () => {
      const newState = toggleAudio();
      audioToggleButton.style.backgroundColor = newState
        ? "#e74c3c"
        : "#95a5a6";
      audioToggleButton.textContent = newState ? "إيقاف الصوت" : "تشغيل الصوت";
    });
  }

  console.log("  تم عرض النافذة المنبثقة والخلفية الشفافة بنجاح");

  // تشغيل التذكير الصوتي
  playAudioReminder();
}

// دالة لمنع إرسال النموذج
function preventFormSubmission(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("  تم منع إرسال النموذج بسبب وجود كلمة محظورة");
  showPopup();
  return false;
}

// دالة لمنع عرض نتائج البحث
function preventSearchResults() {
  // البحث عن عناصر نتائج البحث في Google
  const searchResults = document.querySelectorAll(
    "#search, #rso, .g, .rc, .srg"
  );
  searchResults.forEach((result) => {
    if (result) {
      result.style.display = "none";
    }
  });

  // إضافة رسالة بديلة
  const searchContainer = document.querySelector("#search, #rso, #main");
  if (searchContainer && !document.getElementById("taqwa-search-message")) {
    const message = document.createElement("div");
    message.id = "taqwa-search-message";
    message.style.cssText = `
      text-align: center;
      padding: 20px;
      margin: 20px;
      background: #fff3f3;
      border: 1px solid #ffcdd2;
      border-radius: 8px;
      direction: rtl;
      font-family: 'Arial', sans-serif;
    `;
    message.innerHTML = `
      <h2 style="color: #e74c3c; margin-bottom: 15px;">تم منع عرض النتائج</h2>
      <p style="color: #666; margin-bottom: 15px;">يرجى تجنب البحث عن المحتوى غير اللائق</p>
      <p style="color: #666;">تذكر أن الله يراقبك في كل مكان وزمان</p>
    `;
    searchContainer.prepend(message);
  }
}

// تعديل دالة checkAndPreventSubmission
function checkAndPreventSubmission(event, text) {
  if (wordFilter.containsForbiddenWords(text)) {
    preventFormSubmission(event);
    // إضافة مراقب لتغييرات DOM لمنع نتائج البحث
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const searchResults = document.querySelectorAll(
            "div.g, div[data-hveid]"
          );
          searchResults.forEach((result) => {
            if (result.style.display !== "none") {
              result.style.display = "none";
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return true;
  }
  return false;
}

// مراقبة حقل البحث في Google
function observeGoogleSearch() {
  console.log("  جاري البحث عن حقل البحث في Google...");
  const searchInput = document.querySelector(
    'textarea[name="q"], input[name="q"]'
  );
  if (searchInput) {
    console.log("  تم العثور على حقل البحث في Google");

    // مراقبة أحداث الإدخال
    const inputHandler = (event) => {
      const text = event.target.value;
      console.log(`  تم إدخال نص في Google: "${text}"`);
      if (wordFilter.containsForbiddenWords(text)) {
        showPopup();
      }
    };

    // مراقبة الضغط على مفتاح Enter
    const keydownHandler = (event) => {
      if (event.key === "Enter") {
        const text = event.target.value;
        console.log(`  تم الضغط على Enter في Google مع النص: "${text}"`);
        checkAndPreventSubmission(event, text);
      }
    };

    // إضافة مراقب لحدث submit للنموذج
    const form = searchInput.closest("form");
    if (form) {
      form.addEventListener("submit", (event) => {
        const text = searchInput.value;
        checkAndPreventSubmission(event, text);
      });
    }

    searchInput.addEventListener("input", inputHandler);
    searchInput.addEventListener("keydown", keydownHandler);
  } else {
    console.log("  لم يتم العثور على حقل البحث في Google");
  }
}

// مراقبة المدخلات في حقول النص
function observeInputs() {
  console.log("  جاري البحث عن حقول الإدخال في الصفحة...");

  // دالة لمراقبة حقل إدخال واحد
  const observeInput = (input, index) => {
    const inputHandler = (event) => {
      const text = event.target.value || event.target.textContent || "";
      console.log(`  تم إدخال نص في حقل ${index}: "${text}"`);
      if (wordFilter.containsForbiddenWords(text)) {
        showPopup();
      }
    };

    const keydownHandler = (event) => {
      if (event.key === "Enter") {
        const text = event.target.value || event.target.textContent || "";
        console.log(`  تم الضغط على Enter في حقل ${index} مع النص: "${text}"`);
        checkAndPreventSubmission(event, text);
      }
    };

    // إضافة مراقب لحدث submit للنموذج
    const form = input.closest("form");
    if (form) {
      form.addEventListener("submit", (event) => {
        const text = input.value || input.textContent || "";
        checkAndPreventSubmission(event, text);
      });
    }

    input.addEventListener("input", inputHandler);
    input.addEventListener("keydown", keydownHandler);
  };

  // مراقبة حقول الإدخال الموجودة حالياً
  const existingInputs = document.querySelectorAll(
    'input[type="text"], textarea, [contenteditable="true"]'
  );
  console.log(`  تم العثور على ${existingInputs.length} حقول إدخال في الصفحة`);

  existingInputs.forEach((input, index) => {
    console.log(`  جاري إعداد المراقبة لحقل الإدخال رقم ${index + 1}`);
    observeInput(input, index + 1);
  });

  // مراقبة حقول الإدخال الجديدة
  console.log("  جاري إعداد مراقبة حقول الإدخال الجديدة...");
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          const inputs = node.querySelectorAll(
            'input[type="text"], textarea, [contenteditable="true"]'
          );
          if (inputs.length > 0) {
            console.log(`  تم اكتشاف ${inputs.length} حقول إدخال جديدة`);
          }
          inputs.forEach((input, index) => {
            console.log(
              `  جاري إعداد المراقبة لحقل الإدخال الجديد رقم ${index + 1}`
            );
            observeInput(input, `جديد ${index + 1}`);
          });

          if (node.getAttribute("contenteditable") === "true") {
            console.log("  تم اكتشاف عنصر قابل للتحرير جديد");
            observeInput(node, "قابل للتحرير");
          }
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  console.log("  تم إعداد مراقبة حقول الإدخال الجديدة بنجاح");
}

// دالة للتحقق من محتوى حقل البحث عند التحميل
function checkSearchInputOnLoad() {
  // تجنب إعادة الفحص إذا كانت النافذة المنبثقة موجودة بالفعل
  if (document.getElementById("taqwa-popup")) {
    return;
  }

  console.log("  جاري التحقق من محتوى حقل البحث...");
  const searchInput = document.querySelector(
    'textarea[name="q"], input[name="q"]'
  );
  if (searchInput && searchInput.value) {
    console.log(`  تم العثور على نص في حقل البحث: "${searchInput.value}"`);
    if (wordFilter.containsForbiddenWords(searchInput.value)) {
      console.log("  تم العثور على كلمة محظورة في حقل البحث عند التحميل");
      showPopup();
      return true; // تم العثور على كلمة محظورة
    }
  }

  // التحقق من جميع حقول الإدخال الموجودة
  const allInputs = document.querySelectorAll(
    'input[type="text"], textarea, [contenteditable="true"]'
  );
  for (const input of allInputs) {
    const text = input.value || input.textContent || "";
    if (text && wordFilter.containsForbiddenWords(text)) {
      console.log(`  تم العثور على كلمة محظورة في حقل الإدخال`);
      showPopup();
      return true; // تم العثور على كلمة محظورة
    }
  }
  return false; // لم يتم العثور على كلمات محظورة
}

// دالة لإعادة تهيئة الصوت
function resetAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = "";
    currentAudio = null;
  }
  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
}

// دالة لتبديل حالة الصوت
function toggleAudio() {
  isAudioEnabled = !isAudioEnabled;
  if (!isAudioEnabled) {
    resetAudio();
  } else if (lastReminder) {
    // إعادة تشغيل آخر تذكير إذا كان الصوت مفعلاً
    playAudioReminder();
  }
  return isAudioEnabled;
}

// دالة محسنة لتشغيل التذكير الصوتي
async function playAudioReminder() {
  if (!isAudioEnabled) return;

  try {
    // إعادة تهيئة الصوت
    resetAudio();

    const reminder = getRandomAudioReminder();
    lastReminder = reminder;
    console.log(`  جاري تشغيل التذكير الصوتي: "${reminder.text}"`);

    // إنشاء سياق صوت جديد
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
      console.error("  خطأ في إنشاء سياق الصوت:", error);
      audioContext = null;
    }

    // إنشاء عنصر صوت جديد
    currentAudio = new Audio();
    currentAudio.volume = 0.7;

    // إضافة مستمعي الأحداث
    currentAudio.onended = () => {
      console.log("  انتهى التذكير الصوتي");
      resetAudio();
    };

    currentAudio.onerror = (error) => {
      console.error("  خطأ في تشغيل الصوت:", error);
      console.log("  رابط الصوت:", reminder.url);
      resetAudio();
      showAudioError();
    };

    // تحميل وتشغيل الصوت
    try {
      currentAudio.src = reminder.url;

      // انتظار تحميل الصوت
      await new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          reject(new Error("انتهت مهلة تحميل الصوت"));
        }, 10000);

        currentAudio.oncanplaythrough = () => {
          clearTimeout(timeoutId);
          resolve();
        };

        currentAudio.onerror = (error) => {
          clearTimeout(timeoutId);
          reject(error);
        };
      });

      // تشغيل الصوت
      try {
        if (audioContext && audioContext.state === "suspended") {
          await audioContext.resume();
        }
        await currentAudio.play();
        console.log("  تم تشغيل الصوت بنجاح");
      } catch (playError) {
        console.error("  خطأ في تشغيل الصوت:", playError);
        setupRetryPlayback();
      }
    } catch (error) {
      console.error("  فشل تحميل أو تشغيل الصوت:", error);
      console.log("  رابط الصوت:", reminder.url);
      resetAudio();
      showAudioError();
      setupRetryPlayback();
    }

    await updateStats("reminder");
  } catch (error) {
    console.error("  خطأ غير متوقع في تشغيل الصوت:", error);
    resetAudio();
    showAudioError();
  }
}

// دالة جديدة لإعداد محاولة تشغيل الصوت بعد التفاعل
function setupRetryPlayback() {
  // إزالة أي مستمعي أحداث سابقين
  document.removeEventListener("click", retryPlayback);

  // إضافة مستمع حدث جديد
  document.addEventListener("click", retryPlayback, { once: true });
}

// تعديل دالة retryPlayback
async function retryPlayback() {
  if (!lastReminder || !isAudioEnabled) return;

  try {
    console.log("  محاولة تشغيل الصوت بعد تفاعل المستخدم");

    // إعادة تهيئة الصوت
    resetAudio();

    // إنشاء سياق صوت جديد
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
      console.error("  خطأ في إنشاء سياق الصوت:", error);
      audioContext = null;
    }

    // إنشاء عنصر صوت جديد
    currentAudio = new Audio();
    currentAudio.volume = 0.7;
    currentAudio.src = lastReminder.url;

    // انتظار تحميل الصوت
    await new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error("انتهت مهلة تحميل الصوت"));
      }, 10000);

      currentAudio.oncanplaythrough = () => {
        clearTimeout(timeoutId);
        resolve();
      };

      currentAudio.onerror = (error) => {
        clearTimeout(timeoutId);
        reject(error);
      };
    });

    // تشغيل الصوت
    if (audioContext && audioContext.state === "suspended") {
      await audioContext.resume();
    }
    await currentAudio.play();
    console.log("  تم تشغيل الصوت بعد تفاعل المستخدم بنجاح");
  } catch (error) {
    console.error("  فشل تشغيل الصوت بعد التفاعل:", error);
    resetAudio();
    showAudioError();
  }
}

// دالة محسنة لعرض رسالة خطأ الصوت
function showAudioError() {
  const errorDiv = document.createElement("div");
  errorDiv.className = "taqwa-error";
  errorDiv.innerHTML = `
    <i class="fas fa-exclamation-circle"></i>
    <p>حدث خطأ في تشغيل الصوت. يرجى النقر على الصفحة ثم المحاولة مرة أخرى.</p>
  `;

  // إزالة أي رسائل خطأ سابقة
  const existingError = document.querySelector(".taqwa-error");
  if (existingError) {
    existingError.remove();
  }

  document.body.appendChild(errorDiv);

  // إزالة رسالة الخطأ بعد 5 ثواني
  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

// دالة لتحديث الإحصائيات
async function updateStats(type) {
  if (type === "blocked") {
    stats.blockedCount++;
  } else if (type === "reminder") {
    stats.remindersCount++;
  }

  // حفظ الإحصائيات في التخزين
  await chrome.storage.local.set(stats);

  // إرسال تحديث للصفحة التعريفية
  chrome.runtime.sendMessage({
    type: "updateStats",
    ...stats,
  });
}

// تحديث دالة checkForbiddenWords
async function checkForbiddenWords(text) {
  const hasForbiddenWords = wordFilter.containsForbiddenWords(text);
  if (hasForbiddenWords) {
    await updateStats("blocked");
  }
  return hasForbiddenWords;
}

// استرجاع الإحصائيات عند تحميل الصفحة
chrome.storage.local.get(["blockedCount", "remindersCount"], (result) => {
  stats = {
    blockedCount: result.blockedCount || 0,
    remindersCount: result.remindersCount || 0,
  };
});

// بدء تشغيل الإضافة
console.log("  جاري بدء تشغيل الإضافة...");

// التأكد من تحميل الصفحة بالكامل
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeExtension);
} else {
  initializeExtension();
}

function initializeExtension() {
  console.log("  تم تحميل الصفحة، جاري بدء المراقبة...");

  // التحقق من محتوى حقل البحث عند التحميل
  if (checkSearchInputOnLoad()) {
    preventSearchResults();
    playAudioReminder();
  }

  // بدء المراقبة
  observeGoogleSearch();
  observeInputs();
  console.log("  تم بدء تشغيل الإضافة بنجاح");

  // مراقبة تغييرات عنوان URL (مهم للصفحات الديناميكية مثل Google)
  let lastUrl = location.href;
  let checkTimeout = null;

  new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      console.log("  تم تغيير عنوان الصفحة، جاري التحقق من المحتوى...");

      // إلغاء الفحص السابق إذا كان موجوداً
      if (checkTimeout) {
        clearTimeout(checkTimeout);
      }

      // تأخير الفحص حتى يتم تحميل المحتوى
      checkTimeout = setTimeout(() => {
        if (!document.getElementById("taqwa-popup")) {
          if (checkSearchInputOnLoad()) {
            preventSearchResults();
            playAudioReminder();
          }
        }
      }, 1000);
    }
  }).observe(document, { subtree: true, childList: true });

  // مراقبة تغييرات DOM للتحقق من حقول الإدخال الجديدة فقط
  const observer = new MutationObserver((mutations) => {
    // تجنب الفحص إذا كانت النافذة المنبثقة موجودة
    if (document.getElementById("taqwa-popup")) {
      return;
    }

    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === 1) {
          // عنصر HTML
          // التحقق فقط من العناصر المضافة حديثاً
          if (
            node.matches(
              'input[type="text"], textarea, [contenteditable="true"]'
            )
          ) {
            const text = node.value || node.textContent || "";
            if (text && wordFilter.containsForbiddenWords(text)) {
              showPopup();
              return;
            }
          }

          // البحث عن حقول الإدخال داخل العنصر المضاف
          const inputs = node.querySelectorAll(
            'input[type="text"], textarea, [contenteditable="true"]'
          );
          for (const input of inputs) {
            const text = input.value || input.textContent || "";
            if (text && wordFilter.containsForbiddenWords(text)) {
              showPopup();
              return;
            }
          }
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // إضافة مستمعي الأحداث لتتبع تفاعل المستخدم
  document.addEventListener("click", updateUserInteraction);
  document.addEventListener("keydown", updateUserInteraction);
  document.addEventListener("scroll", updateUserInteraction);
  document.addEventListener("mousemove", updateUserInteraction);
}
