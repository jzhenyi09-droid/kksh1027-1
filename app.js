"use strict";

const singleChoiceQuestions = [
  {
    id: "A1",
    prompt: "比較教材對土耳其與沙烏地阿拉伯的描述，下列何者符合教材？",
    options: [
      { id: "a", text: "土耳其相對寬容與西化，女性享有受教、參政及財產繼承權。" },
      { id: "b", text: "教材指出土耳其女性須由男性監護人同意才能就醫及工作。" },
      { id: "c", text: "沙烏地阿拉伯較寬容，女性可不受限制地選擇公共場所服裝。" },
      { id: "d", text: "教材指出沙烏地阿拉伯已廢除一夫四妻制度，而土耳其沒有廢除。" }
    ], answer: "a", explanation: "教材指出土耳其相對寬容與西化，並列出女性的受教權、參政權及財產繼承權。", anchor: "region-turkey"
  },
  {
    id: "A2",
    prompt: "依第68頁「監護法」文字框，沙烏地阿拉伯女性下列哪些事項需獲男性監護人同意？",
    options: [
      { id: "a", text: "接受教育、採取法律行動、出國、就醫、開車及工作。" },
      { id: "b", text: "只有穿著服裝需要同意，其餘均不需同意。" },
      { id: "c", text: "只有參政與財產繼承需要同意。" },
      { id: "d", text: "僅出國和開車需要同意，教育、就醫及工作不在教材列舉之中。" }
    ], answer: "a", explanation: "「監護法」小百科列出接受教育、法律行動、出國、就醫、開車及工作等事項。", anchor: "region-guardian"
  },
  {
    id: "A3",
    prompt: "關於清真寺建築形式，何者符合教材說明？",
    options: [
      { id: "a", text: "各地式樣沒有統一規定，會因環境就地取材，並受埃及、羅馬及波斯文明影響。" },
      { id: "b", text: "各地清真寺均採同一建築樣式，且不受其他文明影響。" },
      { id: "c", text: "清真寺只能使用木材建造，並依伊朗規定統一設計。" },
      { id: "d", text: "教材指出清真寺建築只受到印度文明影響。" }
    ], answer: "a", explanation: "教材明述清真寺式樣無統一規定，各區域依環境就地取材，並受到埃及、羅馬及波斯等文明影響。", anchor: "mosque-principles"
  },
  {
    id: "A4",
    prompt: "教材如何說明阿拔斯王朝時期伊斯蘭黃金時代的形成？",
    options: [
      { id: "a", text: "西亞位居東西往來位置，政治穩定、貿易興盛且對外來文化持開放態度。" },
      { id: "b", text: "西亞遠離東西交通，停止貿易並拒絕外來文化。" },
      { id: "c", text: "黃金時代是因清真寺建築全都採用同一式樣而形成。" },
      { id: "d", text: "教材將黃金時代歸因於女性服裝遮蔽程度一致。" }
    ], answer: "a", explanation: "教材將地理位置、政治穩定、貿易興盛、累積財富與對外文化開放列為形成背景。", anchor: "abbasid-golden-age"
  },
  {
    id: "A5",
    prompt: "關於當時的製圖成果，下列何者符合教材內容？",
    options: [
      { id: "a", text: "運用投影原理將球體特徵轉至平面，並結合見聞與旅行指南繪製地圖。" },
      { id: "b", text: "只將平面轉成球體，教材未提及地圖或旅行指南。" },
      { id: "c", text: "教材指出製圖僅靠智慧宮翻譯，不使用投影原理。" },
      { id: "d", text: "當時地圖只記錄醫典，不含地理資訊。" }
    ], answer: "a", explanation: "教材提到以投影將球體特徵轉到平面，並參考學者、商人見聞及麥加朝聖旅行指南等繪製地圖。", anchor: "geography-mapping"
  }
];

