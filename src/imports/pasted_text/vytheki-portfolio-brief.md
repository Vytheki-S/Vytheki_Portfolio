DESIGN BRIEF — Vytheki Sathiyananthan Personal Portfolio Website
================================================================
This is a complete design brief for a personal portfolio website.
Generate a full single-page website design with all sections
listed below. Follow every detail exactly.
================================================================


================================================================
PERSON DETAILS
================================================================
Name:        Vytheki Sathiyananthan
Role Title:  Full-Stack Developer & Android Developer
University:  SLIIT Northern University
Degree:      BSc IT — Data Science Specialization
Year:        3rd Year Undergraduate
Location:    Jaffna, Sri Lanka
Email:       d23615816@my.sliit.lk
GitHub:      github.com/Vytheki-S
LinkedIn:    linkedin.com/in/vythekie-sathyananthan-a7b2b7245
Tagline:     "Actively seeking internships & junior roles 2026"


================================================================
VISUAL STYLE
================================================================
Theme:         Dark futuristic tech — similar to a developer
               portfolio with neon accents on black background

COLORS:
  Page Background:    #0D0D1A  (very dark navy black)
  Card Background:    #111827  (slightly lighter dark)
  Primary Accent:     #00A3E0  (neon blue — buttons, highlights)
  Secondary Accent:   #7B2FBE  (purple — gradients, badges)
  Heading Text:       #FFFFFF  (pure white)
  Body Text:          #8899AA  (muted gray-blue)
  Borders:            #2A3A4A  (dark border)
  Success/Badge:      #22C55E  (green)
  Error:              #EF4444  (red)

FONTS:
  Headings + Body:   Inter (weights 400, 500, 600, 700, 800)
  Code + Tags:       JetBrains Mono (monospace)

VISUAL EFFECTS:
  - Radial gradient glow in hero: purple #7B2FBE top-center
    bleeding into blue #00A3E0, on dark #0D0D1A background
  - Cards: rounded corners (12px), border #2A3A4A,
    bg #111827, subtle shadow
  - Buttons: rounded-lg (8px), solid bg #00A3E0 for primary,
    outline white border for secondary
  - Badges/pills: rounded-full, small text JetBrains Mono
  - Glow effects on hover states (blue box-shadow)
  - Profile photo: circular with blue/purple gradient ring border

LAYOUT:
  - Max width: 1280px, centered
  - Desktop: full-width sections, 2-column layouts inside
  - Mobile: single column, stacked
  - Section padding: 80px top/bottom, 96px left/right on desktop
  - Navbar: fixed at top, full width


================================================================
SECTION 1 — NAVBAR
================================================================
Position: Fixed top, full width, z-index highest

LEFT SIDE:
  - Text: "ONLINE PORTFOLIO"
  - Style: white uppercase text inside solid #00A3E0
    background box, padding 8px 16px, font JetBrains Mono

RIGHT SIDE — Navigation Links:
  About Me | Education | Skills | Projects | Experience | Contact
  - Font: Inter, 0.85rem, uppercase, letter-spacing wide
  - Color: #8899AA normally, #00A3E0 when active/selected
  - Active link has font-weight 600

MOBILE VERSION:
  - Hide nav links
  - Show hamburger menu icon (3 horizontal lines, white)
  - Tapping opens a dropdown with all links

SCROLL EFFECT:
  - After scrolling: background becomes semi-transparent
    dark with blur effect (frosted glass)


================================================================
SECTION 2 — HERO (Full Screen)
================================================================
Height: Full viewport (100vh)

BACKGROUND:
  - Base color: #0D0D1A
  - Large radial gradient glow blob: starts purple #7B2FBE
    at top-center, fades into blue #00A3E0, then back to
    dark background — like a neon spotlight from above

LAYOUT: Two columns side by side
  Left column takes 60% width
  Right column takes 40% width

