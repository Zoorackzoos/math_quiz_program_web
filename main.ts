// ============================================================
// main.ts — Entry point. Boots the app after the page loads.
// ============================================================

import {init} from "./src/app";

// Wait for the DOM to be ready before starting the app.
// DOMContentLoaded fires when the HTML is parsed.
document.addEventListener("DOMContentLoaded", () =>
{
    init();
});
