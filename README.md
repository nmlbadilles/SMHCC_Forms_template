# 🏨 Hotel IT Forms

A self-contained, single-page web application for generating branded hotel HR and IT forms as PDF files. No backend required — runs entirely in the browser.

---

## ✨ Features

- System Access Request
- Equipment Borrowing Form
- IT Work Request Form
- Contractors / Suppliers Work Permit
- Request for Check Payment
- Kitchen Order Form
- Transport Requisition Form
- Request of Employment Certificate
- Request for Manpower
- Travel Authorization
- Cross-Training Form (Section One & Two)
- Business Meetings / Entertainment Form
- Employee Gatepass (2-copy layout)
- PDF attachment support (images & PDFs appended as pages)

---

## 🚀 Quick Setup (for a new property)

### 1. Clone the repository

```bash
git clone https://github.com/your-org/hotel-it-forms.git
cd hotel-it-forms
```

### 2. Create your config file

```bash
cp config.example.js config.js
```

Then open `config.js` in any text editor and fill in your property details:

```js
const HOTEL_CONFIG = {
  hotelName:        "Park Inn by Radisson Example",
  navTagline:       "Mabuhay!",
  logoBase64:       "data:image/png;base64,...",  // ← your logo
  secondaryLogoBase64: "",
  gmName:           "Juan dela Cruz",
  fcName:           "Maria Santos",
  hrDirectorName:   "Pedro Reyes",
  docPrefix:        "PIDV",
  dpoEmail:         "dpo@example-hotel.com",
  dpoPhone:         "+63 912 345 6789",
  hotelAddress:     "123 Example Street, Davao City, Philippines",
  emailPlaceholder: "you@example-hotel.com",
};
```

### 3. Add your logo

1. Go to [https://www.base64-image.de/](https://www.base64-image.de/)
2. Upload your hotel logo (PNG with transparent background works best)
3. Click **"show code"** and copy the full `data:image/png;base64,...` string
4. Paste it as the value of `logoBase64` in `config.js`

### 4. Open the app

Just open `index.html` in a browser — no server needed.

For network/shared access, deploy to IIS, Nginx, Apache, Vercel, or Netlify.

---

## 📁 Project Structure

```
📁 hotel-it-forms/
├── index.html          ← Main application (do not edit for customisation)
├── config.js           ← YOUR property settings (edit this)
├── config.example.js   ← Reference template (do not edit)
└── README.md           ← This file
```

> ⚠️ **Only edit `config.js`.** All property-specific values live there.

---

## ⚙️ Configuration Reference

| Key | Description | Example |
|---|---|---|
| `hotelName` | Full property name, used in PDF headers/footers | `"Park Inn by Radisson Davao"` |
| `navTagline` | Small text shown in the top navigation bar | `"Mabuhay ug Madayaw!"` |
| `logoBase64` | Hotel logo as Base64 string | `"data:image/png;base64,..."` |
| `secondaryLogoBase64` | Chain/brand logo (Travel Auth PDF only) | `""` to hide |
| `gmName` | General Manager's full name | `"Sven Toune"` |
| `fcName` | Financial Controller's full name | `"Medilyn Mencias"` |
| `hrDirectorName` | HR Director/Manager's full name | `"Natasha Mendoza"` |
| `docPrefix` | Prefix for document numbers | `"PIDV"` → `PIDV-SAF-001` |
| `dpoEmail` | Data Protection Officer email | `"dpo@hotel.com"` |
| `dpoPhone` | DPO contact number | `"+63 912 345 6789"` |
| `hotelAddress` | Full hotel address (Privacy Policy) | `"123 Street, Davao City"` |
| `emailPlaceholder` | Placeholder for email input field | `"you@hotel.com"` |

---

## 🔒 Privacy & Data

This application stores **no data server-side**. All form data lives only in browser memory and is discarded when the page is closed. PDFs are generated client-side and downloaded directly.

See the in-app **Privacy Policy** (footer link) for the full data handling statement. Update `dpoEmail`, `dpoPhone`, and `hotelAddress` in `config.js` to reflect your property's DPO contact.

---

## 🏗️ Deployment Options

| Option | Best for |
|---|---|
| **IIS (Windows Server)** | Hotel internal network, no internet required |
| **Vercel / Netlify** | Quick public or staff-facing deployment |
| **GitHub Pages** | Free, simple, public |
| **Nginx / Apache** | Linux-based server |

For IIS: copy all three files (`index.html`, `config.js`, `config.example.js`) into your IIS site folder.

---

## 🛠️ Customising Further

If you need to change form layouts, approval labels, or add new forms, edit `index.html` directly. All PDF generation logic is in the `<script>` block at the bottom of the file.

---

## 📄 License

Internal hotel use. Not for public distribution without permission.