LEFT COLUMN CONTENT (top to bottom):
  1. Small italic text: "Hello !!!"
     Font: JetBrains Mono, color #00A3E0, italic

  2. Large bold heading (two lines):
     "I'm Vytheki"
     "Sathiyananthan"
     Font: Inter, weight 800, color white
     Size: very large — around 64-72px on desktop

  3. Role label box:
     Solid background: #00A3E0
     Text inside: "FULL-STACK DEVELOPER"
     Font: JetBrains Mono, uppercase, white, letter-spacing wide
     Padding: 8px 16px
     Note: This text will animate/change in the final build
     Also show these role options below the box in smaller text:
     "Android Developer  |  Data Science Student  |  UI/UX Designer"
     Color: #8899AA

  4. Bio paragraph:
     "Motivated 3rd-year IT undergraduate with hands-on
     experience in full-stack web and Android development.
     Passionate about building real-world, scalable, and
     user-focused systems with clean code."
     Font: Inter, 16px, color #8899AA, line-height 1.7

  5. Two CTA buttons side by side:
     Button 1: "View My Projects"
       bg #00A3E0, white text, rounded-lg, padding 12px 28px
     Button 2: "Download CV"
       transparent bg, white border, white text,
       rounded-lg, padding 12px 28px

  6. Social icon row below buttons:
     GitHub icon link + LinkedIn icon link
     Icons: white, 24px, spacing between them

RIGHT COLUMN CONTENT:
  - Circular profile photo placeholder
    (label it "Profile Photo — Vytheki Sathiyananthan")
  - Circle size: roughly 350px diameter on desktop
  - Border: 4px gradient ring — blue #00A3E0 to
    purple #7B2FBE going around the circle
  - Outer glow: subtle blue box-shadow glow around the circle

BOTTOM BAR (below the two columns):
  - Full width horizontal line, color #2A3A4A
  - Small circle dot at left end of line (white, 8px)
  - Small circle dot at right end of line (white, 8px)
  - Text "PORTFOLIO 2025" — right aligned, #8899AA,
    small font, JetBrains Mono


================================================================
SECTION 3 — ABOUT ME
================================================================
Section title: "About Me"
Title style: white, bold, 40px, with short #00A3E0 underline

LAYOUT: Two columns

LEFT COLUMN — Stat Counter Cards (2x2 grid):
  Four cards, each with:
  - Large bold number in #00A3E0
  - Label in #8899AA below the number

  Card 1: Number "5+"   Label "Projects Completed"
  Card 2: Number "12+"  Label "Technologies Known"
  Card 3: Number "101"  Label "GitHub Contributions"
  Card 4: Number "1"    Label "Real Client Projects"

  Card style: bg #111827, border #2A3A4A, rounded-xl,
              padding 24px, centered content

RIGHT COLUMN — Bio and Info:
  - Heading: "Who Am I?"  color white, bold, 24px
  - Bio paragraph (same text as hero section)
  - "Currently Seeking" green badge:
    bg: #22C55E with 20% opacity
    text: #22C55E "Actively seeking internships & junior roles 2026"
    border: 1px solid #22C55E, rounded-full, small padding

  - Info grid (2 columns, small rows):
    University:  SLIIT Northern University
    Degree:      BSc IT — Data Science
    Year:        3rd Year, 1st Semester
    Location:    Jaffna, Sri Lanka
    Email:       d23615816@my.sliit.lk
    GitHub:      github.com/Vytheki-S

    Style: label in #8899AA, value in white, small font


================================================================
SECTION 4 — EDUCATION
================================================================
Section title: "Education"

LAYOUT: Vertical timeline
  - Vertical line down the left side: color #2A3A4A, 2px wide
  - Circle dot marker on the line: bg #00A3E0, 16px diameter

