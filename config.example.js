/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║            HOTEL FORMS — EXAMPLE CONFIGURATION FILE             ║
 * ║                                                                  ║
 * ║  Copy this file → rename it to config.js → fill in your values. ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * HOW TO CONVERT YOUR LOGO TO BASE64
 * ───────────────────────────────────
 * 1. Go to https://www.base64-image.de/
 * 2. Upload your logo file (PNG recommended for transparency)
 * 3. Click "show code" and copy the full string starting with
 *    "data:image/png;base64,..."
 * 4. Paste it as the value of logoBase64 below.
 *
 * TIPS
 * ────
 * • Keep logo files small (< 200 KB) for fast PDF generation.
 * • PNG with transparent background looks best on PDFs.
 * • docPrefix is used in document numbers, e.g. "PIDV" → PIDV-SAF-001
 */

const HOTEL_CONFIG = {

  // ── Property identity ────────────────────────────────────────────
  hotelName:           "Park Inn by Radisson Example",
  navTagline:          "Mabuhay!",

  // ── Logos ────────────────────────────────────────────────────────
  logoBase64:          "data:image/png;base64,...",   // ← replace with your logo
  secondaryLogoBase64: "",                             // ← optional brand/chain logo

  // ── Named approvers ──────────────────────────────────────────────
  gmName:              "Juan dela Cruz",
  fcName:              "Maria Santos",
  hrDirectorName:      "Pedro Reyes",

  // ── Document number prefix ────────────────────────────────────────
  docPrefix:           "PIDV",   // → PIDV-SAF-001, PIDV-EBF-001, etc.

  // ── Privacy Policy / DPO ─────────────────────────────────────────
  dpoEmail:            "dpo@example-hotel.com",
  dpoPhone:            "+63 912 345 6789",
  hotelAddress:        "123 Example Street, Davao City, Philippines",

  // ── Misc ──────────────────────────────────────────────────────────
  emailPlaceholder:    "you@example-hotel.com",

};
