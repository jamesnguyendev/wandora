# 🧭 Wandora

## 📌 Introduction

**Wandora** is a modern, full-featured user platform built with **Next.js**, **TypeScript**, and **Tailwind CSS**.
It provides an elegant and interactive interface for exploring and booking listings directly from a map.
Designed for performance, scalability, and usability, Wandora is ideal for startups and businesses that need a modern booking and exploration experience.

This project focuses on the **user-facing web app**, featuring:

- Interactive **map-based search and display**
- Secure **authentication** (login/register) with **NextAuth.js**
- **Listing management** (list, detail, and filters)
- **Booking system**
- Responsive and clean UI powered by **ShadCN / Radix UI**

---

## 🛠️ Technology Stack

### **Frontend**

- **Next.js 15** (App Router + Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **Radix UI / ShadCN UI**
- **Zustand** for global state management
- **TanStack Query & Table**
- **Next-Themes** for dark/light mode
- **Recharts** for analytics visualization

### **Security and Data Fetching**

- **NextAuth.js** for authentication
- **Axios** for API requests
- **bcrypt / bcryptjs** for password hashing
- **JWT Decode** for token parsing and verification

### **Database / API**

- Fully compatible with **PostgreSQL**, **MySQL**, **MongoDB**, or any **REST/GraphQL API**
  through custom backend or API integration.

---

## ⚙️ Setup & Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/jamesnguyendev/wandora.git
cd wandora

# 2️⃣ Install dependencies
npm install

# 3️⃣ Set up environment variables
cp  .env
```

Then edit your `.env` file:

```bash
NEXTAUTH_SECRET=
NEXTAUTH_URL=
NEXT_PUBLIC_API_URL=
SENTRY_AUTH_TOKEN=
```

---

## 🧱 Project Structure

```
wandora/
│
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # Shared React UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and constants
│   ├── store/          # Zustand global state stores
│   ├── types/          # TypeScript interfaces and models
│   ├── utils/          # Helper functions (auth, format, etc.)
│   └── scripts/        # Node scripts (theme presets, etc.)
│
├── public/             # Static assets (images, icons, etc.)
├── styles/             # Tailwind styles and global CSS
├── .env                # Example environment file
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.ts  # Tailwind configuration
└── README.md           # Documentation
```

---

## 🔐 Security

- Passwords are securely hashed with **bcrypt**.
- **NextAuth.js** provides token-based authentication and session handling.
- Environment variables are managed via **.env**.
- Follows **OWASP** and **Next.js** security best practices.
- Linting enforces code quality using **eslint-plugin-security** and **eslint-plugin-sonarjs**.

---

## 📦 Deployment

You can deploy Wandora easily on any modern hosting platform:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Render**
- **AWS / DigitalOcean / Node.js servers**

Ensure your environment variables are correctly configured in your deployment environment.

---

## 👨‍💻 Author

**James Nguyen**
[GitHub: jamesnguyendev](https://github.com/jamesnguyendev)

---

## 📜 License

MIT License © 2025 **James Nguyen**
**Project:** wandora
