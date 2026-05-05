// ============================================================
// modules/index.ts — THE FILE YOU EDIT TO ADD NEW MODULES.
//
// HOW TO ADD A NEW MODULE:
//   1. Create a new JSON file in this folder, e.g. "my-module.json"
//      (Copy the format from "example-algebra.json")
//   2. Add one import line below, e.g.:
//        import myModule from "./my-module.json";
//   3. Add the imported variable to the `allModules` array below.
//   4. Save. The app will now show your new module on the home screen.
//
// That's it! No other files need to be changed.
// ============================================================

import {Module} from "../src/types";

// -- Import your module JSON files here --
import exampleAlgebra from "./example-algebra.json";
import exampleChemistry from "./example-chemistry.json";
import LinearAlgebraExam2Practice from "./Linear-Algebra-Exam-2-practice.json"
import LinearAlgebra314FinalPractice1 from "./Linear-Algebra-314-final-practice-1.json"
import LinearAlgebra314FinalPractice2 from "./Linear-Algebra-314-final-practice-2.json"
import LinearAlgebraReciPractice from "./Linear-Algebra-reci-practice.json"

// -- Add every imported module to this array --
// The order here is the order they appear on the home screen.
export const allModules: Module[] = [
    exampleAlgebra as Module,
    exampleChemistry as Module,
    LinearAlgebraExam2Practice as Module,
    LinearAlgebra314FinalPractice1 as Module,
    LinearAlgebra314FinalPractice2 as Module,
    LinearAlgebraReciPractice as Module,

    // Add more modules here, e.g.:
    // myNewModule as Module,
];
