================================================================
PRODUCT REQUIREMENTS DOCUMENT
Vytheki Sathiyananthan — Personal Portfolio Website
Full-Stack Developer | Android Developer | Data Science Student
Tech Stack: React (Vite) + Django REST Framework + Tailwind CSS + Framer Motion
Version: 2.0 | Status: Ready for Development
================================================================

================================================================
1. PRODUCT OVERVIEW
================================================================

This is the complete Product Requirements Document (PRD) for
Vytheki Sathiyananthan's personal online portfolio website.
Copy and paste this entire document into any AI code generation
tool (ChatGPT, Claude, GitHub Copilot, Cursor, v0.dev) to
generate production-ready code section by section.

PROJECT METADATA:
-----------------
Owner:              Vytheki Sathiyananthan
GitHub:             https://github.com/Vytheki-S
LinkedIn:           https://www.linkedin.com/in/vythekie-sathyananthan-a7b2b7245
Email:              d23615816@my.sliit.lk
Location:           Jaffna, Sri Lanka
University:         SLIIT Northern University
Degree:             BSc (Hons) Information Technology — Data Science Specialization
Current Year:       3rd Year, 1st Semester
Frontend Stack:     React 18 + Vite + Tailwind CSS + Framer Motion
Backend Stack:      Django 4.x + Django REST Framework + PostgreSQL
Frontend Hosting:   Vercel (free tier)
Backend Hosting:    Render or Railway (free tier)
Version Control:    GitHub — github.com/Vytheki-S
PRD Version:        2.0


================================================================
2. PERSONAL INFORMATION — USE EXACTLY AS WRITTEN
================================================================

2.1 IDENTITY
------------
Full Name:        Vytheki Sathiyananthan
GitHub Username:  Vytheki-S
GitHub URL:       https://github.com/Vytheki-S
LinkedIn URL:     https://www.linkedin.com/in/vythekie-sathyananthan-a7b2b7245
Email:            d23615816@my.sliit.lk
Location:         Jaffna, Sri Lanka
University:       SLIIT Northern University
Degree:           BSc (Hons) Information Technology — Data Science Specialization
Current Year:     3rd Year, 1st Semester


2.2 PROFESSIONAL SUMMARY (use this exact text in Hero and About)
-----------------------------------------------------------------
"Motivated 3rd-year IT undergraduate with hands-on experience
in full-stack web and Android development. Passionate about
building real-world, scalable, and user-focused systems with
clean code. Actively seeking internships and junior developer
roles in 2026."


2.3 SPECIALIZATIONS
-------------------
- Building complete applications (authentication, CRUD,
  RESTful APIs, payment gateways, responsive UIs)
- Turning business needs into secure, efficient, and
  maintainable software
- Designing clean mobile UIs using Figma and Jetpack Compose
- Implementing secure Django REST APIs with JWT and OAuth


2.4 CURRENTLY LEARNING / WORKING ON
-------------------------------------
- Advanced MERN full-stack applications with modern state management
- Secure Django REST APIs (JWT, OAuth, role-based access)
- Kotlin + Jetpack Compose Android apps
- Exploring TypeScript deeper and Next.js
- Basic data analysis and visualization in Python


2.5 GITHUB STATISTICS (as of March 2025)
------------------------------------------
Total Contributions (last year):  101
Total Commits:                    82
Longest Streak:                   4 days (Oct 22–25, 2025)
Most Used Languages:              TypeScript, C, Python, Java, JavaScript, PHP
Public Repositories:              11+
Followers: 6   |   Following: 17


2.6 STAT COUNTERS (animate 0 → value on scroll)
-------------------------------------------------
Projects Completed:    5+
Technologies Known:    12+
GitHub Contributions:  101
Real Client Projects:  1


================================================================
3. DESIGN SYSTEM — ALWAYS FOLLOW THESE RULES
================================================================

3.1 COLOR PALETTE
-----------------
--bg-primary:    #0D0D1A   → Page background, hero section
--bg-secondary:  #111827   → Card backgrounds, alternate sections
--accent-blue:   #00A3E0   → Buttons, active links, navbar brand box
--accent-purple: #7B2FBE   → Gradient accents, badges, section labels
--text-primary:  #FFFFFF   → All headings, high-emphasis text
--text-muted:    #8899AA   → Body text, subtitles, captions
--border:        #2A3A4A   → Card borders, section dividers
--green:         #22C55E   → Success messages, status badges

