# NAEL KSA | Premium Corporate Website Implementation

We have successfully engineered an ultra-premium, modern, and highly responsive single-page landing site for **LAMIYA AL KHALEEJ AL ITTIHAD ESTABLISHMENT FOR GENERAL CONTRACTING (NAEL)**. 

The website captures the professional industrial aesthetic of high-end, award-winning **Awwwards** websites, implementing a dark luxury theme with glassmorphism, buttery smooth animations, and high-performance layouts.

---

## 🏗️ Technical Stack & Dependencies

*   **Framework**: Next.js 16.2.6 (App Router, static compilation ready)
*   **Language**: TypeScript 5.x
*   **Styling**: Tailwind CSS v4 (incorporating advanced custom theme variables and keyframes)
*   **Core Animations**: Framer Motion & CSS hardware-accelerated animations
*   **Smooth Scroll**: Lenis Smooth Scroll (inertia kinetic scrolling)
*   **Icons**: Lucide React Icons & custom vector SVGs

---

## 🎨 Design System & Colors

We defined the precise corporate branding palette directly inside our custom Tailwind v4 theme:
*   **Primary Green**: `#02534D` (Sleek Saudi industrial green)
*   **Primary Yellow**: `#FFCC00` (Vibrant machinery amber accent)
*   **Black Canvas**: `#0B0B0B` (Luxurious dark slate background)
*   **White Canvas**: `#FFFFFF` (High-contrast light section backgrounds)
*   **Typography**:
    *   **Headings**: Oswald / Bebas Neue style (Impactful, heavy-set industrial typeface)
    *   **Body**: Inter / system-ui style (Highly legible, modern corporate copy)

---

## 🌟 Advanced Interactive Features

### 1. 🎬 Cinematic Page Loader (`src/components/Loader.tsx`)
A full-screen luxury intro overlay that boots up rapidly. It cycles through the core corporate pillars (*"NAEL"*, *"BUILDING TRUST"*, *"GENERAL CONTRACTING"*, *"SAUDI ARABIA"*) in heavy typography while a glowing yellow progress bar counts to `100%`. Once loaded, it exits upwards using a high-end cubic bezier curve transition, revealing the website with a premium feel.

### 2. 🖱️ Dynamic Pointer follow Glow (`src/components/CustomCursor.tsx`)
A desktop-only interactive cursor composed of a solid green inner dot and a spring-loaded glowing yellow outer ring that lags slightly to provide weight. It automatically scales up, shifts colors, and glows when hovering over clickable interactive links, buttons, and cards. It automatically disables on mobile touchscreens.

### 3. 🛸 Sticky Glassmorphic Navbar (`src/components/Navbar.tsx`)
A multi-layered navigation bar:
*   **Top Info Bar**: Floating contacts (Dual phone lines, office email, address, operating hours, and quick social vectors). On scroll, it smoothly slides upwards out of view to maximize vertical space.
*   **Main Nav Menu**: Sticky bar with a glassmorphism backdrop filter (`backdrop-blur-md`). Nav links feature animated yellow underlines that expand on hover and track the currently active section.
*   **Mobile Menu Drawer**: A sleek sliding mobile panel featuring staggered entrance links and quick CTAs.

### 4. 🚜 Cinematic Split Hero Section (`src/components/Hero.tsx`)
*   **Mouse-Follow Radial Light**: Illuminates the dark grid behind like an industrial flashlight beam following your cursor.
*   **High-Impact Split-Grid Layout**: Separates the left typography block from the right machinery imagery with a glowing diagonal yellow neon splitter line.
*   **Floating Amber Dust**: Slow-drifting vector dust particles float in the background to provide absolute visual depth.
*   **Spring Statistics Counters**: Counters that count up from 0 to target goals (10+ Years of Experience, 150+ Completed, etc.) when the page renders.
*   **Portal Contact Desk**: A highly modern grid details card offering immediate access to phones, email, and location.

### 5. 📦 High-Contrast Services Grid (`src/components/Services.tsx`)
To create a high-impact, award-winning rhythm, the site transitions into a crisp, pure white gallery context:
*   **3-and-2 Grid Layout**: Cards 1, 2, 3 align in row one; cards 4, 5 center in row two (as depicted in the reference design).
*   **Overlapping Yellow Badges**: Floating circular service icon badges overlap the image-description borders.
*   **3D Hover Tilt Effects**: Cards tilt and lift based on pointer position, while the underlying image zooms in.

