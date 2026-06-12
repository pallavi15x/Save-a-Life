# 🫀 Save a Life - Organ Donation Platform

**Save a Life** is a modern, interactive, and multilingual web application built to raise awareness about organ donation, debunk common myths, and encourage life-saving pledges.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Site-success?style=for-the-badge&logo=github)](https://pallavi15x.github.io/Save-a-Life/)

---

## ✨ Key Features

- **🌐 17+ Languages Supported:** Full universal localization. Seamlessly translates UI components, organ data, and statistics into English, Hindi, Tamil, Telugu, Marathi, Bengali, Gujarati, Kannada, Malayalam, Punjabi, Urdu, Spanish, French, German, Chinese, Russian, and Arabic.
- **🎨 Premium Medical UI/UX:** 
  - Dynamic **Dark Mode** & Light Mode.
  - Custom **Neon Heartbeat Preloader** with synchronized ECG vector animations.
  - Interactive navigation with sliding, glowing neon pill indicators.
- **🧍 Interactive Body Diagram:** A visual, hoverable human body map detailing how specific organs (Heart, Lungs, Liver, Kidneys, Eyes) can save multiple lives, featuring rich dynamic tooltips.
- **🗺️ Regional Donor Statistics:** Interactive maps and data visualizations showing regional organ donation impacts across India.
- **📱 Fully Responsive:** Carefully tailored layout for seamless use on mobile, tablet, and desktop screens.
- **🚀 High Performance:** Powered by Vite, React, and Framer Motion for buttery-smooth 60fps animations.

---

## 📂 Project Structure

```text
src/
├── App.jsx                  # Root component handling routing
├── index.css                # Global styles, variables, and complex animations
├── main.jsx                 # Entry point
├── components/              # Reusable UI elements
│   ├── chatbot/             # AI Assistant interface
│   ├── home/                # Landing page specific components (BodyDiagram, Hero)
│   ├── layout/              # Global layout elements (Navbar, Footer)
│   └── ui/                  # Generic UI components (LoaderSplash, ScrollToTop)
├── context/                 # Global state management
│   ├── LanguageContext.jsx  # i18n localization state handling 17+ languages
│   └── ThemeContext.jsx     # Dark/Light mode theme state
├── data/                    # Static data and localizations
│   ├── organData.js         # Organ statistics and facts
│   └── organDataI18n.js     # Multilingual translation dictionaries
└── pages/                   # Route-level components
    ├── HomePage.jsx         # Main landing page
    ├── LearnPage.jsx        # Educational resources
    ├── MythsPage.jsx        # Myth-busting facts
    ├── RegisterPage.jsx     # Donor registration form
    ├── StoriesPage.jsx      # Donor testimonials
    └── CampaignsPage.jsx    # Awareness campaigns
```

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages

---

## 🚀 Quick Start (Local Development)

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pallavi15x/Save-a-Life.git
   ```

2. **Navigate into the folder:**
   ```bash
   cd Save-a-Life/save
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy production build to GitHub Pages |

---

## 🌍 Live Deployment

The website is currently deployed and hosted live on GitHub Pages.
👉 **[View Live Site](https://pallavi15x.github.io/Save-a-Life/)**

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Let's work together to save lives and spread awareness.

## 📄 License
This project is open-source and created for educational and life-saving awareness.