Tailwind usage:
  bg-[#0D0D1A]   bg-[#111827]   text-[#00A3E0]
  text-[#7B2FBE] text-[#8899AA] border-[#2A3A4A]


3.2 TYPOGRAPHY
--------------
Primary Font:    Inter (import from Google Fonts)
Monospace Font:  JetBrains Mono (for code tags and tech pills)
Hero Name Size:  clamp(2.5rem, 6vw, 5rem), font-weight 800, white
Section Headings: 2.5rem, font-weight 700, white
Navbar Links:    0.85rem, letter-spacing 0.15em, uppercase, #8899AA
Active Nav Link: color #00A3E0, font-weight 600


3.3 ANIMATIONS — FRAMER MOTION
--------------------------------
- Page load: hero fades in + slides up, staggerChildren: 0.15s
- Scroll-triggered: whileInView, viewport: { once: true }, fade+slideUp
- Project cards: whileHover scale 1.03 + blue glow boxShadow
- Skills bars: width 0% → target% when section enters viewport
- Stat counters: count 0 → value using useCountUp hook
- Navbar: backdrop-blur after 80px scroll
- Mobile menu: AnimatePresence height slide animation


3.4 LAYOUT RULES
-----------------
- Single-page application with smooth scroll between sections
- Mobile first — minimum viewport 375px
- Breakpoints: sm(640px) md(768px) lg(1024px) xl(1280px)
- Max content width: 1280px, centered with auto margins
- Section padding: py-20 px-6 md:px-16 lg:px-24
- Cards: rounded-xl border border-[#2A3A4A] bg-[#111827]


================================================================
4. ROLES — TYPEWRITER ANIMATION ARRAY
================================================================

Use this exact array for the typewriter effect in the Hero:

const roles = [
  "Full-Stack Developer",
  "Android Developer",
  "Data Science Student",
  "UI/UX Designer"
];

Cycle every 2000ms using useEffect + useState.
Show the current role inside a solid bg-[#00A3E0] box
with white monospace text, uppercase, letter-spacing wide.


================================================================
5. SECTION-BY-SECTION REQUIREMENTS
================================================================

------------------------------------------------------------
5.1 NAVBAR
------------------------------------------------------------
- Position: fixed top-0, full width, z-index 50
- Left: brand text "ONLINE PORTFOLIO" inside solid
  bg-[#00A3E0] box, px-4 py-2, white text, uppercase,
  font JetBrains Mono
- Right nav links: About Me | Education | Skills |
  Projects | Experience | Contact
- Active link: color #00A3E0, font-weight 600
- Scroll > 80px: add backdrop-blur-md + bg-[#0D0D1A]/90
- Mobile < 768px: hide links, show hamburger icon
- Hamburger opens dropdown with AnimatePresence
- Smooth scroll on click (react-scroll or scrollIntoView)
- useScrollSpy hook detects active section via
  IntersectionObserver


------------------------------------------------------------
5.2 HERO SECTION
------------------------------------------------------------
- Height: min-h-screen
- Background: bg-[#0D0D1A] with radial-gradient glow —
  purple #7B2FBE top-center blending into blue #00A3E0
- Layout: 2 columns on desktop (7/5 split), stacked mobile

LEFT SIDE (col-span 7):
  - "Hello !!!" — italic, color #00A3E0, JetBrains Mono
  - Large bold heading: "I'm Vytheki Sathiyananthan"
    white, clamp(2.5rem, 6vw, 5rem), font-weight 800
  - Typewriter role box: bg-[#00A3E0], white text,
    uppercase, JetBrains Mono, roles array from Section 4
  - Bio paragraph: text from Section 2.2, color #8899AA
  - CTA buttons:
    * "View My Projects" — bg-[#00A3E0] white text rounded-lg
    * "Download CV" — border border-white text-white rounded-lg
  - Social icons: GitHub + LinkedIn icon links

RIGHT SIDE (col-span 5):
  - Profile photo in a circle
  - Gradient glow border: ring-4 ring-[#00A3E0]
    or box-shadow with blue/purple glow

BOTTOM BAR:
  - Full width horizontal line (border-t border-[#2A3A4A])
  - Dot at left end, dot at right end (w-2 h-2 rounded-full)
  - "PORTFOLIO 2025" text — right aligned, #8899AA, small

ANIMATIONS:
  - All elements use Framer Motion staggerChildren on mount
  - Each child: opacity 0→1, y 30→0, duration 0.6s


------------------------------------------------------------
5.3 ABOUT ME
------------------------------------------------------------
- Two-column layout: left = stat counters, right = bio
- Stat counters (4 cards, animate 0→value on scroll):
  * Projects Completed: 5+
  * Technologies Known: 12+
  * GitHub Contributions: 101
  * Real Client Projects: 1
- Bio: use exact text from Section 2.2
- Personal info grid below bio:
  * University: SLIIT Northern University
  * Degree: BSc IT — Data Science
  * Year: 3rd Year, 1st Semester
  * Location: Jaffna, Sri Lanka
  * Email: d23615816@my.sliit.lk
  * GitHub: github.com/Vytheki-S
- "Actively seeking internships & junior roles 2026"
  badge in green (bg-green-500/20 text-green-400)


------------------------------------------------------------
5.4 EDUCATION
------------------------------------------------------------
- Vertical timeline, line on left, circle dot markers
- Entry 1:
  * Degree: BSc (Hons) Information Technology
    — Data Science Specialization
  * Institution: SLIIT Northern University
  * Duration: 2022 – Present (Expected 2025)
  * Status: 3rd Year, 1st Semester
  * Key Modules: Data Structures, Algorithms,
    Web Development, Mobile Development,
    Database Systems, Software Engineering,
    Data Science Fundamentals
- Cards animate in from left on scroll (Framer Motion)


------------------------------------------------------------
5.5 SKILLS
------------------------------------------------------------
Render as animated progress bars grouped by category.
Bars fill 0% → target% when section enters viewport.

FRONTEND & WEB:
  HTML/CSS         90%
  JavaScript       82%
  TypeScript       72%
  React            78%
  Tailwind CSS     82%
  Responsive Design 80%

BACKEND & APIs:
  Django           70%
  Node.js          65%
  REST APIs        75%
  JWT Auth         68%
  Express          62%

MOBILE:
  Android/Kotlin   65%
  Firebase         60%
  Jetpack Compose  55%
  API Integration  65%

DATA SCIENCE:
  Python           62%
  Pandas           55%
  NumPy            52%
  Data Viz         50%

DATABASES:
  MySQL            72%
  SQLite           72%
  MongoDB          65%
  PostgreSQL       60%

TOOLS:
  Git/GitHub       85%
  Figma            75%
  Postman          78%
  VS Code          90%

Also show tech icon pills below bars (SVG icons).


------------------------------------------------------------
5.6 PROJECTS (Most Important Section)
------------------------------------------------------------
Filter buttons: All | Web | Android | Data Science | UI/UX | AI

Card grid: 1 col mobile, 2 col tablet, 3 col desktop

Each card contains:
  - Screenshot/thumbnail image
  - Project title (bold, white)
  - Short description (color #8899AA)
  - Tech stack tags (JetBrains Mono pills, bg-[#0D0D1A])
  - GitHub button (icon + text)
  - Demo button if available
  - "CLIENT PROJECT" gold badge if isClient = true
  - Gold star icon if isFeatured = true

Hover: whileHover translateY -8px + blue glow shadow

PROJECTS DATA:
--------------
1. title: "Gear-Up E-Commerce"
   desc: "Full-stack e-commerce application with React
          frontend and Django REST backend. Includes JWT
          authentication, CRUD APIs, and payment integration."
   tech: ["React", "Django", "Python", "REST API", "JWT"]
   category: "web"
   github: "https://github.com/Vytheki-S/Gear-Up-E-commerce"
   demo: null
   isClient: false
   isFeatured: true

2. title: "EventAure"
   desc: "Event management platform built with TypeScript
          and React. Full frontend application with
          component-based architecture."
   tech: ["TypeScript", "React", "CSS"]
   category: "web"
   github: "https://github.com/Vytheki-S/EventAure"
   demo: null
   isClient: false
   isFeatured: true

3. title: "Jaffna Thirvalluvar Cultural Center"
   desc: "Official website built for a real client cultural
          organization in Jaffna. Complete frontend and
          backend with CMS features."
   tech: ["React", "Django", "MySQL"]
   category: "web"
   github: null
   demo: null
   isClient: true
   isFeatured: true

4. title: "Chatbot"
   desc: "AI-powered chatbot application built with Python.
          Conversational interface with natural language
          processing capabilities."
   tech: ["Python", "AI/ML"]
   category: "ai"
   github: "https://github.com/Vytheki-S/Chatbot"
   demo: null
   isClient: false
   isFeatured: false

5. title: "Online Examination System (Exam-pro)"
   desc: "Web-based online examination platform with
          auto-grading, timer, and result management."
   tech: ["PHP", "MySQL", "HTML", "CSS"]
   category: "web"
   github: "https://github.com/Vytheki-S/Exam-pro"
   demo: null
   isClient: false
   isFeatured: false

6. title: "Leave Management System"
   desc: "Employee leave management web application with
          approval workflow and dashboard."
   tech: ["JavaScript", "HTML", "CSS"]
   category: "web"
   github: "https://github.com/Vytheki-S/Vytheki-S-Leave-Management-System"
   demo: null
   isClient: false
   isFeatured: false

7. title: "Event-pro"
   desc: "Java-based event management system with booking,
          scheduling, and reporting features."
   tech: ["Java"]
   category: "web"
   github: "https://github.com/Vytheki-S/Event-pro"
   demo: null
   isClient: false
   isFeatured: false

8. title: "Android Mobile Application"
   desc: "Mobile application built with Android Studio
          and Kotlin using Jetpack Compose UI."
   tech: ["Kotlin", "Android Studio", "Firebase"]
   category: "android"
   github: null
   demo: null
   isClient: false
   isFeatured: false

9. title: "Figma UI/UX Mobile Design"
   desc: "Complete mobile app UI/UX design with full
          user flow, prototyping, and component library."
   tech: ["Figma", "Prototyping", "UI/UX"]
   category: "uiux"
   github: null
   demo: null
   isClient: false
   isFeatured: false


------------------------------------------------------------
5.7 GITHUB STATS (Bonus Section)
------------------------------------------------------------
- Section title: "GitHub Activity"
- Embed using github-readme-stats API (img tags):

Stats card:
https://github-readme-stats.vercel.app/api?username=Vytheki-S&show_icons=true&theme=tokyonight&hide_border=true&bg_color=111827

Top languages:
https://github-readme-stats.vercel.app/api/top-langs/?username=Vytheki-S&layout=compact&theme=tokyonight&hide_border=true&bg_color=111827

Streak stats:
https://github-readme-streak-stats.herokuapp.com/?user=Vytheki-S&theme=tokyonight&hide_border=true&background=111827

- Wrap each img in a rounded-xl border border-[#2A3A4A] card
- Display in a 2-column grid on desktop, stacked on mobile


------------------------------------------------------------
5.8 CONTACT
------------------------------------------------------------
Section heading: "Get In Touch"
Two-column layout: left = info, right = form

LEFT COLUMN — Contact Details:
  Email:    d23615816@my.sliit.lk
  GitHub:   github.com/Vytheki-S
  LinkedIn: linkedin.com/in/vythekie-sathyananthan-a7b2b7245
  Location: Jaffna, Sri Lanka
  Status:   Actively seeking internships & junior roles 2026
            (show as green badge)

RIGHT COLUMN — Contact Form:
  Fields:
    - Name     (required)
    - Email    (required, validate email format)
    - Subject  (required)
    - Message  (required, min 20 characters, textarea)

  Send button: bg-[#00A3E0] white text rounded-lg px-8 py-3
               hover: bg-[#0088C0]

  On submit:
    - POST to: import.meta.env.VITE_API_URL + "/api/contact/"
    - Show spinner inside button while loading
    - Success: green message
      "Message sent! I will get back to you soon."
    - Error: red message
      "Something went wrong. Please try again."
    - Clear form fields on success

  Frontend validation before submit:
    - All fields required (show inline red error text)
    - Email must match regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    - Message must be at least 20 characters


------------------------------------------------------------
5.9 FOOTER
------------------------------------------------------------
- Dark bg-[#0D0D1A], border-t border-[#2A3A4A]
- Left: name "Vytheki Sathiyananthan" + tagline
- Center: nav links (same as navbar)
- Right: GitHub, LinkedIn, Email icon links
- Bottom line: "© 2025 Vytheki Sathiyananthan.
  Built with React + Django."


================================================================
6. COMPLETE FILE STRUCTURE
================================================================

portfolio-frontend/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env                          ← VITE_API_URL=http://localhost:8000
├── package.json
├── public/
│   ├── favicon.ico
│   └── og-image.png
└── src/
    ├── assets/
    │   ├── profile.jpg           ← your profile photo
    │   ├── hero-bg.png           ← hero glow texture
    │   ├── projects/             ← project screenshots
    │   │   ├── gear-up.png
    │   │   ├── eventaure.png
    │   │   ├── jaffna-center.png
    │   │   └── chatbot.png
    │   └── icons/                ← SVG tech icons
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Education.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   ├── Experience.jsx
    │   ├── GitHubStats.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    ├── data/
    │   ├── personal.js           ← all personal info
    │   ├── projects.js           ← all projects array
    │   ├── skills.js             ← skills with percentages
    │   └── education.js          ← education timeline
    ├── hooks/
    │   ├── useScrollSpy.js       ← active nav section
    │   ├── useCountUp.js         ← animate stat numbers
    │   └── useInView.js          ← scroll trigger
    ├── utils/
    │   └── api.js                ← axios instance → Django
    ├── styles/
    │   └── index.css             ← Tailwind + CSS variables
    ├── App.jsx
    └── main.jsx

portfolio-backend/
├── manage.py
├── requirements.txt
├── .env
├── Procfile                      ← gunicorn command
├── runtime.txt                   ← python-3.11.x
├── portfolio_backend/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
└── contact/
    ├── models.py
    ├── serializers.py
    ├── views.py
    ├── urls.py
    ├── admin.py
    └── tests.py


================================================================
7. DATA FILES — COPY INTO YOUR PROJECT
================================================================

---- src/data/personal.js ----

export const personal = {
  name: "Vytheki Sathiyananthan",
  title: "Full-Stack & Software Engineer | Android Developer",
  bio: "Motivated 3rd-year IT undergraduate with hands-on experience in full-stack web and Android development. Passionate about building real-world, scalable, and user-focused systems with clean code.",
  seeking: "Actively seeking internships & junior developer roles in 2026",
  email: "d23615816@my.sliit.lk",
  github: "https://github.com/Vytheki-S",
  linkedin: "https://www.linkedin.com/in/vythekie-sathyananthan-a7b2b7245",
  location: "Jaffna, Sri Lanka",
  university: "SLIIT Northern University",
  degree: "BSc (Hons) Information Technology — Data Science",
  year: "3rd Year, 1st Semester",
  roles: [
    "Full-Stack Developer",
    "Android Developer",
    "Data Science Student",
    "UI/UX Designer"
  ],
  stats: {
    projects: 5,
    technologies: 12,
    contributions: 101,
    clients: 1
  }
};


---- src/utils/api.js ----

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" }
});

export const postContact = (data) =>
  api.post("/api/contact/", data);

export default api;


================================================================
8. DJANGO BACKEND — EXACT CODE
================================================================

---- contact/models.py ----

from django.db import models

class ContactMessage(models.Model):
    name       = models.CharField(max_length=100)
    email      = models.EmailField()
    subject    = models.CharField(max_length=200)
    message    = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read    = models.BooleanField(default=False)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} — {self.subject}"


---- contact/serializers.py ----

from rest_framework import serializers
from .models import ContactMessage

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["id","name","email","subject","message","created_at"]
        read_only_fields = ["id","created_at"]


---- contact/views.py ----

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactMessageSerializer

class ContactMessageView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Message received. Thank you!"},
                status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


---- contact/urls.py ----

from django.urls import path
from .views import ContactMessageView

urlpatterns = [
    path("contact/", ContactMessageView.as_view(), name="contact"),
]


---- portfolio_backend/urls.py ----

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("contact.urls")),
]


---- portfolio_backend/settings.py (key additions) ----

INSTALLED_APPS = [
    ...
    "rest_framework",
    "corsheaders",
    "contact",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",  # MUST be first
    "django.middleware.common.CommonMiddleware",
    ...
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "https://your-vercel-app.vercel.app",
]

CORS_ALLOW_CREDENTIALS = True

REST_FRAMEWORK = {
    "DEFAULT_RENDERER_CLASSES": [
        "rest_framework.renderers.JSONRenderer",
    ]
}


---- requirements.txt ----

django>=4.2
djangorestframework>=3.14
django-cors-headers>=4.3
python-decouple>=3.8
gunicorn>=21.2
whitenoise>=6.6
psycopg2-binary>=2.9


---- .env (backend) ----

SECRET_KEY=your-django-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1


---- .env (frontend) ----

VITE_API_URL=http://localhost:8000


================================================================
9. ENVIRONMENT SETUP COMMANDS
================================================================

FRONTEND SETUP:
---------------
cd portfolio-frontend
npm create vite@latest . -- --template react
npm install
npm install tailwindcss @tailwindcss/vite framer-motion axios react-scroll
npx tailwindcss init

BACKEND SETUP:
--------------
cd portfolio-backend
python -m venv venv
venv\Scripts\activate        (Windows)
source venv/bin/activate     (Mac/Linux)
pip install django djangorestframework django-cors-headers python-decouple gunicorn
django-admin startproject portfolio_backend .
python manage.py startapp contact
python manage.py makemigrations
python manage.py migrate
python manage.py runserver


================================================================
10. TAILWIND CONFIG — COPY INTO tailwind.config.js
================================================================

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary":   "#0D0D1A",
        "bg-secondary": "#111827",
        "accent-blue":  "#00A3E0",
        "accent-purple":"#7B2FBE",
        "text-muted":   "#8899AA",
        "border-custom":"#2A3A4A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};


================================================================
11. index.html HEAD — COPY FOR FONTS AND SEO
================================================================

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vytheki Sathiyananthan | Full-Stack & Android Developer</title>
  <meta name="description" content="Portfolio of Vytheki Sathiyananthan, IT undergraduate at SLIIT Northern University specializing in Data Science, Full-Stack Web, and Android Development." />
  <meta property="og:title" content="Vytheki Sathiyananthan | Portfolio" />
  <meta property="og:description" content="Full-Stack Developer, Android Developer, Data Science Student." />
  <meta property="og:url" content="https://your-vercel-url.vercel.app" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
</head>


================================================================
12. MASTER AI PROMPT — COPY THIS FIRST INTO ANY AI TOOL
================================================================

=== PORTFOLIO CONTEXT — PASTE THIS BEFORE ANY REQUEST ===

I am building a personal portfolio for Vytheki Sathiyananthan.

IDENTITY:
  Name:       Vytheki Sathiyananthan
  GitHub:     https://github.com/Vytheki-S
  LinkedIn:   https://www.linkedin.com/in/vythekie-sathyananthan-a7b2b7245
  Email:      d23615816@my.sliit.lk
  University: SLIIT Northern University
  Degree:     BSc IT — Data Science Specialization
  Year:       3rd Year, 1st Semester
  Location:   Jaffna, Sri Lanka

STACK:
  Frontend: React 18 + Vite + Tailwind CSS + Framer Motion
  Backend:  Django + Django REST Framework
  Deploy:   Vercel (frontend) + Render (backend)

DESIGN SYSTEM:
  Background:     #0D0D1A
  Cards/Sections: #111827
  Accent Blue:    #00A3E0
  Accent Purple:  #7B2FBE
  Text White:     #FFFFFF
  Text Muted:     #8899AA
  Borders:        #2A3A4A
  Success Green:  #22C55E

FONTS:
  Body/Headings: Inter (Google Fonts)
  Code/Tags:     JetBrains Mono

RULES — ALWAYS FOLLOW:
  1. Single-file React components only
  2. Tailwind CSS only — no separate CSS files
  3. Framer Motion for ALL animations
  4. whileInView for scroll animations, viewport once:true
  5. Import personal data from src/data/personal.js
  6. Import projects from src/data/projects.js
  7. Contact form posts to: import.meta.env.VITE_API_URL + "/api/contact/"
  8. Mobile first, fully responsive

SECTIONS ORDER:
  Navbar → Hero → About → Education → Skills →
  Projects → GitHubStats → Contact → Footer

=== NOW GENERATE THE COMPONENT I REQUEST BELOW ===


================================================================
13. COMPONENT-BY-COMPONENT PROMPTS
================================================================

After pasting the Master Prompt above, use these prompts
one at a time in order:

PROMPT 1 — Navbar:
"Generate src/components/Navbar.jsx — sticky navbar with brand
box, nav links, scroll-spy active states, backdrop-blur on
scroll, hamburger menu for mobile with Framer Motion dropdown."

PROMPT 2 — Hero:
"Generate src/components/Hero.jsx — full viewport dark hero
with radial purple-blue glow background, typewriter role text,
profile photo with glow border, CTA buttons, bottom decorative
bar, all Framer Motion stagger animations on mount."

PROMPT 3 — About:
"Generate src/components/About.jsx — two column layout with
animated stat counters on left and bio text on right, personal
info grid, green seeking badge."

PROMPT 4 — Education:
"Generate src/components/Education.jsx — vertical timeline with
circle dot markers, single entry for SLIIT Northern University,
card slides in from left on scroll."

PROMPT 5 — Skills:
"Generate src/components/Skills.jsx — animated horizontal
progress bars grouped by 6 categories, bars fill on scroll,
tech icon pills below bars."

PROMPT 6 — Projects:
"Generate src/components/Projects.jsx — filterable grid with
filter buttons (All/Web/Android/AI/UI-UX), project cards with
hover glow, CLIENT badge, featured star, GitHub and Demo
buttons. Import projects from src/data/projects.js."

PROMPT 7 — GitHub Stats:
"Generate src/components/GitHubStats.jsx — section showing
GitHub stats, top languages, and streak cards using
github-readme-stats API img embeds for username Vytheki-S,
styled with dark cards matching portfolio theme."

PROMPT 8 — Contact:
"Generate src/components/Contact.jsx — two column layout,
left shows contact details (email, github, linkedin, location,
status badge), right shows form (name, email, subject, message)
that POSTs to Django API, with loading spinner, success and
error states, frontend validation."

PROMPT 9 — Footer:
"Generate src/components/Footer.jsx — dark footer with name,
tagline, nav links, social icons, copyright line."

PROMPT 10 — App.jsx:
"Generate src/App.jsx — imports all components in order
(Navbar, Hero, About, Education, Skills, Projects, GitHubStats,
Contact, Footer), wraps each in a section with matching id,
adds global smooth scroll style."

PROMPT 11 — Django Backend:
"Generate all Django backend files for the contact form API:
contact/models.py, contact/serializers.py, contact/views.py,
contact/urls.py, portfolio_backend/urls.py,
portfolio_backend/settings.py with CORS and REST framework.
Use the exact code structure I provided."


================================================================
14. DEPLOYMENT STEPS
================================================================

FRONTEND → VERCEL:
1. Push portfolio-frontend to GitHub
2. Go to vercel.com → New Project → Import repo
3. Framework: Vite
4. Build command: npm run build
5. Output directory: dist
6. Add env variable:
   VITE_API_URL = https://your-backend.render.com
7. Click Deploy

BACKEND → RENDER:
1. Push portfolio-backend to GitHub
2. Go to render.com → New Web Service → Connect repo
3. Runtime: Python 3
4. Build: pip install -r requirements.txt && python manage.py migrate
5. Start: gunicorn portfolio_backend.wsgi:application
6. Add all .env variables in Render dashboard
7. Add PostgreSQL addon → copy DATABASE_URL to env vars
8. Update CORS_ALLOWED_ORIGINS with your Vercel URL


================================================================
15. NON-FUNCTIONAL REQUIREMENTS
================================================================

PERFORMANCE:
  - Lighthouse score: 90+
  - First Contentful Paint: under 1.5s
  - Images: WebP format, lazy loaded

RESPONSIVE:
  - Works on: iPhone SE (375px), iPad (768px), Desktop (1440px)
  - Test with Chrome DevTools device toolbar

SEO:
  - Title, description, og:image meta tags
  - Semantic HTML5 (section, article, header, main, footer)

SECURITY:
  - SECRET_KEY in .env only, never in code
  - Add .env to .gitignore
  - CORS restricted to Vercel URL only in production

ACCESSIBILITY:
  - All images have alt text
  - All buttons and links keyboard navigable
  - Color contrast meets WCAG 2.1 AA


================================================================
END OF PRD — Vytheki Sathiyananthan Portfolio v2.0
github.com/Vytheki-S | d23615816@my.sliit.lk
================================================================