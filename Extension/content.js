// قائمة الكلمات المحظورة
const forbiddenWords = [
  "porn",
  "xxx",
  "sex",
  "سكس",
  "عري",
  "فاحش",
  "محرم",
  "حرام",
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
    type: "verse",
    text: "وَلَا تَقْرَبُوا الزِّنَىٰ ۖ إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا",
    source: "سورة الإسراء - آية 32",
  },
  {
    type: "reminder",
    text: "اتقي الله، فوالله إنك لتراه وإنه لا يراك",
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

// متغير عام لتتبع حالة تفاعل المستخدم
let userInteracted = false;

// دالة لتحديث حالة تفاعل المستخدم
function updateUserInteraction() {
  userInteracted = true;
  console.log("[اتقي الله] تم تسجيل تفاعل المستخدم مع الصفحة");
}

// دالة للتحقق من وجود كلمات محظورة
function containsForbiddenWords(text) {
  if (!text) return { found: false };
  const lowerText = text.toLowerCase();
  for (const word of forbiddenWords) {
    if (lowerText.includes(word)) {
      console.log(`[اتقي الله] تم العثور على كلمة محظورة: "${word}"`);
      return { found: true, word: word };
    }
  }
  return { found: false };
}

// دالة للحصول على تذكير عشوائي
function getRandomReminder() {
  const randomIndex = Math.floor(Math.random() * reminders.length);
  const reminder = reminders[randomIndex];
  console.log(`[اتقي الله] تم اختيار التذكير: "${reminder.text}"`);
  return reminder;
}

// إنشاء عنصر النافذة المنبثقة
function createPopup() {
  console.log("[اتقي الله] جاري إنشاء النافذة المنبثقة...");

  // إزالة النافذة القديمة إذا كانت موجودة
  const oldPopup = document.getElementById("taqwa-popup");
  if (oldPopup) {
    oldPopup.remove();
  }

  const popup = document.createElement("div");
  popup.id = "taqwa-popup";
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    z-index: 999999;
    text-align: center;
    font-family: 'Arial', sans-serif;
    direction: rtl;
    min-width: 400px;
    max-width: 90vw;
    border: 2px solid #e74c3c;
    animation: popupFadeIn 0.3s ease-out;
  `;

  // إزالة الخلفية القديمة إذا كانت موجودة
  const oldOverlay = document.getElementById("taqwa-overlay");
  if (oldOverlay) {
    oldOverlay.remove();
  }

  document.body.appendChild(popup);
  console.log("[اتقي الله] تم إنشاء النافذة المنبثقة بنجاح");
  return popup;
}

// عرض النافذة المنبثقة
function showPopup() {
  console.log("[اتقي الله] جاري عرض النافذة المنبثقة...");
  const popup = createPopup();
  const reminder = getRandomReminder();

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
      
      <a href="https://islamweb.net" target="_blank" style="
        background-color: #3498db;
        color: white;
        padding: 12px 25px;
        border-radius: 10px;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease;
        display: inline-block;
      ">موقع إسلام ويب</a>
    </div>

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

  console.log("[اتقي الله] تم عرض النافذة المنبثقة والخلفية الشفافة بنجاح");
}

// مراقبة حقل البحث في Google
function observeGoogleSearch() {
  console.log("[اتقي الله] جاري البحث عن حقل البحث في Google...");
  const searchInput = document.querySelector(
    'textarea[name="q"], input[name="q"]'
  );
  if (searchInput) {
    console.log("[اتقي الله] تم العثور على حقل البحث في Google");

    // مراقبة أحداث الإدخال
    const inputHandler = (event) => {
      const text = event.target.value;
      console.log(`[اتقي الله] تم إدخال نص في Google: "${text}"`);
      if (containsForbiddenWords(text).found) {
        showPopup();
      }
    };

    // مراقبة الضغط على مفتاح Enter
    const keydownHandler = (event) => {
      if (event.key === "Enter") {
        const text = event.target.value;
        console.log(
          `[اتقي الله] تم الضغط على Enter في Google مع النص: "${text}"`
        );
        if (containsForbiddenWords(text).found) {
          showPopup();
        }
      }
    };

    searchInput.addEventListener("input", inputHandler);
    searchInput.addEventListener("keydown", keydownHandler);
  } else {
    console.log("[اتقي الله] لم يتم العثور على حقل البحث في Google");
  }
}

// مراقبة المدخلات في حقول النص
function observeInputs() {
  console.log("[اتقي الله] جاري البحث عن حقول الإدخال في الصفحة...");

  // دالة لمراقبة حقل إدخال واحد
  const observeInput = (input, index) => {
    const inputHandler = (event) => {
      const text = event.target.value || event.target.textContent || "";
      console.log(`[اتقي الله] تم إدخال نص في حقل ${index}: "${text}"`);
      if (containsForbiddenWords(text).found) {
        showPopup();
      }
    };

    const keydownHandler = (event) => {
      if (event.key === "Enter") {
        const text = event.target.value || event.target.textContent || "";
        console.log(
          `[اتقي الله] تم الضغط على Enter في حقل ${index} مع النص: "${text}"`
        );
        if (containsForbiddenWords(text).found) {
          showPopup();
        }
      }
    };

    input.addEventListener("input", inputHandler);
    input.addEventListener("keydown", keydownHandler);
  };

  // مراقبة حقول الإدخال الموجودة حالياً
  const existingInputs = document.querySelectorAll(
    'input[type="text"], textarea, [contenteditable="true"]'
  );
  console.log(
    `[اتقي الله] تم العثور على ${existingInputs.length} حقول إدخال في الصفحة`
  );

  existingInputs.forEach((input, index) => {
    console.log(
      `[اتقي الله] جاري إعداد المراقبة لحقل الإدخال رقم ${index + 1}`
    );
    observeInput(input, index + 1);
  });

  // مراقبة حقول الإدخال الجديدة
  console.log("[اتقي الله] جاري إعداد مراقبة حقول الإدخال الجديدة...");
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          const inputs = node.querySelectorAll(
            'input[type="text"], textarea, [contenteditable="true"]'
          );
          if (inputs.length > 0) {
            console.log(
              `[اتقي الله] تم اكتشاف ${inputs.length} حقول إدخال جديدة`
            );
          }
          inputs.forEach((input, index) => {
            console.log(
              `[اتقي الله] جاري إعداد المراقبة لحقل الإدخال الجديد رقم ${
                index + 1
              }`
            );
            observeInput(input, `جديد ${index + 1}`);
          });

          if (node.getAttribute("contenteditable") === "true") {
            console.log("[اتقي الله] تم اكتشاف عنصر قابل للتحرير جديد");
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
  console.log("[اتقي الله] تم إعداد مراقبة حقول الإدخال الجديدة بنجاح");
}

// دالة للتحقق من محتوى حقل البحث عند التحميل
function checkSearchInputOnLoad() {
  // تجنب إعادة الفحص إذا كانت النافذة المنبثقة موجودة بالفعل
  if (document.getElementById("taqwa-popup")) {
    return;
  }

  console.log("[اتقي الله] جاري التحقق من محتوى حقل البحث...");
  const searchInput = document.querySelector(
    'textarea[name="q"], input[name="q"]'
  );
  if (searchInput && searchInput.value) {
    console.log(
      `[اتقي الله] تم العثور على نص في حقل البحث: "${searchInput.value}"`
    );
    if (containsForbiddenWords(searchInput.value).found) {
      console.log(
        "[اتقي الله] تم العثور على كلمة محظورة في حقل البحث عند التحميل"
      );
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
    if (text && containsForbiddenWords(text).found) {
      console.log(`[اتقي الله] تم العثور على كلمة محظورة في حقل الإدخال`);
      showPopup();
      return true; // تم العثور على كلمة محظورة
    }
  }
  return false; // لم يتم العثور على كلمات محظورة
}

// بدء تشغيل الإضافة
console.log("[اتقي الله] جاري بدء تشغيل الإضافة...");

// التأكد من تحميل الصفحة بالكامل
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeExtension);
} else {
  initializeExtension();
}

function initializeExtension() {
  console.log("[اتقي الله] تم تحميل الصفحة، جاري بدء المراقبة...");

  // التحقق من محتوى حقل البحث عند التحميل
  checkSearchInputOnLoad();

  // بدء المراقبة
  observeGoogleSearch();
  observeInputs();
  console.log("[اتقي الله] تم بدء تشغيل الإضافة بنجاح");

  // مراقبة تغييرات عنوان URL (مهم للصفحات الديناميكية مثل Google)
  let lastUrl = location.href;
  let checkTimeout = null;

  new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      console.log(
        "[اتقي الله] تم تغيير عنوان الصفحة، جاري التحقق من المحتوى..."
      );

      // إلغاء الفحص السابق إذا كان موجوداً
      if (checkTimeout) {
        clearTimeout(checkTimeout);
      }

      // تأخير الفحص حتى يتم تحميل المحتوى
      checkTimeout = setTimeout(() => {
        if (!document.getElementById("taqwa-popup")) {
          checkSearchInputOnLoad();
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
            if (text && containsForbiddenWords(text).found) {
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
            if (text && containsForbiddenWords(text).found) {
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
