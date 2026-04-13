// ============================================================
// app.ts — Main application logic.
//
// This file controls all screen transitions and user interactions.
// It is structured as a simple "state machine":
//   currentScreen tells us which screen is visible,
//   and each screen has its own render function.
//
// SCREENS:
//   "home"    → Home screen with module selection buttons
//   "details" → Module details screen (description, question list, Start button)
//   "quiz"    → The question answering screen
//   "results" → The results screen after checking the test
// ============================================================

import {allModules} from "../modules";
import {Module, Question} from "./types";

// ---- Math expression simplifier (uses math.js via CDN) ----
// math.js is a library for parsing and evaluating math expressions.
// See: https://mathjs.org/
declare const math: any; // math.js loaded via <script> tag in index.html

// ---- KaTeX renderer ----
// KaTeX renders LaTeX strings into HTML.
// See: https://katex.org/
declare const katex: any; // katex loaded via <script> tag in index.html

// ============================================================
// STATE — Everything the app needs to remember between renders.
// ============================================================
let currentModuleIndex: number = -1;  // Which module is selected
let userAnswers: string[] = [];        // The user's current answers (indexed by question id-1)

// ============================================================
// ENTRY POINT — Called once when the page loads.
// ============================================================
export function init(): void
{
    renderHome();
}