const matchingQuestions = [
  { id: "B1", prompt: "醫學", answer: "medical" },
  { id: "B2", prompt: "數學", answer: "math" },
  { id: "B3", prompt: "天文學", answer: "astronomy" },
  { id: "B4", prompt: "地理學", answer: "geography" },
  { id: "B5", prompt: "製圖", answer: "mapping" }
];
const matchingOptions = [
  { id: "medical", text: "醫典、醫院、醫生檢定、解剖學、外科學及隔離檢疫", explanation: "圖3-16及教材正文列出這些醫學成果。", anchor: "science-medicine" },
  { id: "math", text: "阿拉伯數字、代數、三角函數及幾何", explanation: "教材列出阿拉伯數字、代數、三角函數及幾何。", anchor: "science-math" },
  { id: "astronomy", text: "提出地球為球體、自轉並圍繞太陽公轉", explanation: "這是教材列出的天文學成果。", anchor: "science-astronomy" },
  { id: "geography", text: "地形演育、水循環、人與環境互動", explanation: "教材在地理學部分列出這些新見解。", anchor: "geography-study" },
  { id: "mapping", text: "運用投影轉換球體特徵至平面，結合見聞繪製地圖", explanation: "教材說明當時以投影原理將球體特徵轉至平面，並利用見聞、旅行指南等製圖。", anchor: "geography-mapping" }
];
const fillQuestion = {
  id: "C1",
  prompt: "阿拔斯王朝時期，翻譯希臘、羅馬、波斯與印度學術經典的機構稱為＿＿。",
  answers: ["智慧宮", "研究東西方學問的智慧宮", "智慧宫"],
  displayAnswer: "智慧宮",
  explanation: "教材記載當時設有研究東、西方學問的智慧宮，並翻譯希臘、羅馬、波斯與印度經典。",
  anchor: "wisdom-house"
};
const imageQuestions = [
  {
    id: "D1",
    prompt: "依圖3-15，教材列出的服裝中，覆蓋率最高、多半為藍色且常見於阿富汗的是哪一種？",
    options: [
      { id: "burqa", text: "布卡（Burqa）" },
      { id: "hijab", text: "希賈布（Hijab）" },
      { id: "abaya", text: "阿巴雅（Abaya）" },
      { id: "chador", text: "恰多爾（Chador）" }
    ], answer: "burqa", explanation: "圖3-15及服裝說明指出布卡覆蓋率最高、多半為藍色，常見於阿富汗。", anchor: "clothing-burqa"
  },
  {
    id: "D2",
    prompt: "依圖3-16，圖表中列有「醫生檢定、解剖學、外科學及隔離檢疫」的學科是哪一類？",
    options: [
      { id: "medical", text: "醫學" },
      { id: "math", text: "數學" },
      { id: "geography", text: "地理學" },
      { id: "astronomy", text: "天文學" }
    ], answer: "medical", explanation: "圖3-16將醫典、醫院、醫生檢定、解剖學、外科學及隔離檢疫列在醫學類。", anchor: "science-medicine"
  }
];

