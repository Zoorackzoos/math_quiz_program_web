// ============================================================
// types.ts — All shared data shapes for the quiz app.
// If you want to add a new field to questions or modules,
// add it here first, then use it in your JSON files.
// ============================================================

// A single answer choice for multiple-choice questions.
export interface Choice {
  label: string;   // The text shown to the user, supports LaTeX (wrap in $ ... $)
  value: string;   // The internal value checked against `correctAnswer`
}

// A single question inside a module.
export interface Question {
  id: number;                         // Unique number within the module (1, 2, 3, ...)
  prompt: string;                     // The question text. Wrap LaTeX in $...$ or $$...$$
  type: "text" | "multiple-choice";   // Answer field type

  // For type === "multiple-choice" only:
  choices?: Choice[];

  // The correct answer string.
  // For "text": the simplified arithmetic result, e.g. "42" or "3.14"
  // For "multiple-choice": the `value` field of the correct Choice
  correctAnswer: string;

  // Optional explanation shown on the results screen.
  explanation?: string;
}

// The full data shape for one module JSON file.
export interface Module {
  id: string;           // Unique slug, e.g. "algebra-basics". Used internally.
  title: string;        // Shown on the home screen button and module details screen
  description: string;  // Shown on the module details screen below the title
  image?: string;       // Path to an image, e.g. "assets/algebra.png". Optional.
  questions: Question[];
}
