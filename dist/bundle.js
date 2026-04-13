"use strict";
(() => {
  // modules/example-algebra.json
  var example_algebra_default = {
    id: "example-algebra",
    title: "Algebra Basics",
    description: "Practice fundamental algebra: solving for variables, simplifying expressions, and working with linear equations.",
    image: "assets/algebra.png",
    questions: [
      {
        id: 1,
        prompt: "Solve for $x$: $$2x + 4 = 10$$",
        type: "text",
        correctAnswer: "3",
        explanation: "Subtract 4 from both sides to get $2x = 6$, then divide by 2."
      },
      {
        id: 2,
        prompt: "Simplify: $$3x + 5x - 2x$$",
        type: "text",
        correctAnswer: "6x",
        explanation: "Combine like terms: $(3 + 5 - 2)x = 6x$."
      },
      {
        id: 3,
        prompt: "Which of the following is the slope of $y = 3x + 7$?",
        type: "multiple-choice",
        choices: [
          { label: "$7$", value: "7" },
          { label: "$3$", value: "3" },
          { label: "$-3$", value: "-3" },
          { label: "$1$", value: "1" }
        ],
        correctAnswer: "3",
        explanation: "In slope-intercept form $y = mx + b$, $m$ is the slope."
      },
      {
        id: 4,
        prompt: "Evaluate: $$\\frac{x^2 - 9}{x - 3} \\text{ when } x = 5$$",
        type: "text",
        correctAnswer: "8",
        explanation: "Factor the numerator: $(x+3)(x-3)/(x-3) = x+3$. Then $5+3=8$."
      },
      {
        id: 5,
        prompt: "What is the $y$-intercept of $2y = 6x - 8$?",
        type: "multiple-choice",
        choices: [
          { label: "$-8$", value: "-8" },
          { label: "$3$", value: "3" },
          { label: "$-4$", value: "-4" },
          { label: "$6$", value: "6" }
        ],
        correctAnswer: "-4",
        explanation: "Divide both sides by 2: $y = 3x - 4$. The $y$-intercept is $-4$."
      }
    ]
  };

  // modules/example-chemistry.json
  var example_chemistry_default = {
    id: "example-chemistry",
    title: "Chemistry: Stoichiometry",
    description: "Mole calculations, balancing equations, and unit conversions in basic stoichiometry.",
    questions: [
      {
        id: 1,
        prompt: "How many moles are in $36\\text{ g}$ of water ($M = 18\\text{ g/mol}$)?",
        type: "text",
        correctAnswer: "2",
        explanation: "$n = m/M = 36/18 = 2$ mol."
      },
      {
        id: 2,
        prompt: "Which equation is correctly balanced? $$\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$$",
        type: "multiple-choice",
        choices: [
          { label: "$\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$", value: "a" },
          { label: "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$", value: "b" },
          { label: "$\\text{H}_2 + 2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$", value: "c" },
          { label: "$4\\text{H}_2 + \\text{O}_2 \\rightarrow 4\\text{H}_2\\text{O}$", value: "d" }
        ],
        correctAnswer: "b",
        explanation: "Coefficients 2, 1, 2 balance hydrogen (4) and oxygen (2) on both sides."
      },
      {
        id: 3,
        prompt: "How many molecules are in $1$ mole of $\\text{CO}_2$? (Avogadro's number = $6.022 \\times 10^{23}$)",
        type: "multiple-choice",
        choices: [
          { label: "$6.022 \\times 10^{22}$", value: "a" },
          { label: "$6.022 \\times 10^{23}$", value: "b" },
          { label: "$6.022 \\times 10^{24}$", value: "c" },
          { label: "$1.000 \\times 10^{23}$", value: "d" }
        ],
        correctAnswer: "b",
        explanation: "By definition, 1 mole of any substance contains exactly $6.022 \\times 10^{23}$ particles."
      }
    ]
  };

  // modules/index.ts
  var allModules = [
    example_algebra_default,
    example_chemistry_default
    // Add more modules here, e.g.:
    // myNewModule as Module,
  ];

  // src/app.ts
  var currentModuleIndex = -1;
  var userAnswers = [];
  function init() {
    renderHome();
  }
  function renderHome() {
    const app = getApp();
    app.innerHTML = `
    <div class="screen screen-home">
      <header class="home-header">
        <h1>Quiz App</h1>
        <p class="home-subtitle">Select a module to get started.</p>
      </header>
      <div class="module-grid" id="module-grid"></div>
    </div>
  `;
    const grid = document.getElementById("module-grid");
    allModules.forEach((mod, index) => {
      const btn = document.createElement("button");
      btn.className = "module-card";
      btn.innerHTML = `
      <div class="module-card-img-wrap">
        <img src="${mod.image || "assets/default.png"}"
             onerror="this.src='assets/default.png'"
             alt="${mod.title}" />
      </div>
      <div class="module-card-body">
        <span class="module-card-title">${mod.title}</span>
        <span class="module-card-count">${mod.questions.length} questions</span>
      </div>
    `;
      btn.addEventListener("click", () => renderDetails(index));
      grid.appendChild(btn);
    });
  }
  function renderDetails(moduleIndex) {
    currentModuleIndex = moduleIndex;
    const mod = allModules[moduleIndex];
    const app = getApp();
    app.innerHTML = `
    <div class="screen screen-details">
      <div class="details-left">
        <button class="btn-back" id="btn-back">\u2190 Back</button>
        <img class="details-image"
             src="${mod.image || "assets/default.png"}"
             onerror="this.src='assets/default.png'"
             alt="${mod.title}" />
        <h2 class="details-title">${mod.title}</h2>
        <p class="details-description">${mod.description}</p>

        <div class="details-question-list">
          <h3 class="details-list-heading">Questions in this module</h3>
          <ul id="question-preview-list"></ul>
        </div>
      </div>

      <div class="details-right">
        <div class="details-start-card">
          <p class="start-card-count">${mod.questions.length} questions</p>
          <button class="btn-start" id="btn-start">Start!</button>
        </div>
      </div>
    </div>
  `;
    const list = document.getElementById("question-preview-list");
    mod.questions.forEach((q) => {
      const li = document.createElement("li");
      li.className = "question-preview-item";
      li.innerHTML = `<span class="q-num">${q.id}.</span> <span class="q-text">${renderLatexString(q.prompt)}</span>`;
      list.appendChild(li);
    });
    document.getElementById("btn-back").addEventListener("click", renderHome);
    document.getElementById("btn-start").addEventListener("click", () => renderQuiz(moduleIndex));
  }
  function renderQuiz(moduleIndex) {
    const mod = allModules[moduleIndex];
    userAnswers = mod.questions.map(() => "");
    renderQuizQuestion(mod, 0);
  }
  function renderQuizQuestion(mod, questionIndex) {
    const app = getApp();
    const q = mod.questions[questionIndex];
    app.innerHTML = `
    <div class="screen screen-quiz">

      <!-- TAB BAR: one tab per question -->
      <div class="quiz-tabs" id="quiz-tabs"></div>

      <!-- QUESTION AREA -->
      <div class="quiz-body">
        <div class="quiz-question-card" id="question-card">
          <div class="quiz-question-prompt" id="question-prompt"></div>
          <div class="quiz-answer-area" id="answer-area"></div>
          <div class="quiz-preview-box" id="preview-box" style="display:none;">
            <span class="preview-label">Your answer preview:</span>
            <span class="preview-content" id="preview-content"></span>
          </div>
        </div>

        <!-- BOTTOM ACTION BUTTONS -->
        <div class="quiz-actions">
          <button class="btn-action" id="btn-preview-answer">Preview Answer</button>
          <button class="btn-action" id="btn-preview-test">Preview Test</button>
          <button class="btn-action btn-primary" id="btn-check-test">Check Test</button>
        </div>
      </div>
    </div>
  `;
    const tabBar = document.getElementById("quiz-tabs");
    mod.questions.forEach((_, i) => {
      const tab = document.createElement("button");
      tab.className = "quiz-tab" + (i === questionIndex ? " active" : "");
      tab.textContent = `Q${i + 1}`;
      tab.addEventListener("click", () => {
        saveCurrentAnswer(mod, questionIndex);
        renderQuizQuestion(mod, i);
      });
      tabBar.appendChild(tab);
    });
    const promptEl = document.getElementById("question-prompt");
    promptEl.innerHTML = renderLatexString(q.prompt);
    renderAllLatex(promptEl);
    const answerArea = document.getElementById("answer-area");
    if (q.type === "multiple-choice") {
      renderMultipleChoiceField(answerArea, q, questionIndex);
    } else {
      renderTextAnswerField(answerArea, q, questionIndex);
    }
    document.getElementById("btn-preview-answer").addEventListener("click", () => {
      saveCurrentAnswer(mod, questionIndex);
      const previewBox = document.getElementById("preview-box");
      const previewContent = document.getElementById("preview-content");
      previewBox.style.display = "flex";
      const raw = userAnswers[questionIndex];
      previewContent.textContent = raw ? simplifyExpression(raw) : "(no answer)";
    });
    document.getElementById("btn-preview-test").addEventListener("click", () => {
      saveCurrentAnswer(mod, questionIndex);
      showPreviewTestModal(mod);
    });
    document.getElementById("btn-check-test").addEventListener("click", () => {
      saveCurrentAnswer(mod, questionIndex);
      renderResults(mod);
    });
  }
  function renderTextAnswerField(container, q, index) {
    const wrapper = document.createElement("div");
    wrapper.className = "text-answer-wrapper";
    const input = document.createElement("input");
    input.type = "text";
    input.className = "text-answer-input";
    input.placeholder = "Type your answer here...";
    input.value = userAnswers[index] || "";
    input.addEventListener("input", () => {
      userAnswers[index] = input.value;
    });
    wrapper.appendChild(input);
    container.appendChild(wrapper);
  }
  function renderMultipleChoiceField(container, q, index) {
    if (!q.choices)
      return;
    const wrapper = document.createElement("div");
    wrapper.className = "mc-wrapper";
    q.choices.forEach((choice) => {
      const label = document.createElement("label");
      label.className = "mc-option";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question-${q.id}`;
      radio.value = choice.value;
      radio.checked = userAnswers[index] === choice.value;
      radio.addEventListener("change", () => {
        userAnswers[index] = choice.value;
        wrapper.querySelectorAll(".mc-option").forEach((el) => el.classList.remove("selected"));
        label.classList.add("selected");
      });
      if (radio.checked)
        label.classList.add("selected");
      const labelText = document.createElement("span");
      labelText.className = "mc-label-text";
      labelText.innerHTML = renderLatexString(choice.label);
      label.appendChild(radio);
      label.appendChild(labelText);
      wrapper.appendChild(label);
    });
    container.appendChild(wrapper);
    renderAllLatex(wrapper);
  }
  function saveCurrentAnswer(mod, questionIndex) {
    const q = mod.questions[questionIndex];
    if (q.type === "text") {
      const input = document.querySelector(".text-answer-input");
      if (input)
        userAnswers[questionIndex] = input.value;
    }
  }
  function showPreviewTestModal(mod) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
    <div class="modal-header">
      <h3>Test Preview</h3>
      <button class="modal-close" id="modal-close-btn">\u2715</button>
    </div>
    <div class="modal-body" id="modal-body"></div>
  `;
    const body = modal.querySelector("#modal-body");
    mod.questions.forEach((q, i) => {
      const item = document.createElement("div");
      item.className = "modal-preview-item";
      const answer = userAnswers[i];
      const displayAnswer = answer ? simplifyExpression(answer) : "(no answer)";
      item.innerHTML = `
      <div class="modal-q-prompt">${renderLatexString(q.prompt)}</div>
      <div class="modal-q-answer">Answer: <strong>${displayAnswer}</strong></div>
    `;
      body.appendChild(item);
      renderAllLatex(item);
    });
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    document.getElementById("modal-close-btn").addEventListener("click", () => {
      document.body.removeChild(overlay);
    });
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay)
        document.body.removeChild(overlay);
    });
  }
  function renderResults(mod) {
    const app = getApp();
    const graded = mod.questions.map((q, i) => {
      const raw = userAnswers[i] || "";
      const simplified = simplifyExpression(raw);
      const correct = simplified.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
      return { q, userAnswer: simplified, correct };
    });
    const numCorrect = graded.filter((g) => g.correct).length;
    const total = mod.questions.length;
    const pct = Math.round(numCorrect / total * 100);
    app.innerHTML = `
    <div class="screen screen-results">
      <div class="results-header">
        <h2>Results: ${mod.title}</h2>
        <div class="results-score">
          <span class="score-fraction">${numCorrect} / ${total}</span>
          <span class="score-pct">${pct}%</span>
        </div>
        <button class="btn-back" id="btn-exit">\u2190 Exit to Home</button>
      </div>
      <div class="results-list" id="results-list"></div>
    </div>
  `;
    const list = document.getElementById("results-list");
    graded.forEach(({ q, userAnswer, correct }) => {
      const card = document.createElement("div");
      card.className = "result-card " + (correct ? "result-correct" : "result-wrong");
      const explanationHtml = !correct && q.explanation ? `<div class="result-explanation">Explanation: ${renderLatexString(q.explanation)}</div>` : "";
      card.innerHTML = `
      <div class="result-card-header">
        <span class="result-q-num">Q${q.id}</span>
        <span class="result-status">${correct ? "\u2713 Correct" : "\u2717 Incorrect"}</span>
      </div>
      <div class="result-q-prompt">${renderLatexString(q.prompt)}</div>
      <div class="result-answer-row">
        <span class="result-answer-label">Your answer:</span>
        <span class="result-answer-value">${userAnswer || "(no answer)"}</span>
      </div>
      ${!correct ? `<div class="result-answer-row result-correct-row">
        <span class="result-answer-label">Correct answer:</span>
        <span class="result-answer-value">${q.correctAnswer}</span>
      </div>` : ""}
      ${explanationHtml}
    `;
      list.appendChild(card);
      renderAllLatex(card);
    });
    document.getElementById("btn-exit").addEventListener("click", renderHome);
  }
  function getApp() {
    return document.getElementById("app");
  }
  function renderLatexString(text) {
    if (!text)
      return "";
    let result = text;
    result = result.replace(/\$\$([\s\S]+?)\$\$/g, (_, math_) => {
      try {
        return katex.renderToString(math_, { displayMode: true, throwOnError: false });
      } catch {
        return `<span class="katex-error">${_}</span>`;
      }
    });
    result = result.replace(/\$([\s\S]+?)\$/g, (_, math_) => {
      try {
        return katex.renderToString(math_, { displayMode: false, throwOnError: false });
      } catch {
        return `<span class="katex-error">${_}</span>`;
      }
    });
    return result;
  }
  function renderAllLatex(container) {
    if (typeof window.renderMathInElement === "function") {
      window.renderMathInElement(container, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }
  function simplifyExpression(input) {
    if (!input || input.trim() === "")
      return "";
    const trimmed = input.trim();
    try {
      const result = math.evaluate(trimmed);
      if (typeof result === "number") {
        return String(Math.round(result * 1e10) / 1e10);
      }
      return trimmed;
    } catch {
      return trimmed;
    }
  }

  // main.ts
  document.addEventListener("DOMContentLoaded", () => {
    init();
  });
})();
