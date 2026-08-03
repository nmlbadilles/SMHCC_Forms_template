/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║               HOTEL FORMS — CONFIGURATION FILE                  ║
 * ║                                                                  ║
 * ║  Edit the values below to customise the app for your property.   ║
 * ║  This is the ONLY file you need to touch.                        ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * LOGO INSTRUCTIONS
 * -----------------
 * Convert your logo image to a Base64 string using any online tool,
 * e.g. https://www.base64-image.de/ — then paste the full
 * "data:image/png;base64,..." string as the value below.
 *
 * Leave as "" if you don't have a logo — the PDF will simply omit it.
 */

const HOTEL_CONFIG = {

  // ── Property identity ────────────────────────────────────────────
  hotelName:        "Your Hotel Name",       // Used in PDF footers, headers, privacy policy
  navTagline:       "Hotel Forms System",    // Small text shown in the top nav bar

  // ── Logos (Base64 strings) ───────────────────────────────────────
  // Primary hotel logo — appears on most PDFs (top-left)
  logoBase64:       "",  // ← paste "data:image/png;base64,..." here

  // Secondary / brand logo — appears on Travel Authorization PDF only (optional)
  secondaryLogoBase64: "",  // ← paste "data:image/png;base64,..." here (leave "" to hide)

  // ── Named approvers (printed on PDFs) ────────────────────────────
  gmName:           "General Manager",       // General Manager
  fcName:           "Financial Controller",  // Financial Controller
  hrDirectorName:   "HR Manager",            // HR Director / HR Manager

  // ── Document number prefixes ─────────────────────────────────────
  // Each form's document number will be: <prefix>-<code>-001
  // e.g. prefix "PIDV" → PIDV-SAF-001, PIDV-EBF-001, etc.
  docPrefix:        "DOC",

  // ── Privacy Policy / DPO contact ─────────────────────────────────
  dpoEmail:         "dpo@yourhotel.com",
  dpoPhone:         "[DPO Phone Number]",
  hotelAddress:     "[Hotel Address]",

  // ── Email placeholder ─────────────────────────────────────────────
  emailPlaceholder: "you@yourhotel.com",

};
