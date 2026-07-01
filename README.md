# 🧸 Little Todd's Play Group & Nursery

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFDF00)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

A premium, modern, and highly interactive landing page for **Little Todd's Play Group & Nursery** located in Kondhwa, Pune. This web application is designed to showcase the school's programs, core values, facilities, and contact details, and provides a direct WhatsApp-based inquiry system for parents seeking admission for the 2026–2027 academic year.

---

## 🔗 Live Demo
🌐 [Live Demo Link](https://littletodds.vercel.app) *(Update this placeholder link with your deployed Vercel domain)*

---

## 📸 Screenshots

> [!NOTE]
> Add application screenshots to your repository to showcase your design on different devices.

| Desktop Preview | Mobile Responsive Preview |
| :---: | :---: |
| ![Desktop Screenshot Placeholder](https://via.placeholder.com/800x450.png?text=Desktop+Preview+Placeholder) | ![Mobile Screenshot Placeholder](https://via.placeholder.com/300x600.png?text=Mobile+Preview+Placeholder) |

*Instructions to replace placeholders:*
1. Take high-quality screenshots of the website.
2. Upload the images to a folder (e.g. `public/screenshots/`).
3. Replace the placeholder URLs in this table with your relative paths: `public/screenshots/desktop.png` and `public/screenshots/mobile.png`.

---

## ✨ Features

- **🏫 Programs Showcase**: Displays age-appropriate curricula for **Play Group** (2–3 years), **Nursery** (3–4 years), **L.K.G** (4–5 years), and **U.K.G** (5–6 years) with pre-filled, customized WhatsApp inquiry links for each class.
- **💬 WhatsApp-Integrated Inquiry Form**: A client-side validated parent inquiry form where parents can enter their details (parent name, child name, age group, program, phone, and optional visit date). Submitting the form generates a pre-formatted message and opens WhatsApp Web/App for direct communication.
- **⚡ Quick Action Grid**: Clean, high-impact tiles displaying operating hours, instant WhatsApp chat links, email/call access, and immediate scroll-to-fees.
- **🛡️ Value Pillars & Why Choose Us**: Section highlighting the school's commitment to safety, experienced staff, hygiene, small batch sizes, and overall developmental milestones.
- **🎨 Facilities Corner**: Interactive cards showcasing the Creative Art Corner, Safe Indoor Play Zone, Cozy Storytelling Corner, and Active Learning Center.
- **📞 Contact Directory & Direct Dialing**: Comprehensive list containing dual contact numbers, physical location address (Kondhwa, Pune), and working hours.
- **📱 Floating Call & WhatsApp Widgets**: Sticky thumb-friendly floaters for immediate action on mobile devices.
- **🧭 Smooth Scroll Navigation**: Desktop sticky header and custom mobile drawer overlay navigation.

---

## 🛠️ Tech Stack

- **Frontend Library:** [React](https://reactjs.org/) (v18.3.1)
- **Build Tool & Server:** [Vite](https://vitejs.dev/) (v5.3.1)
- **Styling:** Custom Vanilla CSS3 (located in `src/index.css`)
- **Iconography:** [Lucide React](https://lucide.dev/) (v0.400.0)
- **Typography:** [Outfit](https://fonts.google.com/specimen/Outfit) (Headings) and [Inter](https://fonts.google.com/specimen/Inter) (Body text) served via Google Fonts

---

## 📂 Project Folder Structure

```text
littletodds/
├── package-lock.json
└── littletods/                  # Main React + Vite Project Root
    ├── public/                  # Static assets
    │   ├── logo.png             # School branding logo
    │   └── hero_children.png    # Primary hero image (dynamically loaded)
    ├── src/                     # React source files
    │   ├── components/          # Reusable UI sections
    │   │   ├── AboutUs.jsx      # Values, story, and school introduction
    │   │   ├── Facilities.jsx    # Classroom facilities grid
    │   │   ├── FloatingActions.jsx # Floating quick buttons for mobile
    │   │   ├── Footer.jsx       # Branding copyright, navigation links & contacts
    │   │   ├── Hero.jsx         # Header landing fold with SVG artwork fallback
    │   │   ├── InquiryForm.jsx  # Form with validation and WhatsApp submission
    │   │   ├── Navbar.jsx       # Header with scrolling triggers and mobile drawer
    │   │   ├── Programs.jsx     # Programs grid (Play Group, Nursery, LKG, UKG)
    │   │   ├── QuickActions.jsx # Hours, WhatsApp, Call/Email, and Fees link
    │   │   └── WhyChooseUs.jsx  # Value pillars and trust strip
    │   ├── App.jsx              # Application root with contact details config
    │   ├── index.css            # Responsive layout rules and color system
    │   └── main.jsx             # React entry mounting point
    ├── .gitignore
    ├── index.html               # Main template featuring metadata optimization
    ├── package.json             # Scripts & dependency definitions
    ├── setup-assets.js          # Node asset organizer utility
    └── vite.config.js           # Vite port & browser launch config
```

---

## ⚙️ Installation Guide

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   ```

2. **Navigate to the project root:**
   ```bash
   cd littletodds/littletods
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

---

## 🚀 Running the Project Locally

To run the development server:

```bash
npm run dev
```

- By default, the application is configured to run on port **`3000`** and will automatically open in your default browser (`http://localhost:3000`).
- Any updates to components or styles will automatically trigger hot module replacement (HMR).

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

- This compiles the production assets into the `dist/` directory.
- You can preview the compiled build locally to test performance before deploying:
  ```bash
  npm run preview
  ```

---

## ☁️ Deployment Instructions (Vercel)

### Method 1: Using the Vercel Git Integration (Recommended)
1. Go to the [Vercel Dashboard](https://vercel.com/) and click **Add New > Project**.
2. Import your GitHub repository.
3. In the project settings, configure:
   - **Root Directory:** `littletods`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**.

### Method 2: Deploying via Vercel CLI
If you prefer deploying directly from the command line:

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment command inside the `littletods` directory:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to link and deploy. To deploy to production, run:
   ```bash
   vercel --prod
   ```

---

## 📱 Responsive Design

The website follows a **Mobile-First Responsive Design** ensuring readability and touch targets on all screen widths:
- **Mobile Viewports (<768px):** Adapts with single-column layouts, sticky floating action bars for easy thumb dialing/messaging, and a slide-out navigation overlay.
- **Tablet Viewports (768px–1024px):** Dynamically scales cards into dual-column grids.
- **Desktop Viewports (>1024px):** Expands into rich multi-column grids, features a sticky horizontal navbar with scroll indicators, and loads large click target Call-to-Actions (CTAs).

---

## ⚡ Performance & SEO

- **Meta Configuration:** Optimizations in `index.html` set standard UTF-8 charset, mobile viewport scaling, and optimized `<title>` and `<description>` meta tags for search engines.
- **Asset Fallback:** Contains a secondary vector SVG drawing block system in `Hero.jsx` and `AboutUs.jsx` to prevent page load layout shifts or empty spaces when high-resolution image resources are still loading.
- **Resource Pre-connections:** Utilizes Google Fonts pre-connection points (`fonts.googleapis.com` and `fonts.gstatic.com`) to lower text rendering delays.
- **Semantic Markup:** Employs HTML5 tag hierarchies (`<header>`, `<main>`, `<section>`, `<footer>`) to facilitate screen readers and crawler indexing.

---

## 🔮 Future Improvements

- [ ] **Dynamic Gallery Carousel:** Lightbox component to show campus events, active learning hours, and seasonal parties.
- [ ] **Parent Testimonials:** Section displaying reviews and feedback from active preschool parents.
- [ ] **Secure Online Fee Portal:** Integration of local payment gateways for fee payment.
- [ ] **Curriculum Download:** Direct PDF brochure download linked to parent inquiry collection.

---

## ✍️ Author

- **Abdullah Siddiqui** - *Developer & Designer*

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