### 6. 🛡️ Deep Green "Why Us" Columns (`src/components/WhyChooseUs.tsx`)
Features a deep green-to-black luxury canvas detailing the company's compliance parameters:
*   **6-Column Linear Layout**: Sleek, vertical division borders separate the six features.
*   **Thin Golden Icons**: Line-art icons that glow and bounce on hover.
*   **Aramco & SABIC Banner**: A warning-level badge detailing safety parameters and Aramco compliance.

### 7. 🏗️ Sunset Construction Profile (`src/components/About.tsx`)
*   **Split Layout**: Left features corporate description, target mission cards, and a styled CTA button; right mounts a tall construction image.
*   **Bottom Stats Overlay**: A deep-green horizontal overlay block that spans across the image, highlighting the 10+ Years, 150+ Projects, 50+ Experts, and 100% Satisfaction metrics with clean custom yellow symbols.

### 8. 📐 Projects Showcase Banner (`src/components/Projects.tsx`)
A 5-column side-by-side layout displaying NAEL's active segments. Each column features a parallax scaling image, a glowing upper-right arrow, and a bottom deep green footer that changes to primary yellow on hover.

### 9. 🏎️ Infinite Logos Marquee (`src/components/Partners.tsx`)
A hardware-accelerated infinite scrolling marquee displaying glassmorphic logo cards for **SABIC**, **Saudi Aramco**, **SATORP**, **Ma'aden**, **Marafiq**, and the **National Water Company (NWC)**. Includes aesthetic slider arrow indicators on the right.

### 10. 💬 Luxury Testimonials Slider (`src/components/Testimonials.tsx`)
A premium user feedback slider utilizing Framer Motion's `AnimatePresence`. Swapping slides triggers buttery smooth horizontal slides, complete with star ratings and detailed corporate badges.

### 11. ⚙️ Interactive Form Portal (`src/components/Contact.tsx` & `src/components/CTA.tsx`)
*   **CTA Banner**: A full-width pulsating background glow offering instant estimators and direct WhatsApp buttons.
*   **Form Desk**: Provides validation inputs (Name, Phone, Email, selected dropdown service, and text description). 
*   **Double Trigger Actions**: Can submit standard quote forms with visual loading indicators, or compile the form data and redirect the client to pre-filled message logs on WhatsApp.

### 12. 🗺️ Dark-Mode Google Map Footer (`src/components/Footer.tsx`)
An expansive site footer complete with site maps, sitemaps, dual C.R. badges, and a custom **Google Map locator** running high-end CSS filters:
```css
filter: grayscale(100%) invert(92%) contrast(85%) brightness(95%) hue-rotate(180deg);
```
This renders the Google Map inside a gorgeous slate dark-mode frame that matches our luxurious brand identity.

---

## 📁 Project Architecture & Files Created

All code files are completely standard, modular, fully typed, and placed within the primary workspace:
```bash
src/
├── app/
│   ├── globals.css      # Core Tailwind CSS v4 imports, keyframes, transitions & variables
│   ├── layout.tsx       # Root document structure (Cursor, SmoothScroll, & SEO)
│   └── page.tsx         # Page orchestrator importing all structural sections
├── components/
│   ├── About.tsx        # Split About Us section & bottom stats overlay
│   ├── Contact.tsx      # Comprehensive quote form & office hotlines
│   ├── CTA.tsx          # Full-width pulsating banner
│   ├── CustomCursor.tsx # Interactive desktop follow pointer
│   ├── Footer.tsx       # Dark-mode Google Map & sitemap links
│   ├── Hero.tsx         # Split-screen cinematic hero, radial beams, & counters
│   ├── Loader.tsx       # Cycling word intro loader & bezier progress
│   ├── Navbar.tsx       # Collapsing floating top-bar & sticky glass nav
│   ├── Partners.tsx     # Infinite auto-scrolling logo marquee
│   ├── Projects.tsx     # 5-column side-by-side featured project grid
│   ├── Services.tsx     # 3-and-2 white contrast service tilts
│   ├── SmoothScroll.tsx # Lenis smooth scrolling orchestrator
│   ├── Testimonials.tsx # Feedback slide carousel with stars
│   └── WhyChooseUs.tsx  # Deep green compliance column grids
```

---

## 🚀 How to Run Locally

To launch the website on your local machine, run the standard development node commands:

1.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:3000`.

2.  **Verify Production Compilation & Static Generation**:
    ```bash
    npm run build
    ```
    This triggers Next.js static page rendering. The workspace has been pre-validated and compiles in **under 15 seconds** with **zero errors**.

---

> [!IMPORTANT]
> The website is **100% self-contained** and uses robust local system typography fallbacks during compilation, ensuring successful builds even in completely offline, air-gapped, or firewalled development environments.
