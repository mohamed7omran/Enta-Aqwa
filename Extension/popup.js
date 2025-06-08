// تحديث الإحصائيات عند فتح الصفحة
document.addEventListener("DOMContentLoaded", async () => {
  // استرجاع الإحصائيات من التخزين
  const stats = await chrome.storage.local.get([
    "blockedCount",
    "remindersCount",
  ]);

  // تحديث عداد الكلمات المحظورة
  const blockedCountElement = document.getElementById("blocked-count");
  blockedCountElement.textContent = stats.blockedCount || 0;

  // تحديث عداد التذكيرات
  const remindersCountElement = document.getElementById("reminders-count");
  remindersCountElement.textContent = stats.remindersCount || 0;

  // إضافة تأثير حركي للأرقام
  animateNumber(blockedCountElement, stats.blockedCount || 0);
  animateNumber(remindersCountElement, stats.remindersCount || 0);
});

// دالة لتأثير حركي للأرقام
function animateNumber(element, finalNumber) {
  let currentNumber = 0;
  const duration = 1000; // مدة الحركة بالمللي ثانية
  const steps = 20; // عدد الخطوات
  const increment = finalNumber / steps;
  const stepDuration = duration / steps;

  const interval = setInterval(() => {
    currentNumber += increment;
    if (currentNumber >= finalNumber) {
      currentNumber = finalNumber;
      clearInterval(interval);
    }
    element.textContent = Math.round(currentNumber);
  }, stepDuration);
}

// تحديث الإحصائيات في الوقت الفعلي
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "updateStats") {
    const blockedCountElement = document.getElementById("blocked-count");
    const remindersCountElement = document.getElementById("reminders-count");

    if (message.blockedCount !== undefined) {
      blockedCountElement.textContent = message.blockedCount;
      animateNumber(blockedCountElement, message.blockedCount);
    }

    if (message.remindersCount !== undefined) {
      remindersCountElement.textContent = message.remindersCount;
      animateNumber(remindersCountElement, message.remindersCount);
    }
  }
});

// إضافة مستمع حدث للزر
document.querySelector(".visit-button").addEventListener("click", () => {
  // فتح الموقع في نافذة جديدة
  chrome.tabs.create({
    url: "https://omranperfumes.shop",
  });
});