// ============================================================
// SCREEN: HOME
// ============================================================
function renderHome(): void
{
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

    const grid = document.getElementById("module-grid")!;

    // Render one button per module. To add modules, edit modules/index.ts.
    allModules.forEach((mod, index) =>
    {
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

// ============================================================
// SCREEN: MODULE DETAILS
// ============================================================
function renderDetails(moduleIndex: number): void
{
    currentModuleIndex = moduleIndex;
    const mod: Module = allModules[moduleIndex];
    const app = getApp();

    app.innerHTML = `
    <div class="screen screen-details">
      <div class="details-left">
        <button class="btn-back" id="btn-back">← Back</button>
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

    // Populate the scrollable question list
    const list = document.getElementById("question-preview-list")!;
    mod.questions.forEach((q) =>
    {
        const li = document.createElement("li");
        li.className = "question-preview-item";
        // Render LaTeX in the preview. renderLatex strips $$ delimiters.
        li.innerHTML = `<span class="q-num">${q.id}.</span> <span class="q-text">${renderLatexString(q.prompt)}</span>`;
        list.appendChild(li);
    });

    document.getElementById("btn-back")!.addEventListener("click", renderHome);
    document.getElementById("btn-start")!.addEventListener("click", () => renderQuiz(moduleIndex));
}

// ============================================================
// SCREEN: QUIZ
// ============================================================
function renderQuiz(moduleIndex: number): void
{
    const mod: Module = allModules[moduleIndex];
    // Reset answers array to empty strings, one slot per question
    userAnswers = mod.questions.map(() => "");

    // Start by showing the first question
    renderQuizQuestion(mod, 0);
}

// Renders the quiz screen for a given question index.
// Called again whenever the user switches tabs.
function renderQuizQuestion(mod: Module, questionIndex: number): void
{
    const app = getApp();
    const q: Question = mod.questions[questionIndex];

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

    // -- Build tab bar --
    const tabBar = document.getElementById("quiz-tabs")!;
    mod.questions.forEach((_, i) =>
    {
        const tab = document.createElement("button");
        tab.className = "quiz-tab" + (i === questionIndex ? " active" : "");
        tab.textContent = `Q${i + 1}`;
        tab.addEventListener("click", () =>
        {
            // Save current answer before switching tabs
            saveCurrentAnswer(mod, questionIndex);
            renderQuizQuestion(mod, i);
        });
        tabBar.appendChild(tab);
    });

    // -- Render question prompt with KaTeX --
    const promptEl = document.getElementById("question-prompt")!;
    promptEl.innerHTML = renderLatexString(q.prompt);
    // Re-run KaTeX on any LaTeX blocks that were injected
    renderAllLatex(promptEl);

    // -- Render answer area depending on question type --
    const answerArea = document.getElementById("answer-area")!;
    if (q.type === "multiple-choice")
    {
        renderMultipleChoiceField(answerArea, q, questionIndex);
    } else
    {
        renderTextAnswerField(answerArea, q, questionIndex);
    }

    // -- Preview Answer button --
    document.getElementById("btn-preview-answer")!.addEventListener("click", () =>
    {
        saveCurrentAnswer(mod, questionIndex);
        const previewBox = document.getElementById("preview-box")!;
        const previewContent = document.getElementById("preview-content")!;
        previewBox.style.display = "flex";
        const raw = userAnswers[questionIndex];
        previewContent.textContent = raw ? simplifyExpression(raw) : "(no answer)";
    });

    // -- Preview Test button: shows an alert summary of all answers --
    document.getElementById("btn-preview-test")!.addEventListener("click", () =>
    {
        saveCurrentAnswer(mod, questionIndex);
        showPreviewTestModal(mod);
    });

    // -- Check Test button --
    document.getElementById("btn-check-test")!.addEventListener("click", () =>
    {
        saveCurrentAnswer(mod, questionIndex);
        renderResults(mod);
    });
}

// Renders a text input answer field.
function renderTextAnswerField(container: HTMLElement, q: Question, index: number): void
{
    const wrapper = document.createElement("div");
    wrapper.className = "text-answer-wrapper";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "text-answer-input";
    input.placeholder = "Type your answer here...";
    // Restore previously typed answer if the user has been here before
    input.value = userAnswers[index] || "";
    input.addEventListener("input", () =>
    {
        userAnswers[index] = input.value;
    });

    wrapper.appendChild(input);
    container.appendChild(wrapper);
}

// Renders a multiple-choice field with radio-button-style cards.
function renderMultipleChoiceField(container: HTMLElement, q: Question, index: number): void
{
    if (!q.choices) return;
    const wrapper = document.createElement("div");
    wrapper.className = "mc-wrapper";

    q.choices.forEach((choice) =>
    {
        const label = document.createElement("label");
        label.className = "mc-option";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `question-${q.id}`;
        radio.value = choice.value;
        radio.checked = userAnswers[index] === choice.value;
        radio.addEventListener("change", () =>
        {
            userAnswers[index] = choice.value;
            // Visually mark selected option
            wrapper.querySelectorAll(".mc-option").forEach(el => el.classList.remove("selected"));
            label.classList.add("selected");
        });

        if (radio.checked) label.classList.add("selected");

        const labelText = document.createElement("span");
        labelText.className = "mc-label-text";
        labelText.innerHTML = renderLatexString(choice.label);

        label.appendChild(radio);
        label.appendChild(labelText);
        wrapper.appendChild(label);
    });

    container.appendChild(wrapper);
    // Render KaTeX inside the new elements
    renderAllLatex(wrapper);
}

// Saves the current answer from the DOM back to userAnswers[].
// Called before switching tabs or checking the test.
function saveCurrentAnswer(mod: Module, questionIndex: number): void
{
    const q = mod.questions[questionIndex];
    if (q.type === "text")
    {
        const input = document.querySelector(".text-answer-input") as HTMLInputElement;
        if (input) userAnswers[questionIndex] = input.value;
    }
    // Multiple-choice answers are saved via the radio change listener, so nothing extra needed.
}

// ============================================================
// MODAL: PREVIEW TEST
// Shows a read-only list of all questions and current answers.
// ============================================================
function showPreviewTestModal(mod: Module): void
{
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
    <div class="modal-header">
      <h3>Test Preview</h3>
      <button class="modal-close" id="modal-close-btn">✕</button>
    </div>
    <div class="modal-body" id="modal-body"></div>
  `;

    const body = modal.querySelector("#modal-body")!;
    mod.questions.forEach((q, i) =>
    {
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

    document.getElementById("modal-close-btn")!.addEventListener("click", () =>
    {
        document.body.removeChild(overlay);
    });
    overlay.addEventListener("click", (e) =>
    {
        if (e.target === overlay) document.body.removeChild(overlay);
    });
}

// ============================================================
// SCREEN: RESULTS
// ============================================================
function renderResults(mod: Module): void
{
    const app = getApp();

    // Grade each question
    const graded = mod.questions.map((q, i) =>
    {
        const raw = userAnswers[i] || "";
        const simplified = simplifyExpression(raw);
        const correct = simplified.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
        return {q, userAnswer: simplified, correct};
    });

    const numCorrect = graded.filter(g => g.correct).length;
    const total = mod.questions.length;
    const pct = Math.round((numCorrect / total) * 100);

    app.innerHTML = `
    <div class="screen screen-results">
      <div class="results-header">
        <h2>Results: ${mod.title}</h2>
        <div class="results-score">
          <span class="score-fraction">${numCorrect} / ${total}</span>
          <span class="score-pct">${pct}%</span>
        </div>
        <button class="btn-back" id="btn-exit">← Exit to Home</button>
      </div>
      <div class="results-list" id="results-list"></div>
    </div>
  `;

    const list = document.getElementById("results-list")!;

    graded.forEach(({q, userAnswer, correct}) =>
    {
        const card = document.createElement("div");
        card.className = "result-card " + (correct ? "result-correct" : "result-wrong");

        // Show explanation if provided and the answer was wrong
        const explanationHtml = (!correct && q.explanation)
            ? `<div class="result-explanation">Explanation: ${renderLatexString(q.explanation)}</div>`
            : "";

        card.innerHTML = `
      <div class="result-card-header">
        <span class="result-q-num">Q${q.id}</span>
        <span class="result-status">${correct ? "✓ Correct" : "✗ Incorrect"}</span>
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

    document.getElementById("btn-exit")!.addEventListener("click", renderHome);
}

// ============================================================
// UTILITIES
// ============================================================

// Returns the main app container div.
function getApp(): HTMLElement
{
    return document.getElementById("app")!;
}

// Converts a LaTeX string (with $ and $$ delimiters) into HTML
// using KaTeX. Non-math text is passed through as-is.
// Supports: $$display mode$$ and $inline mode$
function renderLatexString(text: string): string
{
    if (!text) return "";

    // Replace $$...$$ (display mode) first, then $...$ (inline mode)
    let result = text;

    // Display math: $$...$$
    result = result.replace(/\$\$([\s\S]+?)\$\$/g, (_, math_) =>
    {
        try
        {
            return katex.renderToString(math_, {displayMode: true, throwOnError: false});
        } catch
        {
            return `<span class="katex-error">${_}</span>`;
        }
    });

    // Inline math: $...$
    result = result.replace(/\$([\s\S]+?)\$/g, (_, math_) =>
    {
        try
        {
            return katex.renderToString(math_, {displayMode: false, throwOnError: false});
        } catch
        {
            return `<span class="katex-error">${_}</span>`;
        }
    });

    return result;
}

// Re-renders any KaTeX elements inside a container.
// Call this after injecting HTML that contains LaTeX.
function renderAllLatex(container: HTMLElement): void
{
    // KaTeX auto-render: finds and renders all $...$ and $$...$$ in the element.
    // See: https://katex.org/docs/autorender.html
    if (typeof (window as any).renderMathInElement === "function")
    {
        (window as any).renderMathInElement(container, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false},
            ],
            throwOnError: false,
        });
    }
}

// Tries to evaluate/simplify a math expression using math.js.
// If it can't parse it (e.g. "6x"), returns the string as-is.
// Examples:
//   "2+2"    → "4"
//   "10/2"   → "5"
//   "6x"     → "6x"  (symbolic, not evaluated)
//   "hello"  → "hello"
export function simplifyExpression(input: string): string
{
    if (!input || input.trim() === "") return "";
    const trimmed = input.trim();
    try
    {
        // math.evaluate() can handle arithmetic. For symbolic expressions it may throw.
        const result = math.evaluate(trimmed);
        // Only use the evaluated result if it's a plain number
        if (typeof result === "number")
        {
            // Round to avoid floating point noise, e.g. 0.1+0.2 → 0.3
            return String(Math.round(result * 1e10) / 1e10);
        }
        return trimmed;
    } catch
    {
        // Not a numeric expression — return as-is (e.g. "6x", "sin(x)")
        return trimmed;
    }
}