const form = document.getElementById("quizForm");
const results = document.getElementById("quizResults");
const dialog = document.getElementById("incompleteDialog");
const unansweredList = document.getElementById("unansweredList");
let pendingIncompleteSubmission = false;

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", [String.fromCharCode(34)]: "&quot;", [String.fromCharCode(39)]: "&#39;" })[character]);
}
function renderSingleChoice() {
  document.getElementById("sectionA").innerHTML = `<ol class="question-list">${singleChoiceQuestions.map((question) => `
    <li class="question-item" id="item-${question.id}">
      <fieldset class="question-fieldset"><legend class="question-prompt">${escapeHtml(question.prompt)}</legend>
        <ul class="option-list">${shuffle(question.options).map((option) => `
          <li><label><input type="radio" name="${question.id}" value="${option.id}"><span>${escapeHtml(option.text)}</span></label></li>
        `).join("")}</ul>
      </fieldset>
    </li>`).join("")}</ol>`;
}
function renderMatching() {
  const options = shuffle(matchingOptions);
  document.getElementById("sectionB").innerHTML = `<ol class="match-list">${matchingQuestions.map((question) => `
    <li class="question-item" id="item-${question.id}"><label for="answer-${question.id}"><strong>${escapeHtml(question.prompt)}</strong></label>
      <select id="answer-${question.id}" name="${question.id}"><option value="">請選擇配對內容</option>${options.map((option) => `<option value="${option.id}">${escapeHtml(option.text)}</option>`).join("")}</select>
    </li>`).join("")}</ol>`;
  updateMatchingAvailability();
}
function updateMatchingAvailability() {
  const selects = [...form.querySelectorAll(".match-list select")];
  const selectedValues = new Set(selects.map((select) => select.value).filter(Boolean));
  for (const select of selects) {
    for (const option of select.options) {
      if (option.value) option.disabled = option.value !== select.value && selectedValues.has(option.value);
    }
  }
}
function renderFill() {
  document.getElementById("sectionC").innerHTML = `<ol class="question-list"><li class="question-item" id="item-C1"><label for="answer-C1" class="question-prompt">${escapeHtml(fillQuestion.prompt)}</label><input id="answer-C1" name="C1" class="fill-input" type="text" autocomplete="off" aria-label="C1 關鍵詞填空"></li></ol>`;
}
function renderImageQuestions() {
  document.getElementById("sectionD").innerHTML = `<ol class="question-list">${imageQuestions.map((question) => `
    <li class="question-item" id="item-${question.id}"><fieldset class="question-fieldset"><legend class="question-prompt">${escapeHtml(question.prompt)}</legend>
      <ul class="option-list">${shuffle(question.options).map((option) => `
        <li><label><input type="radio" name="${question.id}" value="${option.id}"><span>${escapeHtml(option.text)}</span></label></li>
      `).join("")}</ul>
    </fieldset></li>`).join("")}</ol>`;
}
function renderQuiz() {
  renderSingleChoice();
  renderMatching();
  renderFill();
  renderImageQuestions();
  results.hidden = true;
  results.innerHTML = "";
  document.querySelectorAll(".quiz-group").forEach((group) => { group.hidden = false; });
}
function readAnswer(name) {
  const selected = form.querySelector(`[name="${name}"]:checked`);
  if (selected) return selected.value;
  const control = form.elements.namedItem(name);
  return control ? control.value : "";
}
function unansweredItems() {
  const missing = [];
  for (const question of [...singleChoiceQuestions, ...matchingQuestions, fillQuestion, ...imageQuestions]) {
    if (!String(readAnswer(question.id) || "").trim()) missing.push(question.id);
  }
  return missing;
}
function normalizedText(value) {
  return String(value).normalize("NFKC").replace(/\s+/gu, "").trim();
}
function buildResults() {
  const records = [];
  for (const question of singleChoiceQuestions) {
    const chosen = readAnswer(question.id);
    const correct = chosen === question.answer;
    const correctText = question.options.find((option) => option.id === question.answer).text;
    records.push({ group: "A｜單選題", id: question.id, correct, answer: correctText, explanation: question.explanation, anchor: question.anchor, response: chosen ? (correct ? "作答正確" : "作答錯誤") : "未作答，0分" });
  }
  for (const question of matchingQuestions) {
    const chosen = readAnswer(question.id);
    const expected = matchingOptions.find((option) => option.id === question.answer);
    const correct = chosen === question.answer;
    records.push({ group: "B｜配對題", id: question.id, correct, answer: expected.text, explanation: expected.explanation, anchor: expected.anchor, response: chosen ? (correct ? "作答正確" : "作答錯誤") : "未作答，0分" });
  }
  const fillValue = readAnswer(fillQuestion.id);
  const correctFill = fillQuestion.answers.some((answer) => normalizedText(answer) === normalizedText(fillValue));
  records.push({ group: "C｜關鍵詞填空", id: fillQuestion.id, correct: correctFill, answer: fillQuestion.displayAnswer, explanation: fillQuestion.explanation, anchor: fillQuestion.anchor, response: fillValue ? (correctFill ? "作答正確" : "作答錯誤") : "未作答，0分" });
  for (const question of imageQuestions) {
    const chosen = readAnswer(question.id);
    const correct = chosen === question.answer;
    const correctText = question.options.find((option) => option.id === question.answer).text;
    records.push({ group: "D｜圖片判讀題", id: question.id, correct, answer: correctText, explanation: question.explanation, anchor: question.anchor, response: chosen ? (correct ? "作答正確" : "作答錯誤") : "未作答，0分" });
  }
  return records;
}
function showResults() {
  pendingIncompleteSubmission = false;
  if (dialog.open) dialog.close();
  const records = buildResults();
  const score = records.filter((record) => record.correct).length;
  const grouped = new Map();
  for (const record of records) {
    if (!grouped.has(record.group)) grouped.set(record.group, []);
    grouped.get(record.group).push(record);
  }
  results.innerHTML = `<h3>作答結果</h3><p class="score-line">總分：${score}／${records.length}</p><ul><li>答對得 1 分；答錯或未作答得 0 分。</li></ul>${[...grouped.entries()].map(([group, items]) => `
    <section class="result-group"><h4>${escapeHtml(group)}</h4><ul class="result-list">${items.map((record) => `
      <li><strong>${escapeHtml(record.id)}</strong>：<span class="${record.correct ? "result-correct" : "result-wrong"}">${record.correct ? "✓ " : "✗ "}${escapeHtml(record.response)}</span>
        <div>正確答案：${escapeHtml(record.answer)}</div>
        <p class="result-explanation">解析：${escapeHtml(record.explanation)} <a href="#${escapeHtml(record.anchor)}">回教材段落</a></p>
      </li>`).join("")}</ul></section>`).join("")}`;
  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}
form.addEventListener("change", (event) => {
  if (event.target.matches(".match-list select")) updateMatchingAvailability();
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (pendingIncompleteSubmission) return;
  const missing = unansweredItems();
  if (missing.length) {
    unansweredList.innerHTML = missing.map((id) => `<li>${escapeHtml(id)}</li>`).join("");
    pendingIncompleteSubmission = true;
    dialog.showModal();
    return;
  }
  showResults();
});
document.getElementById("continueButton").addEventListener("click", () => {
  pendingIncompleteSubmission = false;
  dialog.close();
});
document.getElementById("submitAnywayButton").addEventListener("click", showResults);
document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
  const containingDetails = target ? target.closest("details") : null;
  if (containingDetails) containingDetails.open = true;
});
document.getElementById("restartButton").addEventListener("click", () => {
  if (dialog.open) dialog.close();
  pendingIncompleteSubmission = false;
  form.reset();
  renderQuiz();
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth", block: "start" });
});
renderQuiz();