SINGLE ENTRY CARD:
  Position: right of the timeline line

  Card content:
    Institution:  SLIIT Northern University
    Degree:       BSc (Hons) Information Technology
                  — Data Science Specialization
    Duration:     2022 – Present (Expected 2025)
    Status badge: "3rd Year, 1st Semester"
                  bg #00A3E0/20, text #00A3E0, rounded-full
    Modules list (smaller text, color #8899AA):
      Data Structures • Algorithms • Web Development
      Mobile Development • Database Systems
      Software Engineering • Data Science Fundamentals

  Card style: bg #111827, border #2A3A4A, rounded-xl,
              padding 24px 28px


================================================================
SECTION 5 — SKILLS
================================================================
Section title: "Skills & Technologies"

LAYOUT: Skills grouped into 6 category blocks
Each block has a category heading and skill bars below it

CATEGORY 1 — Frontend & Web
  HTML / CSS            90%
  JavaScript            82%
  TypeScript            72%
  React                 78%
  Tailwind CSS          82%

CATEGORY 2 — Backend & APIs
  Django                70%
  Node.js               65%
  REST APIs             75%
  JWT Authentication    68%

CATEGORY 3 — Mobile
  Android / Kotlin      65%
  Firebase              60%
  Jetpack Compose       55%

CATEGORY 4 — Data Science
  Python                62%
  Pandas                55%
  NumPy                 52%

CATEGORY 5 — Databases
  MySQL                 72%
  MongoDB               65%
  PostgreSQL            60%
  SQLite                72%

CATEGORY 6 — Tools
  Git / GitHub          85%
  Figma                 75%
  Postman               78%
  VS Code               90%

SKILL BAR DESIGN:
  - Label left, percentage right, same line
  - Bar below: bg #2A3A4A (empty), filled part bg #00A3E0
  - Bar height: 6px, rounded-full
  - Bar width matches the percentage shown

TECH ICON PILLS ROW (below all bars):
  Show small rounded pills for each technology
  Style: bg #111827, border #2A3A4A, small text JetBrains Mono
  color #8899AA, rounded-full, padding 4px 12px
  Include: React, Django, TypeScript, Python, Kotlin,
           Figma, Git, MongoDB, MySQL, Firebase, Tailwind


================================================================
SECTION 6 — PROJECTS
================================================================
Section title: "My Projects"

FILTER BUTTONS ROW (above grid):
  All | Web | Android | AI | UI/UX
  Active button: bg #00A3E0, white text, rounded-full
  Inactive: bg transparent, border #2A3A4A, text #8899AA

GRID: 3 columns desktop, 2 tablet, 1 mobile

PROJECT CARDS — Design each card exactly like this:
  bg #111827, border #2A3A4A, rounded-xl, overflow hidden
  Hover: slight lift up + blue glow box-shadow

  TOP: Screenshot/thumbnail image area
       height 200px, bg #0D0D1A placeholder with project name

  BODY:
    - Row with title + badges:
        Title: white, bold, 18px
        If isClient=true: gold badge "CLIENT PROJECT"
          bg #F59E0B/20, text #F59E0B, rounded-full, small
        If isFeatured=true: gold star icon
    - Description: #8899AA, 14px, 2 lines max
    - Tech stack pills (JetBrains Mono, small, #8899AA,
      bg #0D0D1A, rounded-full, border #2A3A4A)

  BOTTOM:
    - GitHub button: icon + "Code" text, border #2A3A4A,
      text #8899AA, rounded-lg, small padding
    - Demo button (if available): bg #00A3E0, white,
      rounded-lg, small padding

ALL 9 PROJECTS TO SHOW:

1. "Gear-Up E-Commerce" [FEATURED ⭐]
   Desc: Full-stack e-commerce with React + Django REST,
         JWT auth, CRUD APIs, payment integration
   Tags: React, Django, Python, REST API, JWT
   Category: Web
   GitHub: Yes | Demo: No

2. "EventAure" [FEATURED ⭐]
   Desc: Event management platform built with TypeScript
         and React, component-based architecture
   Tags: TypeScript, React, CSS
   Category: Web
   GitHub: Yes | Demo: No

3. "Jaffna Thirvalluvar Cultural Center" [CLIENT ⭐] [FEATURED ⭐]
   Desc: Official website for real client cultural
         organization in Jaffna, full frontend + backend
   Tags: React, Django, MySQL
   Category: Web
   GitHub: Private | Demo: No

4. "Chatbot"
   Desc: AI-powered chatbot with Python and natural
         language processing capabilities
   Tags: Python, AI/ML
   Category: AI
   GitHub: Yes | Demo: No

5. "Exam-pro"
   Desc: Online examination system with auto-grading,
         timer, and result management
   Tags: PHP, MySQL, HTML, CSS
   Category: Web
   GitHub: Yes | Demo: No

6. "Leave Management System"
   Desc: Employee leave management with approval
         workflow and admin dashboard
   Tags: JavaScript, HTML, CSS
   Category: Web
   GitHub: Yes | Demo: No

7. "Event-pro"
   Desc: Java-based event management with booking,
         scheduling, and reporting features
   Tags: Java
   Category: Web
   GitHub: Yes | Demo: No

8. "Android Mobile Application"
   Desc: Mobile app with Android Studio and Kotlin
         using Jetpack Compose UI
   Tags: Kotlin, Android, Firebase
   Category: Android
   GitHub: No | Demo: No

9. "Figma UI/UX Mobile Design"
   Desc: Complete mobile app design with user flows,
         prototyping, and component library
   Tags: Figma, Prototyping, UI/UX
   Category: UI/UX
   GitHub: No | Demo: Preview


================================================================
SECTION 7 — GITHUB STATS
================================================================
Section title: "GitHub Activity"
Subtitle: "101 contributions in the last year"

LAYOUT: 2 columns on desktop, stacked on mobile

Show 3 stat cards (image embeds in final build):
  Card 1: GitHub Stats
    (stats card from github-readme-stats for Vytheki-S)
    Placeholder: show mock stats
      Total Stars: 2
      Total Commits: 82
      Total PRs: 1
      Total Issues: 0
      Contributed to: 4 repos

  Card 2: Top Languages
    Show language bars:
      TypeScript  35%
      Python      25%
      Java        18%
      JavaScript  12%
      PHP         10%

  Card 3: Streak Stats
    Current Streak: 0 days
    Longest Streak: 4 days
    Total Contributions: 101

Card style: bg #111827, border #2A3A4A, rounded-xl,
            padding 20px, dark theme matching portfolio


================================================================
SECTION 8 — CONTACT
================================================================
Section title: "Get In Touch"
Subtitle: "Have a project in mind or want to collaborate?
           Send me a message."

LAYOUT: Two columns on desktop

LEFT COLUMN — Contact Details:
  Each item has an icon + label + value

  📧 Email
     d23615816@my.sliit.lk

  🐙 GitHub
     github.com/Vytheki-S

  💼 LinkedIn
     linkedin.com/in/vythekie-sathyananthan-a7b2b7245

  📍 Location
     Jaffna, Sri Lanka

  🟢 Status
     "Actively seeking internships & junior roles in 2026"
     Style: bg #22C55E/20, text #22C55E, rounded-full badge

  Social icon buttons below (GitHub + LinkedIn):
    Circular icon buttons, border #2A3A4A, bg transparent
    hover: border #00A3E0

RIGHT COLUMN — Contact Form:
  Form fields (each with label above and input below):

  Field 1: "Your Name"
    Input placeholder: "Vytheki Sathiyananthan"
    Style: bg #0D0D1A, border #2A3A4A, text white,
           rounded-lg, padding 12px 16px, full width

  Field 2: "Your Email"
    Input placeholder: "your@email.com"
    Same style as above

  Field 3: "Subject"
    Input placeholder: "Project Inquiry"
    Same style as above

  Field 4: "Message"
    Textarea, 5 rows
    Placeholder: "Tell me about your project or opportunity..."
    Same style as above, resize-none

  Send Button:
    Text: "Send Message →"
    Style: bg #00A3E0, white text, bold, rounded-lg,
           full width, padding 14px, font-size 16px
    Hover: slightly darker blue


================================================================
SECTION 9 — FOOTER
================================================================
Background: #0D0D1A
Top border: 1px solid #2A3A4A

TOP ROW — Three columns:
  Left:
    Name: "Vytheki Sathiyananthan" — white, bold, 18px
    Tagline: "Full-Stack Developer & Android Developer"
             color #8899AA, 14px

  Center:
    Quick links (same as navbar):
    About Me | Education | Skills | Projects | Contact
    Color: #8899AA, 14px, hover color #00A3E0

  Right:
    Social icon links:
    GitHub icon — white, 20px, hover #00A3E0
    LinkedIn icon — white, 20px, hover #00A3E0
    Email icon — white, 20px, hover #00A3E0

BOTTOM ROW:
  Left: "© 2025 Vytheki Sathiyananthan. All rights reserved."
  Right: "Built with React + Django"
  Both: color #8899AA, 13px, font Inter


================================================================
SPACING AND SIZING REFERENCE
================================================================
Section top/bottom padding:    80px (py-20)
Section left/right padding:    96px desktop, 24px mobile (px-6 lg:px-24)
Card border radius:            12px (rounded-xl)
Card padding:                  24px
Card border:                   1px solid #2A3A4A
Button border radius:          8px (rounded-lg)
Button padding primary:        12px 28px
Input border radius:           8px
Input padding:                 12px 16px
Gap between grid cards:        24px (gap-6)
Gap between sections:          0 (sections flow directly)
Navbar height:                 64px
Brand box padding:             8px 16px
Social icon size:              24px
Profile photo circle:          320-360px diameter
Timeline line width:           2px
Timeline dot size:             16px
Skill bar height:              6px
Filter button border radius:   9999px (rounded-full)
Tech pill padding:             4px 12px
Badge border radius:           9999px (rounded-full)


================================================================
RESPONSIVE BREAKPOINTS
================================================================
Mobile  (< 640px):   Single column, hamburger menu,
                      reduced font sizes, stacked sections
Tablet  (640-1024px): 2-column grids, full navbar
Desktop (> 1024px):   Full layout as described above,
                      3-column project grid


================================================================
COMPONENT STATES TO SHOW IN DESIGN
================================================================
Show these states as separate frames or variants:

NAVBAR:
  - Default (transparent bg)
  - Scrolled (frosted glass bg)
  - Mobile open (dropdown visible)

BUTTONS:
  - Default state
  - Hover state (slightly darker + glow)

PROJECT CARDS:
  - Default state
  - Hover state (lifted + blue glow)
  - Card with CLIENT badge
  - Card with Featured star

CONTACT FORM:
  - Empty state (default)
  - Filled state
  - Loading state (spinner on button)
  - Success state (green message below form)
  - Error state (red message below form)

FILTER BUTTONS:
  - "All" selected (active)
  - One category selected

SKILL BARS:
  - Show filled state at the percentages listed


================================================================
PAGE FRAME SIZES TO CREATE
================================================================
Desktop Frame:  1440 x 900px  (main design frame)
Tablet Frame:   768 x 1024px
Mobile Frame:   390 x 844px   (iPhone 14 size)


================================================================
ASSETS NEEDED — CREATE PLACEHOLDERS FOR:
================================================================
1. Profile photo circle — label "Vytheki — Profile Photo"
   Size: 320px circle, placeholder bg #1A2540

2. Project thumbnails (9 total) — each 400x220px
   Each placeholder labeled with project name
   bg: dark gradient #0D0D1A to #1A2540

3. Tech stack SVG icons (show as colored circles as placeholder)
   React (blue), Django (green), Python (yellow), TypeScript (blue),
   Kotlin (purple), Firebase (orange), Git (red), Figma (pink),
   MongoDB (green), MySQL (blue), Tailwind (cyan), Node.js (green)

4. GitHub icon (for navbar, footer, contact section)
5. LinkedIn icon (for hero, footer, contact section)
6. Email icon (for contact section, footer)
7. Location pin icon (for contact section)


================================================================
ADDITIONAL DESIGN NOTES FOR FIGMA AI
================================================================
- Use Auto Layout for all components (enables easy responsive)
- Create a local color styles library with all 8 colors above
- Create text styles: H1, H2, H3, Body, Caption, Code
- Make the project card a component with variants:
    Default / Hover / WithClientBadge / WithFeaturedStar
- Make the skill bar a component (reusable with different %)
- Make the timeline entry a component
- Make the contact form fields as components with states:
    Default / Focused / Error / Filled
- Use 8px grid system for all spacing
- All icons should be from a consistent icon set
  (recommend: Heroicons or Lucide — available free)
- The overall feel should match: dark, professional, techy,
  with clean blue neon accents. Similar to a VS Code dark
  theme brought to life as a website.


================================================================
END OF DESIGN BRIEF
Vytheki Sathiyananthan — Portfolio 2025
github.com/Vytheki-S | d23615816@my.sliit.lk
================================================================